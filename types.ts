export type SearchWord = {
  query: string;
  display_query: string;
};

export type TopSearch = {
  top_search: {
    words: SearchWord[];
  };
};

/** 单条热搜的紧凑表示：[display_query, query]，数组下标即当日排名（0 起）。 */
export type Entry = [string, string];

/** 按日期聚合的词条数据：日期(YYYY-MM-DD) → 当日榜单条目。 */
export type DaysMap = Record<string, Entry[]>;

export interface IndexMeta {
  days: number;
  /** 全部日期的去重条目总数（前端展示用） */
  entries: number;
  /** 最早有数据的日期，空数据集为 null */
  start: string | null;
  /** 最近有数据的日期，空数据集为 null */
  end: string | null;
  /** 索引构建时间（ISO 8601） */
  generated: string;
}

/** 静态站点全量加载的搜索索引。 */
export interface SearchIndex {
  meta: IndexMeta;
  days: DaysMap;
}
