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
<!-- 最后更新时间 Tue Nov 17 2026 03:29:17 GMT+0800 (China Standard Time) -->
1. [业内称山姆399元羽绒服是钩子商品](https://www.zhihu.com/search?q=%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%98%AF%E9%92%A9%E5%AD%90%E5%95%86%E5%93%81)
1. [中国三口之家已不是主流](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E4%B8%89%E5%8F%A3%E4%B9%8B%E5%AE%B6%E5%B7%B2%E4%B8%8D%E6%98%AF%E4%B8%BB%E6%B5%81)
1. [美国所有航班暂停起飞](https://www.zhihu.com/search?q=%E7%BE%8E%E5%9B%BD%E6%89%80%E6%9C%89%E8%88%AA%E7%8F%AD%E6%9A%82%E5%81%9C%E8%B5%B7%E9%A3%9E)
1. [中俄美元首将在深圳会晤](https://www.zhihu.com/search?q=%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%B0%86%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4)
1. [曝黄仁勋考虑重返英伟达](https://www.zhihu.com/search?q=%E6%9B%9D%E9%BB%84%E4%BB%81%E5%8B%8B%E8%80%83%E8%99%91%E9%87%8D%E8%BF%94%E8%8B%B1%E4%BC%9F%E8%BE%BE)
1. [知乎智能搜索新玩法](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E6%99%BA%E8%83%BD%E6%90%9C%E7%B4%A2%E6%96%B0%E7%8E%A9%E6%B3%95)
1. [BLG 夺冠](https://www.zhihu.com/search?q=BLG%20%E5%A4%BA%E5%86%A0)
1. [涉亚马尔种族歧视内容系伪造](https://www.zhihu.com/search?q=%E6%B6%89%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%A7%8D%E6%97%8F%E6%AD%A7%E8%A7%86%E5%86%85%E5%AE%B9%E7%B3%BB%E4%BC%AA%E9%80%A0)
1. [英伟达工程师戴士钦宣布离职](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B7%A5%E7%A8%8B%E5%B8%88%E6%88%B4%E5%A3%AB%E9%92%A6%E5%AE%A3%E5%B8%83%E7%A6%BB%E8%81%8C)
1. [AJ在BLG门口连磕10个响头](https://www.zhihu.com/search?q=AJ%E5%9C%A8BLG%E9%97%A8%E5%8F%A3%E8%BF%9E%E7%A3%9510%E4%B8%AA%E5%93%8D%E5%A4%B4)
1. [第69届格莱美提名名单](https://www.zhihu.com/search?q=%E7%AC%AC69%E5%B1%8A%E6%A0%BC%E8%8E%B1%E7%BE%8E%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95)
1. [农民工帮转讨薪网帖获刑4年](https://www.zhihu.com/search?q=%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B8%AE%E8%BD%AC%E8%AE%A8%E8%96%AA%E7%BD%91%E5%B8%96%E8%8E%B7%E5%88%914%E5%B9%B4)
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
