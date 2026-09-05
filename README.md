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
<!-- 最后更新时间 Sat Sep 05 2026 22:36:00 GMT+0800 (China Standard Time) -->
1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [女子吃甜虾肠道爬出寄生虫](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%90%83%E7%94%9C%E8%99%BE%E8%82%A0%E9%81%93%E7%88%AC%E5%87%BA%E5%AF%84%E7%94%9F%E8%99%AB)
1. [搞笑诺贝尔奖来了：蟑螂奶获化学奖](https://www.zhihu.com/search?q=%E6%90%9E%E7%AC%91%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E6%9D%A5%E4%BA%86%EF%BC%9A%E8%9F%91%E8%9E%82%E5%A5%B6%E8%8E%B7%E5%8C%96%E5%AD%A6%E5%A5%96)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [羽衣甘蓝 农药](https://www.zhihu.com/search?q=%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%20%E5%86%9C%E8%8D%AF)
1. [乌克兰两大情报部门爆发枪战](https://www.zhihu.com/search?q=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E5%A4%A7%E6%83%85%E6%8A%A5%E9%83%A8%E9%97%A8%E7%88%86%E5%8F%91%E6%9E%AA%E6%88%98)
1. [尊界销量或暴跌 90%](https://www.zhihu.com/search?q=%E5%B0%8A%E7%95%8C%E9%94%80%E9%87%8F%E6%88%96%E6%9A%B4%E8%B7%8C%2090%25)
1. [樊振东3-0胜鲁伊斯](https://www.zhihu.com/search?q=%E6%A8%8A%E6%8C%AF%E4%B8%9C3-0%E8%83%9C%E9%B2%81%E4%BC%8A%E6%96%AF)
1. [iG 鏖战五局淘汰 TES](https://www.zhihu.com/search?q=iG%20%E9%8F%96%E6%88%98%E4%BA%94%E5%B1%80%E6%B7%98%E6%B1%B0%20TES)
1. [乌克兰两部门基辅交火](https://www.zhihu.com/search?q=%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB)
1. [汤家凤呼吁取消英语主科地位](https://www.zhihu.com/search?q=%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D)
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
