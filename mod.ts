#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { format } from "std/datetime/mod.ts";
import { join } from "std/path/mod.ts";
import { exists } from "std/fs/mod.ts";

import type { SearchWord, TopSearch } from "./types.ts";
import { createArchive, createReadme, mergeWords } from "./utils.ts";

// 2026-08：知乎废弃 top_search 接口（返回 words:null），迁移到 recommend_query/v2
const response = await fetch(
  "https://www.zhihu.com/api/v4/search/recommend_query/v2",
);

if (!response.ok) {
  console.error(response.statusText);
  Deno.exit(-1);
}

const result: TopSearch = await response.json();

const queries = result.recommend_queries?.queries ?? [];
if (queries.length === 0) {
  console.error("接口未返回任何热搜词条");
  Deno.exit(-1);
}

// 映射回仓库既有格式，保持 raw/*.json 与下游（索引、前端）不变
const words: SearchWord[] = queries.map((q) => ({
  query: q.real_query,
  display_query: q.query_display,
}));

const yyyyMMdd = format(new Date(), "yyyy-MM-dd");
const fullPath = join("raw", `${yyyyMMdd}.json`);

let wordsAlreadyDownload: SearchWord[] = [];
if (await exists(fullPath)) {
  const content = await Deno.readTextFile(fullPath);
  wordsAlreadyDownload = JSON.parse(content);
}

// 保存原始数据
const wordsAll = mergeWords(words, wordsAlreadyDownload);
await Deno.writeTextFile(fullPath, JSON.stringify(wordsAll));

// 更新 README.md
const readme = await createReadme(wordsAll);
await Deno.writeTextFile("./README.md", readme);

// 更新 archives
const archiveText = createArchive(wordsAll, yyyyMMdd);
const archivePath = join("archives", `${yyyyMMdd}.md`);
await Deno.writeTextFile(archivePath, archiveText);
