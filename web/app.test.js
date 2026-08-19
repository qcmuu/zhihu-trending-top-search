import { assertEquals } from "std/testing/asserts.ts";

import {
  formatRelativeYear,
  nearestDate,
  onThisDay,
  searchIndex,
  stepDate,
} from "./app.js";

const index = {
  meta: {
    days: 3,
    entries: 4,
    start: "2020-12-05",
    end: "2025-12-05",
    generated: "2026-01-01T00:00:00.000Z",
  },
  days: {
    "2020-12-05": [["苹果发布新品", "apple launch"]],
    "2021-01-01": [["新年热搜", "元旦"]],
    "2025-12-05": [
      ["APPLE 发布新品", "Apple"],
      ["另一条热搜", "其它"],
    ],
  },
};

Deno.test("formatRelativeYear 区分所选年份前后", () => {
  assertEquals(formatRelativeYear(5), "5 年前");
  assertEquals(formatRelativeYear(-5), "5 年后");
  assertEquals(formatRelativeYear(0), "同年");
});

Deno.test("onThisDay 保留相对年份方向", () => {
  const later = onThisDay(index, "2020-12-05");
  assertEquals(later.map((item) => item.yearsAgo), [-5, -5]);

  const earlier = onThisDay(index, "2025-12-05");
  assertEquals(earlier.map((item) => item.yearsAgo), [5]);
});

Deno.test("searchIndex 同时匹配标题与搜索词且忽略大小写", () => {
  assertEquals(
    searchIndex(index, "apple").map(({ date, rank }) => ({ date, rank })),
    [
      { date: "2025-12-05", rank: 1 },
      { date: "2020-12-05", rank: 1 },
    ],
  );
  assertEquals(searchIndex(index, "元旦")[0].date, "2021-01-01");
});

Deno.test("日期导航跳过缺失日期并守住边界", () => {
  assertEquals(nearestDate(index, "2022-01-01", -1), "2021-01-01");
  assertEquals(nearestDate(index, "2022-01-01", 1), "2025-12-05");
  assertEquals(stepDate(index, "2020-12-05", -1), null);
  assertEquals(stepDate(index, "2020-12-05", 1), "2021-01-01");
});
