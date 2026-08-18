#!/usr/bin/env -S deno test -A --import-map=import_map.json
import {
  assertEquals,
  assertStringIncludes,
  assertThrowsAsync,
} from "std/testing/asserts.ts";

import {
  fetchHotSearch,
  formatDate,
  normalizeWord,
  parseRecommendV2,
  parseTopSearch,
} from "./scrape.ts";
import type { SearchWord } from "./types.ts";

Deno.test("formatDate uses Asia/Shanghai, not UTC", () => {
  // 16:00 UTC = 次日 00:00 上海
  assertEquals(
    formatDate(new Date("2026-08-17T16:00:00Z"), "Asia/Shanghai"),
    "2026-08-18",
  );
  // 15:59 UTC = 当天 23:59 上海
  assertEquals(
    formatDate(new Date("2026-08-17T15:59:00Z"), "Asia/Shanghai"),
    "2026-08-17",
  );
});

Deno.test("normalizeWord accepts both API shapes", () => {
  assertEquals(
    normalizeWord({
      query_display: "嫦娥五号发射成功",
      real_query: "嫦娥五号",
    }),
    { query: "嫦娥五号", display_query: "嫦娥五号发射成功" },
  );
  assertEquals(
    normalizeWord({ query: "苹果", display_query: "苹果掉出前三" }),
    { query: "苹果", display_query: "苹果掉出前三" },
  );
});

Deno.test("normalizeWord drops empty or non-object items", () => {
  assertEquals(normalizeWord(null), null);
  assertEquals(normalizeWord("x"), null);
  assertEquals(normalizeWord({ query: "", display_query: "有字" }), null);
  assertEquals(normalizeWord({ query: "有字", display_query: "  " }), null);
});

const recommendFixture = {
  recommend_queries: {
    queries: [
      {
        query: "官方修改条例",
        query_display: "官方修改《住房公积金管理条例》",
        real_query: "官方修改《住房公积金管理条例》",
      },
      { query: "", query_display: "", real_query: "" },
      null,
    ],
  },
};

const topSearchFixture = {
  top_search: {
    words: [
      { query: "披荆斩棘", display_query: "披荆斩棘" },
      { query: "银行能办结婚证了", display_query: "银行能办结婚证了" },
    ],
  },
};

Deno.test("parseRecommendV2 skips invalid rows", () => {
  const words = parseRecommendV2(recommendFixture);
  assertEquals(words.length, 1);
  assertEquals(words[0].display_query, "官方修改《住房公积金管理条例》");
});

Deno.test("parseRecommendV2 empty when words/queries missing", () => {
  assertEquals(parseRecommendV2({ recommend_queries: { queries: null } }), []);
  assertEquals(parseRecommendV2({}), []);
  assertEquals(parseRecommendV2(null), []);
});

Deno.test("parseTopSearch reads words; null is empty not crash", () => {
  assertEquals(parseTopSearch(topSearchFixture), [
    { query: "披荆斩棘", display_query: "披荆斩棘" },
    { query: "银行能办结婚证了", display_query: "银行能办结婚证了" },
  ]);
  assertEquals(parseTopSearch({ top_search: { words: null } }), []);
});

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

Deno.test("fetchHotSearch prefers recommend_query/v2", async () => {
  const calls: string[] = [];
  const result = await fetchHotSearch({
    fetch: (url) => {
      calls.push(url);
      return Promise.resolve(jsonResponse(recommendFixture));
    },
    retries: 1,
  });
  assertEquals(result.source, "recommend_query/v2");
  assertEquals(result.words.length, 1);
  assertEquals(calls.length, 1);
  assertStringIncludes(calls[0], "recommend_query/v2");
});

Deno.test("fetchHotSearch falls back to top_search when recommend empty", async () => {
  const result = await fetchHotSearch({
    fetch: (url) => {
      if (url.includes("recommend_query")) {
        return Promise.resolve(
          jsonResponse({ recommend_queries: { queries: null } }),
        );
      }
      return Promise.resolve(jsonResponse(topSearchFixture));
    },
    retries: 1,
  });
  assertEquals(result.source, "top_search");
  assertEquals(result.words.map((w: SearchWord) => w.query), [
    "披荆斩棘",
    "银行能办结婚证了",
  ]);
});

Deno.test("fetchHotSearch falls back when recommend HTTP fails", async () => {
  const result = await fetchHotSearch({
    fetch: (url) => {
      if (url.includes("recommend_query")) {
        return Promise.resolve(jsonResponse({ error: "nope" }, 403));
      }
      return Promise.resolve(jsonResponse(topSearchFixture));
    },
    retries: 1,
  });
  assertEquals(result.source, "top_search");
  assertEquals(result.words.length, 2);
});

Deno.test("fetchHotSearch throws when every source is empty", async () => {
  await assertThrowsAsync(
    () =>
      fetchHotSearch({
        fetch: () =>
          Promise.resolve(jsonResponse({ recommend_queries: { queries: [] } })),
        retries: 1,
      }),
    Error,
    "接口未返回任何热搜词条",
  );
});
