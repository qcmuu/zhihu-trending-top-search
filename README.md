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
<!-- 最后更新时间 Sat Sep 26 2026 00:33:30 GMT+0800 (China Standard Time) -->
1. [中秋节](https://www.zhihu.com/search?q=%E4%B8%AD%E7%A7%8B%E8%8A%82)
1. [陈妤颉刷新女子百米亚运纪录](https://www.zhihu.com/search?q=%E9%99%88%E5%A6%A4%E9%A2%89%E5%88%B7%E6%96%B0%E5%A5%B3%E5%AD%90%E7%99%BE%E7%B1%B3%E4%BA%9A%E8%BF%90%E7%BA%AA%E5%BD%95)
1. [车企集体和宁德提分手](https://www.zhihu.com/search?q=%E8%BD%A6%E4%BC%81%E9%9B%86%E4%BD%93%E5%92%8C%E5%AE%81%E5%BE%B7%E6%8F%90%E5%88%86%E6%89%8B)
1. [国乒会师亚运会混双决赛](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E4%BC%9A%E5%B8%88%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B7%B7%E5%8F%8C%E5%86%B3%E8%B5%9B)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [中国游泳队亚运30金创历史](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E6%B8%B8%E6%B3%B3%E9%98%9F%E4%BA%9A%E8%BF%9030%E9%87%91%E5%88%9B%E5%8E%86%E5%8F%B2)
1. [冯小刚回应垃圾观众言论](https://www.zhihu.com/search?q=%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9B%9E%E5%BA%94%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA)
1. [王楚钦 0-3 张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%200-3%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [美称中美贸易休战延至明年1月](https://www.zhihu.com/search?q=%E7%BE%8E%E7%A7%B0%E4%B8%AD%E7%BE%8E%E8%B4%B8%E6%98%93%E4%BC%91%E6%88%98%E5%BB%B6%E8%87%B3%E6%98%8E%E5%B9%B41%E6%9C%88)
1. [表演艺术家游本昌去世](https://www.zhihu.com/search?q=%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF%E5%AE%B6%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96)
1. [王楚钦回应不敌张本智和](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C)
1. [腾讯「龙虾」将正式停止运营](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E3%80%8C%E9%BE%99%E8%99%BE%E3%80%8D%E5%B0%86%E6%AD%A3%E5%BC%8F%E5%81%9C%E6%AD%A2%E8%BF%90%E8%90%A5)
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
