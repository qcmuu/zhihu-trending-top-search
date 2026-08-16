#!/usr/bin/env -S deno run --allow-read --allow-write --import-map=import_map.json
/**
 * 把 raw/*.json 离线构建为静态站点使用的紧凑索引 web/index.json。
 *
 * 设计要点（第一性原理）：
 * - 数据集很小（约 2000 天 × 平均 20 条），全量加载即可，无需后端/分页/构建工具。
 * - 每条目压缩为 [display_query, query]，数组下标即当日排名（0 起），原始文件已保序。
 * - 纯函数 buildIndex() 与 IO 解耦，便于单元测试。
 */
import { fromFileUrl, join } from "std/path/mod.ts";

import type { SearchIndex, SearchWord } from "./types.ts";

const ROOT = fromFileUrl(new URL(".", import.meta.url));
const RAW_DIR = join(ROOT, "raw");
const OUT_DIR = join(ROOT, "web");
const OUT_FILE = join(OUT_DIR, "index.json");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** 从 "raw/2020-11-24.json" 提取并校验日期键。非法（格式或语义）则返回 null。 */
export function dateFromFileName(name: string): string | null {
  if (!name.endsWith(".json")) return null;
  const date = name.slice(0, -5);
  if (!DATE_RE.test(date)) return null;
  const [y, m, d] = date.split("-").map(Number);
  // 语义校验：防止 2020-13-01 这类非法日期污染索引与排序
  if (y < 2000 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null;
  return date;
}

/** 把一天的原始词条压缩为紧凑条目（去重保序：同 display_query 仅保留首个）。 */
export function compressDay(words: SearchWord[]): [string, string][] {
  const seen = new Set<string>();
  const out: [string, string][] = [];
  for (const w of words) {
    if (typeof w.display_query !== "string" || typeof w.query !== "string") {
      continue;
    }
    if (seen.has(w.display_query)) continue;
    seen.add(w.display_query);
    out.push([w.display_query, w.query]);
  }
  return out;
}

/**
 * 从已读入的 {date: RawWords} 映射构建搜索索引。
 * 纯函数：不碰文件系统，便于测试。
 */
export function buildIndex(
  rawByDate: Record<string, SearchWord[]>,
  generated: string,
): SearchIndex {
  const dates = Object.keys(rawByDate).filter((d) => DATE_RE.test(d)).sort();
  const days: SearchIndex["days"] = {};
  let entries = 0;
  for (const date of dates) {
    const entries0 = compressDay(rawByDate[date]);
    if (entries0.length > 0) {
      days[date] = entries0;
      entries += entries0.length;
    }
  }
  return {
    meta: {
      days: Object.keys(days).length,
      entries,
      start: dates[0] ?? null,
      end: dates[dates.length - 1] ?? null,
      generated,
    },
    days,
  };
}

async function readRawDir(dir: string): Promise<Record<string, SearchWord[]>> {
  const out: Record<string, SearchWord[]> = {};
  let skipped = 0;
  for await (const entry of Deno.readDir(dir)) {
    if (!entry.isFile) continue;
    const date = dateFromFileName(entry.name);
    if (!date) {
      skipped++;
      continue;
    }
    try {
      const content = await Deno.readTextFile(join(dir, entry.name));
      const parsed = JSON.parse(content);
      if (!Array.isArray(parsed)) {
        console.warn(`[skip] ${date}: 顶层不是数组`);
        skipped++;
        continue;
      }
      out[date] = parsed as SearchWord[];
    } catch (err) {
      console.warn(`[skip] ${entry.name}: ${(err as Error).message}`);
      skipped++;
    }
  }
  if (skipped > 0) console.warn(`[summary] 跳过 ${skipped} 个无效文件`);
  return out;
}

function formatBytes(n: number): string {
  return n < 1024 ? `${n} B` : `${(n / 1024).toFixed(1)} KiB`;
}

async function main(): Promise<void> {
  const generated = new Date().toISOString();
  console.log(`[build] 读取 ${RAW_DIR}`);
  const rawByDate = await readRawDir(RAW_DIR);
  const index = buildIndex(rawByDate, generated);

  await Deno.mkdir(OUT_DIR, { recursive: true });
  const json = JSON.stringify(index);
  // 用 UTF-8 字节数而非字符串长度统计（中文每字占 3 字节，json.length 会严重低估）
  const bytes = new TextEncoder().encode(json).byteLength;
  await Deno.writeTextFile(OUT_FILE, json);

  console.log(
    `[done] ${index.meta.days} 天 / ${index.meta.entries} 条 → ${OUT_FILE} (${
      formatBytes(bytes)
    })`,
  );
}

if (import.meta.main) {
  await main();
}
