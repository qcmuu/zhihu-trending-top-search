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
<!-- 最后更新时间 Wed Aug 19 2026 03:24:59 GMT+0800 (China Standard Time) -->
1. [招商蛇口高管涉酒局伤害女性被刑拘](https://www.zhihu.com/search?q=%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E9%AB%98%E7%AE%A1%E6%B6%89%E9%85%92%E5%B1%80%E4%BC%A4%E5%AE%B3%E5%A5%B3%E6%80%A7%E8%A2%AB%E5%88%91%E6%8B%98)
1. [时代峰峻五代被喊嘉豪](https://www.zhihu.com/search?q=%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%BA%94%E4%BB%A3%E8%A2%AB%E5%96%8A%E5%98%89%E8%B1%AA)
1. [官方修改《住房公积金管理条例》](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E4%BF%AE%E6%94%B9%E3%80%8A%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E7%AE%A1%E7%90%86%E6%9D%A1%E4%BE%8B%E3%80%8B)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [日本人战斗分队在乌成立](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E4%BA%BA%E6%88%98%E6%96%97%E5%88%86%E9%98%9F%E5%9C%A8%E4%B9%8C%E6%88%90%E7%AB%8B)
1. [三孩非亲生案女方当庭承认出轨](https://www.zhihu.com/search?q=%E4%B8%89%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E5%BD%93%E5%BA%AD%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8)
1. [网红小家电集体吃灰](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0)
1. [DeepSeek 新定价已生效](https://www.zhihu.com/search?q=DeepSeek%20%E6%96%B0%E5%AE%9A%E4%BB%B7%E5%B7%B2%E7%94%9F%E6%95%88)
1. [协和医生用AI解决22年数学难题](https://www.zhihu.com/search?q=%E5%8D%8F%E5%92%8C%E5%8C%BB%E7%94%9F%E7%94%A8AI%E8%A7%A3%E5%86%B322%E5%B9%B4%E6%95%B0%E5%AD%A6%E9%9A%BE%E9%A2%98)
1. [宇树科技8月19日科创板上市](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%808%E6%9C%8819%E6%97%A5%E7%A7%91%E5%88%9B%E6%9D%BF%E4%B8%8A%E5%B8%82)
1. [国乒盼樊振东回归](https://www.zhihu.com/search?q=%E5%9B%BD%E4%B9%92%E7%9B%BC%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BD%92)
1. [蓝盈莹承认新恋情](https://www.zhihu.com/search?q=%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%96%B0%E6%81%8B%E6%83%85)
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
