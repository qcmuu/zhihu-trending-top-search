#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write --import-map=import_map.json
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { join } from "std/path/mod.ts";

import type { SearchWord } from "./types.ts";
import { fetchHotSearch, formatDate } from "./scrape.ts";
import { createArchive, createReadme, mergeWords } from "./utils.ts";

async function fileExists(path: string): Promise<boolean> {
  try {
    await Deno.stat(path);
    return true;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) return false;
    throw err;
  }
}

function readWords(raw: string): SearchWord[] {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter((item) =>
    item &&
    typeof item === "object" &&
    typeof item.query === "string" &&
    typeof item.display_query === "string"
  );
}

const { words, source } = await fetchHotSearch();

const yyyyMMdd = formatDate(new Date());
const fullPath = join("raw", `${yyyyMMdd}.json`);

let wordsAlreadyDownload: SearchWord[] = [];
if (await fileExists(fullPath)) {
  wordsAlreadyDownload = readWords(await Deno.readTextFile(fullPath));
}

// 当天文件是各小时的并集；README 只展示这一次抓到的榜，避免「今日」变成全天口袋
const wordsAll = mergeWords(words, wordsAlreadyDownload);
await Deno.writeTextFile(fullPath, JSON.stringify(wordsAll, null, 2) + "\n");

const readme = await createReadme(words);
await Deno.writeTextFile("./README.md", readme);

const archiveText = createArchive(wordsAll, yyyyMMdd);
const archivePath = join("archives", `${yyyyMMdd}.md`);
await Deno.writeTextFile(archivePath, archiveText);

console.log(
  `[scrape] ${yyyyMMdd} source=${source} now=${words.length} union=${wordsAll.length}`,
);
