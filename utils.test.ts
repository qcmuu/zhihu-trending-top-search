#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json
import { assertEquals, assertStringIncludes } from "std/testing/asserts.ts";
import { SearchWord } from "./types.ts";

import {
  createArchive,
  createList,
  createReadme,
  mergeWords,
} from "./utils.ts";

Deno.test("mergeWords", function (): void {
  const words1: SearchWord[] = [];
  const words2: SearchWord[] = [{ query: "foo", display_query: "bar" }];
  const words3: SearchWord[] = [{ query: "foo", display_query: "hello" }];
  const words4: SearchWord[] = [{ query: "hello", display_query: "world" }];
  const words5: SearchWord[] = [
    { query: "foo", display_query: "bar" },
    { query: "hello", display_query: "world" },
  ];

  assertEquals(mergeWords(words1, words2), words2);
  assertEquals(mergeWords(words1, words5), words5);
  assertEquals(mergeWords(words2, words2), words2);
  assertEquals(
    mergeWords(words2, words3),
    [
      { query: "foo", display_query: "bar" },
      { query: "foo", display_query: "hello" },
    ],
  );
  assertEquals(mergeWords(words4, words5), [
    { query: "hello", display_query: "world" },
    { query: "foo", display_query: "bar" },
  ]);
  assertEquals(
    mergeWords(words3, words5),
    [
      { query: "foo", display_query: "hello" },
      { query: "foo", display_query: "bar" },
      { query: "hello", display_query: "world" },
    ],
  );
});

Deno.test("mergeWords 不把整数样式标题重排到最前", function (): void {
  // 真实数据：2025-05-21 抓到 "520"，普通对象键会把整数样式键按数值升序提前，
  // 导致「数组下标即排名」失真。
  const prev: SearchWord[] = [
    { query: "多家银行下调存款利率", display_query: "多家银行下调存款利率" },
    { query: "BLG战胜TES", display_query: "BLG战胜TES" },
  ];
  const now: SearchWord[] = [{ query: "520", display_query: "520" }];

  assertEquals(mergeWords(now, prev).map((w) => w.display_query), [
    "520",
    "多家银行下调存款利率",
    "BLG战胜TES",
  ]);
  assertEquals(mergeWords(prev, now).map((w) => w.display_query), [
    "多家银行下调存款利率",
    "BLG战胜TES",
    "520",
  ]);
});

Deno.test("createReadme 不把标题里的 $ 当成替换模式", async (): Promise<void> => {
  const readme = await createReadme([
    { query: "花费", display_query: "花费 $& 元" },
  ]);
  assertStringIncludes(readme, "花费 $& 元");
  assertStringIncludes(readme, "<!-- BEGIN -->\n<!-- 最后更新时间");
});

Deno.test("createList", function (): void {
  const words: SearchWord[] = [
    { query: "foo", display_query: "bar" },
    { query: "hello", display_query: "world" },
  ];

  assertStringIncludes(createList(words), "<!-- BEGIN -->");
  assertStringIncludes(createList(words), "<!-- END -->");
  assertStringIncludes(createList(words), "foo");
  assertStringIncludes(createList(words), "world");
  assertStringIncludes(createList(words), "https://www.zhihu.com/search");
});

Deno.test("createList encodes query so deno fmt 折行也不会拆坏链接", () => {
  const list = createList([
    {
      query: "朱镕基同志遗体 18 日火化",
      display_query: "朱镕基同志遗体 18 日火化",
    },
  ]);
  assertStringIncludes(
    list,
    "q=" + encodeURIComponent("朱镕基同志遗体 18 日火化"),
  );
  assertStringIncludes(list, "朱镕基同志遗体 18 日火化");
});

Deno.test("createArchive", function (): void {
  const words: SearchWord[] = [
    { query: "foo", display_query: "bar" },
    { query: "hello", display_query: "world" },
  ];

  assertStringIncludes(createArchive(words, "2020-02-02"), "# 2020-02-02");
  assertStringIncludes(createArchive(words, "2020-02-02"), "共 2 条");
});

Deno.test("createReadme", async function (): Promise<void> {
  const words: SearchWord[] = [
    { query: "foo", display_query: "bar" },
    { query: "hello", display_query: "world" },
  ];

  assertStringIncludes(await createReadme(words), "知乎");
  assertStringIncludes(await createReadme(words), "zhihu-trending-top-search");
});
