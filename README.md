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
<!-- 最后更新时间 Sun Aug 23 2026 12:35:21 GMT+0800 (China Standard Time) -->
1. [宇树股价跳水带崩机器人板块](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E8%82%A1%E4%BB%B7%E8%B7%B3%E6%B0%B4%E5%B8%A6%E5%B4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%BF%E5%9D%97)
1. [DeepSeek 周末全天按低谷价收费](https://www.zhihu.com/search?q=DeepSeek%20%E5%91%A8%E6%9C%AB%E5%85%A8%E5%A4%A9%E6%8C%89%E4%BD%8E%E8%B0%B7%E4%BB%B7%E6%94%B6%E8%B4%B9)
1. [2026世界人形机器人运动会](https://www.zhihu.com/search?q=2026%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [日本本州岛 5.8 级地震](https://www.zhihu.com/search?q=%E6%97%A5%E6%9C%AC%E6%9C%AC%E5%B7%9E%E5%B2%9B%205.8%20%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [网红温婉偷税被罚后换号复出](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E5%87%BA)
1. [官方回应白菜蘸甲醛属实](https://www.zhihu.com/search?q=%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E7%99%BD%E8%8F%9C%E8%98%B8%E7%94%B2%E9%86%9B%E5%B1%9E%E5%AE%9E)
1. [许家印被判处无期徒刑](https://www.zhihu.com/search?q=%E8%AE%B8%E5%AE%B6%E5%8D%B0%E8%A2%AB%E5%88%A4%E5%A4%84%E6%97%A0%E6%9C%9F%E5%BE%92%E5%88%91)
1. [铁路部门致歉占座事件](https://www.zhihu.com/search?q=%E9%93%81%E8%B7%AF%E9%83%A8%E9%97%A8%E8%87%B4%E6%AD%89%E5%8D%A0%E5%BA%A7%E4%BA%8B%E4%BB%B6)
1. [高铁 2 人 3 票占座放零食引争议](https://www.zhihu.com/search?q=%E9%AB%98%E9%93%81%202%20%E4%BA%BA%203%20%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E5%BC%95%E4%BA%89%E8%AE%AE)
1. [北大教授称灵活就业是一种福利](https://www.zhihu.com/search?q=%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9)
1. [失业男子饿 20 天致肾衰竭](https://www.zhihu.com/search?q=%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E9%A5%BF%2020%20%E5%A4%A9%E8%87%B4%E8%82%BE%E8%A1%B0%E7%AB%AD)
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
