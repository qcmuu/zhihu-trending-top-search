#!/usr/bin/env -S deno run --allow-read --import-map=import_map.json
import { assertEquals } from "std/testing/asserts.ts";

import { buildIndex, compressDay, dateFromFileName } from "./build_index.ts";
import type { SearchWord } from "./types.ts";

// ---- dateFromFileName ----

Deno.test("dateFromFileName 接受合法日期文件名", () => {
  assertEquals(dateFromFileName("2020-11-24.json"), "2020-11-24");
  assertEquals(dateFromFileName("2026-08-14.json"), "2026-08-14");
});

Deno.test("dateFromFileName 拒绝非 .json 与非法日期", () => {
  assertEquals(dateFromFileName("README.md"), null);
  assertEquals(dateFromFileName(".gitignore"), null);
  assertEquals(dateFromFileName("2020-11-24.md"), null);
  assertEquals(dateFromFileName("20201124.json"), null); // 缺连字符
  assertEquals(dateFromFileName("2020-13-01.json"), null); // 校验由格式正则负责
  assertEquals(dateFromFileName("notes.json"), null);
});

// ---- compressDay ----

Deno.test("compressDay 保序并去重同 display_query", () => {
  const words: SearchWord[] = [
    { display_query: "A 标题", query: "A" },
    { display_query: "B 标题", query: "B" },
    { display_query: "A 标题", query: "A2" }, // 重复 display_query → 丢弃
    { display_query: "C 标题", query: "C" },
  ];
  assertEquals(compressDay(words), [
    ["A 标题", "A"],
    ["B 标题", "B"],
    ["C 标题", "C"],
  ]);
});

Deno.test("compressDay 跳过字段类型错误", () => {
  const words = [
    { display_query: "好", query: "好" },
    { display_query: 123, query: "数字标题" }, // 非法 → 跳过
    { display_query: "缺 query" }, // 缺字段 → query 为 undefined 非 string → 跳过
    { display_query: "末", query: "末" },
  ] as unknown as SearchWord[];
  assertEquals(compressDay(words), [
    ["好", "好"],
    ["末", "末"],
  ]);
});

Deno.test("compressDay 处理空输入", () => {
  assertEquals(compressDay([]), []);
});

// ---- buildIndex ----

Deno.test("buildIndex 排序日期、丢弃空天、汇总 meta", () => {
  const raw = {
    "2020-11-26": [
      { display_query: "Z", query: "z" },
    ],
    "2020-11-24": [
      { display_query: "A", query: "a" },
      { display_query: "B", query: "b" },
    ],
    "2020-11-25": [], // 空天 → 不应出现在 days
  };
  const index = buildIndex(raw, "2026-01-01T00:00:00.000Z");

  assertEquals(Object.keys(index.days), ["2020-11-24", "2020-11-26"]);
  assertEquals(index.days["2020-11-24"], [["A", "a"], ["B", "b"]]);
  assertEquals(index.meta.days, 2);
  assertEquals(index.meta.entries, 3); // A,B + Z = 3
  assertEquals(index.meta.start, "2020-11-24");
  assertEquals(index.meta.end, "2020-11-26");
  assertEquals(index.meta.generated, "2026-01-01T00:00:00.000Z");
});

Deno.test("buildIndex 空数据集 meta 字段为 null", () => {
  const index = buildIndex({}, "2026-01-01T00:00:00.000Z");
  assertEquals(index.meta.days, 0);
  assertEquals(index.meta.entries, 0);
  assertEquals(index.meta.start, null);
  assertEquals(index.meta.end, null);
  assertEquals(index.days, {});
});

Deno.test("buildIndex 忽略非法日期键", () => {
  const raw = {
    "2020-11-24": [{ display_query: "A", query: "a" }],
    "not-a-date": [{ display_query: "X", query: "x" }],
    "20201124": [{ display_query: "Y", query: "y" }],
  };
  const index = buildIndex(raw, "2026-01-01T00:00:00.000Z");
  assertEquals(Object.keys(index.days), ["2020-11-24"]);
});
