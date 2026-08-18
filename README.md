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
<!-- 最后更新时间 Tue Aug 18 2026 22:30:30 GMT+0800 (China Standard Time) -->

1. [官方修改《住房公积金管理条例》](https://www.zhihu.com/search?q=官方修改《住房公积金管理条例》)
1. [招商蛇口高管涉酒局伤害女性被刑拘](https://www.zhihu.com/search?q=招商蛇口高管涉酒局伤害女性被刑拘)
1. [日本人战斗分队在乌成立](https://www.zhihu.com/search?q=日本人战斗分队在乌成立)
1. [3到5年内社保走向全额实缴](https://www.zhihu.com/search?q=3到5年内社保走向全额实缴)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu CLI上线)
1. [DeepSeek 新定价已生效](https://www.zhihu.com/search?q=DeepSeek 新定价已生效)
1. [时代峰峻五代被喊嘉豪](https://www.zhihu.com/search?q=时代峰峻五代被喊嘉豪)
1. [三孩非亲生案女方当庭承认出轨](https://www.zhihu.com/search?q=三孩非亲生案女方当庭承认出轨)
1. [协和医生用AI解决22年数学难题](https://www.zhihu.com/search?q=协和医生用AI解决22年数学难题)
1. [比亚迪销量骤降吉利争销冠](https://www.zhihu.com/search?q=比亚迪销量骤降吉利争销冠)
1. [网红小家电集体吃灰](https://www.zhihu.com/search?q=网红小家电集体吃灰)
1. [蓝盈莹承认新恋情](https://www.zhihu.com/search?q=蓝盈莹承认新恋情)
1. [宇树科技8月19日科创板上市](https://www.zhihu.com/search?q=宇树科技8月19日科创板上市)
1. [A 股的牛要来了吗](https://www.zhihu.com/search?q=A 股的牛要来了吗)

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

GitHub Actions 每小时跑一次：拉当前热搜 → 并进当天的 JSON / Markdown → 重建索引 → 推回仓库。知乎换过接口，现在走 `recommend_query/v2`。

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
