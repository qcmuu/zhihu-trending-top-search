// web/app.js — 知乎热搜静态站应用逻辑（零依赖、零构建）
// 与 HTML 解耦：数据加载 + 纯函数逻辑，便于理解与维护。

"use strict";

/**
 * @typedef {[string, string]} Entry  display_query, query
 * @typedef {Record<string, Entry[]>} DaysMap
 * @typedef {{meta: {days:number,entries:number,start:string|null,end:string|null,generated:string}, days: DaysMap}} SearchIndex
 */

/** 安全子串匹配（大小写不敏感）。空 query 返回 false。 */
function matches(haystack, needle) {
  if (!needle) return false;
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

/** 把 'YYYY-MM-DD' 与今天比较，返回相邻日期键或 null。 */
function clampDate(date, sortedDates) {
  if (sortedDates.includes(date)) return date;
  return null;
}

/**
 * 倒序搜索：在索引中查找命中关键词的全部 (日期, 排名)。
 * @returns {Array<{date:string, rank:number, display:string, query:string}>}
 */
export function searchIndex(index, keyword) {
  const out = [];
  const dates = Object.keys(index.days).sort().reverse();
  for (const date of dates) {
    const list = index.days[date];
    for (let i = 0; i < list.length; i++) {
      const [display, query] = list[i];
      if (matches(display, keyword) || matches(query, keyword)) {
        out.push({ date, rank: i + 1, display, query });
      }
    }
  }
  return out;
}

/** "历史上的今天"：返回与给定日期同月日的所有年份条目（排除当年本身）。 */
export function onThisDay(index, date) {
  const [, mm, dd] = date.split("-");
  const suffix = `-${mm}-${dd}`;
  const year = date.slice(0, 4);
  const out = [];
  const dates = Object.keys(index.days).sort();
  for (const d of dates) {
    if (!d.endsWith(suffix)) continue;
    if (d === date) continue;
    const thatYear = d.slice(0, 4);
    for (const [display, query] of index.days[d]) {
      out.push({
        date: d,
        year: thatYear,
        display,
        query,
        yearsAgo: Number(year) - Number(thatYear),
      });
    }
  }
  return out;
}

/** 格式化相对所选年份的距离；负数表示该条目在所选年份之后。 */
export function formatRelativeYear(yearsAgo) {
  if (yearsAgo > 0) return `${yearsAgo} 年前`;
  if (yearsAgo < 0) return `${Math.abs(yearsAgo)} 年后`;
  return "同年";
}

/** 排序好的日期数组（缓存键）。 */
export function sortedDates(index) {
  return Object.keys(index.days).sort();
}

/** 找离 target 最近的、有数据的日期（用于跳过缺失日）。 */
export function nearestDate(index, target, direction) {
  const dates = sortedDates(index);
  if (dates.length === 0) return null;
  if (index.days[target]) return target;
  // direction: -1 前一天 / +1 后一天
  const ix = insertionIndex(dates, target);
  const candidate = direction < 0 ? dates[ix - 1] : dates[ix];
  return candidate ?? null;
}

/** 二分插入位置（dates 已升序）。 */
function insertionIndex(dates, target) {
  let lo = 0, hi = dates.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (dates[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

/** 从键序推算上/下一个有数据的日期（边界返回 null）。 */
export function stepDate(index, current, delta) {
  const dates = sortedDates(index);
  const ix = dates.indexOf(current);
  if (ix === -1) return null;
  const next = dates[ix + delta];
  return next ?? null;
}

/** 格式化日期为中文标题。 */
export function formatDateCN(date) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y} 年 ${m} 月 ${d} 日`;
}

/** 加载索引，带重试与超时。 */
export async function loadIndex(url, { retries = 1, timeoutMs = 8000 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      lastErr = e;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

export const _internal = { matches, clampDate, insertionIndex };
