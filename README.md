<div align="center">

# 知乎热搜榜

知乎不提供历史热搜。这个仓库从 **2020-11-24** 起每小时抓一次，按天存下来。

两千多天 · 五万多条 · 可按日翻 · 可按词搜

**[打开在线浏览](https://qcmuu.github.io/zhihu-trending-top-search/)**

[![ci](https://github.com/qcmuu/zhihu-trending-top-search/actions/workflows/ci.yml/badge.svg)](https://github.com/qcmuu/zhihu-trending-top-search/actions)
[![pages](https://img.shields.io/badge/demo-在线浏览-9c1c16)](https://qcmuu.github.io/zhihu-trending-top-search/)
[![license](https://img.shields.io/github/license/qcmuu/zhihu-trending-top-search)](LICENSE)

<p>
  <a href="https://qcmuu.github.io/zhihu-trending-top-search/"><img src="docs/preview-browse.png" width="48%" alt="按日期浏览某一天的热搜" /></a>
  <a href="https://qcmuu.github.io/zhihu-trending-top-search/"><img src="docs/preview-search.png" width="48%" alt="检索「疫情」命中 779 次" /></a>
</p>

</div>

Hourly archive of Zhihu search trends since 2020-11-24. Browse any day, or search which days a keyword hit the list.

## 今日热搜

<!-- BEGIN -->
<!-- 最后更新时间 Sat Sep 26 2026 22:06:07 GMT+0800 (China Standard Time) -->
1. [中美达成八点成果共识](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E8%BE%BE%E6%88%90%E5%85%AB%E7%82%B9%E6%88%90%E6%9E%9C%E5%85%B1%E8%AF%86)
1. [日乒男单全军覆没](https://www.zhihu.com/search?q=%E6%97%A5%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1)
1. [刘欢病逝](https://www.zhihu.com/search?q=%E5%88%98%E6%AC%A2%E7%97%85%E9%80%9D)
1. [张本智和爆冷被淘汰](https://www.zhihu.com/search?q=%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%88%86%E5%86%B7%E8%A2%AB%E6%B7%98%E6%B1%B0)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [林诗栋4比2松岛辉空](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA)
1. [林诗栋蒯曼亚运混双冠军](https://www.zhihu.com/search?q=%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%E4%BA%9A%E8%BF%90%E6%B7%B7%E5%8F%8C%E5%86%A0%E5%86%9B)
1. [中国女篮 77-64 中国台北](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%2077-64%20%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97)
1. [美称中美贸易休战延至明年1月](https://www.zhihu.com/search?q=%E7%BE%8E%E7%A7%B0%E4%B8%AD%E7%BE%8E%E8%B4%B8%E6%98%93%E4%BC%91%E6%88%98%E5%BB%B6%E8%87%B3%E6%98%8E%E5%B9%B41%E6%9C%88)
1. [中美构建建设性战略稳定关系](https://www.zhihu.com/search?q=%E4%B8%AD%E7%BE%8E%E6%9E%84%E5%BB%BA%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB)
1. [王楚钦 0-3 张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%200-3%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [老人离世6亿全给再婚妻子](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%966%E4%BA%BF%E5%85%A8%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90)
<!-- END -->

按天的 Markdown 在 [archives](./archives)，机器可读的 JSON 在 [raw](./raw)。缺了哪些天写在 [archives/MISSING.md](./archives/MISSING.md)，目前大约 20 天，补不回来。

## 数据长什么样

`raw/2020-11-24.json` 一类，一天一个文件：

```json
[
  { "query": "嫦娥五号", "display_query": "嫦娥五号发射成功" }
]
```

`display_query` 是榜上那行字，`query` 是点进去搜的词。同一天里按 `display_query` 去重。一天会采很多次，文件是并集，不是某一小时的完整排名快照。

静态站用的是 [web/index.json](./web/index.json)：按日期压成 `[display_query, query]`，数组下标就是当天顺序。浏览器一次性加载，检索在本地做。

## 采集

GitHub Actions 每小时跑一次。先拉 `recommend_query/v2`，空了再回退 `top_search`。当天的 JSON / 归档是各小时并集；README 里的「今日热搜」只写这一次抓到的榜。日期按上海日历算，不看 runner 时区。

自己跑的话需要 [Deno](https://deno.com/)，然后：

```bash
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
deno run --allow-read --allow-write --import-map=import_map.json build_index.ts
```

Fork 之后打开 Actions 即可继续采。静态站没有后端，把 `web/` 丢到任意静态托管就能用。

## 来源

采集思路来自 [justjavac/zhihu-trending-top-search](https://github.com/justjavac/zhihu-trending-top-search)。本仓库在归档之外加了可检索的静态站。

同系列：

- [知乎热门话题](https://github.com/justjavac/zhihu-trending-hot-questions)
- [知乎热门视频](https://github.com/justjavac/zhihu-trending-hot-video)
- [微博热搜榜](https://github.com/justjavac/weibo-trending-hot-search)

## License

[MIT](LICENSE)
