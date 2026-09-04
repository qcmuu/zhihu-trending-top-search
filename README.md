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
<!-- 最后更新时间 Fri Sep 04 2026 13:30:15 GMT+0800 (China Standard Time) -->
1. [充值1000误到账26419933亿元](https://www.zhihu.com/search?q=%E5%85%85%E5%80%BC1000%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E5%85%83)
1. [全球股市大反转](https://www.zhihu.com/search?q=%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%A4%A7%E5%8F%8D%E8%BD%AC)
1. [ChatGPT等AI服务集体故障](https://www.zhihu.com/search?q=ChatGPT%E7%AD%89AI%E6%9C%8D%E5%8A%A1%E9%9B%86%E4%BD%93%E6%95%85%E9%9A%9C)
1. [王楚钦因伤退出澳门冠军赛](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%A0%E4%BC%A4%E9%80%80%E5%87%BA%E6%BE%B3%E9%97%A8%E5%86%A0%E5%86%9B%E8%B5%9B)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [GPT-6 正式发布](https://www.zhihu.com/search?q=GPT-6%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [武汉大学教授曾梦琪被举报](https://www.zhihu.com/search?q=%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%E6%9B%BE%E6%A2%A6%E7%90%AA%E8%A2%AB%E4%B8%BE%E6%8A%A5)
1. [西藏日喀则吉隆口岸发生泥石流](https://www.zhihu.com/search?q=%E8%A5%BF%E8%97%8F%E6%97%A5%E5%96%80%E5%88%99%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81)
1. [曝科大讯飞公关副总裁被解除职务](https://www.zhihu.com/search?q=%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E9%99%A4%E8%81%8C%E5%8A%A1)
1. [女子吃甜虾肠道爬出寄生虫](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%90%83%E7%94%9C%E8%99%BE%E8%82%A0%E9%81%93%E7%88%AC%E5%87%BA%E5%AF%84%E7%94%9F%E8%99%AB)
1. [四川绵阳发生 4.8 级地震](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E7%BB%B5%E9%98%B3%E5%8F%91%E7%94%9F%204.8%20%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [张继科带教乒乓球一个半小时25元](https://www.zhihu.com/search?q=%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%B8%A6%E6%95%99%E4%B9%92%E4%B9%93%E7%90%83%E4%B8%80%E4%B8%AA%E5%8D%8A%E5%B0%8F%E6%97%B625%E5%85%83)
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
