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
<!-- 最后更新时间 Wed Sep 23 2026 04:58:44 GMT+0800 (China Standard Time) -->
1. [秦始皇陵水银来源被找到](https://www.zhihu.com/search?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E9%99%B5%E6%B0%B4%E9%93%B6%E6%9D%A5%E6%BA%90%E8%A2%AB%E6%89%BE%E5%88%B0)
1. [闲鱼 涉黄](https://www.zhihu.com/search?q=%E9%97%B2%E9%B1%BC%20%E6%B6%89%E9%BB%84)
1. [闲鱼暗藏涉黄产业链](https://www.zhihu.com/search?q=%E9%97%B2%E9%B1%BC%E6%9A%97%E8%97%8F%E6%B6%89%E9%BB%84%E4%BA%A7%E4%B8%9A%E9%93%BE)
1. [到梦空间](https://www.zhihu.com/search?q=%E5%88%B0%E6%A2%A6%E7%A9%BA%E9%97%B4)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [钟南山团队发现肺结节发病新趋势](https://www.zhihu.com/search?q=%E9%92%9F%E5%8D%97%E5%B1%B1%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0%E8%82%BA%E7%BB%93%E8%8A%82%E5%8F%91%E7%97%85%E6%96%B0%E8%B6%8B%E5%8A%BF)
1. [人民日报评第一学历歧视](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%AD%A7%E8%A7%86)
1. [大一新生军训离队旅游教官疑似被罚](https://www.zhihu.com/search?q=%E5%A4%A7%E4%B8%80%E6%96%B0%E7%94%9F%E5%86%9B%E8%AE%AD%E7%A6%BB%E9%98%9F%E6%97%85%E6%B8%B8%E6%95%99%E5%AE%98%E7%96%91%E4%BC%BC%E8%A2%AB%E7%BD%9A)
1. [网购燃气防风罩致妻儿中毒身亡](https://www.zhihu.com/search?q=%E7%BD%91%E8%B4%AD%E7%87%83%E6%B0%94%E9%98%B2%E9%A3%8E%E7%BD%A9%E8%87%B4%E5%A6%BB%E5%84%BF%E4%B8%AD%E6%AF%92%E8%BA%AB%E4%BA%A1)
1. [大量食品用果葡糖浆替代白砂糖](https://www.zhihu.com/search?q=%E5%A4%A7%E9%87%8F%E9%A3%9F%E5%93%81%E7%94%A8%E6%9E%9C%E8%91%A1%E7%B3%96%E6%B5%86%E6%9B%BF%E4%BB%A3%E7%99%BD%E7%A0%82%E7%B3%96)
1. [多所高校取消吸烟学生学费减免资格](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E5%8F%96%E6%B6%88%E5%90%B8%E7%83%9F%E5%AD%A6%E7%94%9F%E5%AD%A6%E8%B4%B9%E5%87%8F%E5%85%8D%E8%B5%84%E6%A0%BC)
1. [高校密集发文过紧日子](https://www.zhihu.com/search?q=%E9%AB%98%E6%A0%A1%E5%AF%86%E9%9B%86%E5%8F%91%E6%96%87%E8%BF%87%E7%B4%A7%E6%97%A5%E5%AD%90)
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
