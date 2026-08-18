import type { SearchWord } from "./types.ts";

export const ENDPOINTS = {
  recommend: "https://www.zhihu.com/api/v4/search/recommend_query/v2",
  topSearch: "https://www.zhihu.com/api/v4/search/top_search",
} as const;

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept: "application/json,text/plain,*/*",
  Referer: "https://www.zhihu.com/",
};

export type Fetcher = (
  url: string,
  init?: RequestInit,
) => Promise<Response>;

function pickStr(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const s = value.trim();
  return s.length > 0 ? s : null;
}

/** 把两种接口的单条记录收成仓库既有的 { query, display_query }。 */
export function normalizeWord(raw: unknown): SearchWord | null {
  if (raw === null || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const display_query = pickStr(o.query_display) ?? pickStr(o.display_query);
  const query = pickStr(o.real_query) ?? pickStr(o.query);
  if (!display_query || !query) return null;
  return { query, display_query };
}

function mapList(list: unknown): SearchWord[] {
  if (!Array.isArray(list)) return [];
  const out: SearchWord[] = [];
  for (const item of list) {
    const word = normalizeWord(item);
    if (word) out.push(word);
  }
  return out;
}

export function parseRecommendV2(data: unknown): SearchWord[] {
  if (data === null || typeof data !== "object") return [];
  const rec = (data as { recommend_queries?: { queries?: unknown } })
    .recommend_queries;
  return mapList(rec?.queries);
}

export function parseTopSearch(data: unknown): SearchWord[] {
  if (data === null || typeof data !== "object") return [];
  const top = (data as { top_search?: { words?: unknown } }).top_search;
  return mapList(top?.words);
}

/** 用指定时区格式化 YYYY-MM-DD，不依赖进程 TZ。 */
export function formatDate(
  date: Date,
  timeZone = "Asia/Shanghai",
): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJson(
  url: string,
  fetchImpl: Fetcher,
  retries: number,
): Promise<unknown> {
  let lastErr: Error | null = null;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetchImpl(url, { headers: HEADERS });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`.trim());
      }
      return await res.json();
    } catch (err) {
      lastErr = err instanceof Error ? err : new Error(String(err));
      if (i < retries - 1) await sleep(400 * (i + 1));
    }
  }
  throw lastErr ?? new Error("请求失败");
}

const SOURCES: {
  name: string;
  url: string;
  parse: (data: unknown) => SearchWord[];
}[] = [
  {
    name: "recommend_query/v2",
    url: ENDPOINTS.recommend,
    parse: parseRecommendV2,
  },
  { name: "top_search", url: ENDPOINTS.topSearch, parse: parseTopSearch },
];

/**
 * 先拉搜索框热搜（与 2026-08 迁移后的归档连续），空了再回退到 top_search。
 */
export async function fetchHotSearch(opts?: {
  fetch?: Fetcher;
  retries?: number;
}): Promise<{ words: SearchWord[]; source: string }> {
  const fetchImpl = opts?.fetch ?? fetch;
  const retries = opts?.retries ?? 3;
  const errors: string[] = [];

  for (const src of SOURCES) {
    try {
      const data = await getJson(src.url, fetchImpl, retries);
      const words = src.parse(data);
      if (words.length > 0) return { words, source: src.name };
      errors.push(`${src.name}: 空列表`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`${src.name}: ${msg}`);
    }
  }

  throw new Error(`接口未返回任何热搜词条（${errors.join("；")}）`);
}
