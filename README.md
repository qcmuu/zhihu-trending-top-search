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
<!-- 最后更新时间 Wed Nov 04 2026 16:36:51 GMT+0800 (China Standard Time) -->
1. [美国中期选举](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E4%B8%AD%E6%9C%9F%E9%80%89%E4%B8%BE)
1. [副教授白保国去世留下绝笔信](https://www.zhihu.com/search?q=%E5%89%AF%E6%95%99%E6%8E%88%E7%99%BD%E4%BF%9D%E5%9B%BD%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B%E7%BB%9D%E7%AC%94%E4%BF%A1)
1. [iG 3-1 TES](https://www.zhihu.com/search?q=iG%203-1%20TES)
1. [新华社追问国乒男队怎么了](https://www.zhihu.com/search?q=%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86)
1. [武汉一小区爆燃致2死1伤](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E4%B8%80%E5%B0%8F%E5%8C%BA%E7%88%86%E7%87%83%E8%87%B42%E6%AD%BB1%E4%BC%A4)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [美民主党称夺回参议院](https://www.zhihu.com/search?q=%E7%BE%8E%E6%B0%91%E4%B8%BB%E5%85%9A%E7%A7%B0%E5%A4%BA%E5%9B%9E%E5%8F%82%E8%AE%AE%E9%99%A2)
1. [得州翻蓝](https://www.zhihu.com/search?q=%E5%BE%97%E5%B7%9E%E7%BF%BB%E8%93%9D)
1. [上汽奥迪买一赠一营销被立案](https://www.zhihu.com/search?q=%E4%B8%8A%E6%B1%BD%E5%A5%A5%E8%BF%AA%E4%B9%B0%E4%B8%80%E8%B5%A0%E4%B8%80%E8%90%A5%E9%94%80%E8%A2%AB%E7%AB%8B%E6%A1%88)
1. [警方通报网约车被狂欢人群围困4小时](https://www.zhihu.com/search?q=%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%BD%91%E7%BA%A6%E8%BD%A6%E8%A2%AB%E7%8B%82%E6%AC%A2%E4%BA%BA%E7%BE%A4%E5%9B%B4%E5%9B%B04%E5%B0%8F%E6%97%B6)
1. [南京大学抬头率](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%8A%AC%E5%A4%B4%E7%8E%87)
1. [10元快剪正席卷理发行业](https://www.zhihu.com/search?q=10%E5%85%83%E5%BF%AB%E5%89%AA%E6%AD%A3%E5%B8%AD%E5%8D%B7%E7%90%86%E5%8F%91%E8%A1%8C%E4%B8%9A)
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
