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
<!-- 最后更新时间 Sat Nov 28 2026 12:30:28 GMT+0800 (China Standard Time) -->
1. [蔡磊已进渐冻症终末期](https://www.zhihu.com/search?q=%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F)
1. [腾讯元宝被曝大裁员](https://www.zhihu.com/search?q=%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E8%A2%AB%E6%9B%9D%E5%A4%A7%E8%A3%81%E5%91%98)
1. [央行取消贷款罚息利率上下限](https://www.zhihu.com/search?q=%E5%A4%AE%E8%A1%8C%E5%8F%96%E6%B6%88%E8%B4%B7%E6%AC%BE%E7%BD%9A%E6%81%AF%E5%88%A9%E7%8E%87%E4%B8%8A%E4%B8%8B%E9%99%90)
1. [三星堆金面具正在变脆](https://www.zhihu.com/search?q=%E4%B8%89%E6%98%9F%E5%A0%86%E9%87%91%E9%9D%A2%E5%85%B7%E6%AD%A3%E5%9C%A8%E5%8F%98%E8%84%86)
1. [DeepSeek调整API定价](https://www.zhihu.com/search?q=DeepSeek%E8%B0%83%E6%95%B4API%E5%AE%9A%E4%BB%B7)
1. [年轻人开始劝父母卖县城空房](https://www.zhihu.com/search?q=%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8A%9D%E7%88%B6%E6%AF%8D%E5%8D%96%E5%8E%BF%E5%9F%8E%E7%A9%BA%E6%88%BF)
1. [女子超40岁被酒店拒绝入住](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E8%B6%8540%E5%B2%81%E8%A2%AB%E9%85%92%E5%BA%97%E6%8B%92%E7%BB%9D%E5%85%A5%E4%BD%8F)
1. [11月27日A股行情](https://www.zhihu.com/search?q=11%E6%9C%8827%E6%97%A5A%E8%82%A1%E8%A1%8C%E6%83%85)
1. [知乎与DeepSeek开展合作](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%E4%B8%8EDeepSeek%E5%BC%80%E5%B1%95%E5%90%88%E4%BD%9C)
1. [商务部称机关单位带头过紧日子](https://www.zhihu.com/search?q=%E5%95%86%E5%8A%A1%E9%83%A8%E7%A7%B0%E6%9C%BA%E5%85%B3%E5%8D%95%E4%BD%8D%E5%B8%A6%E5%A4%B4%E8%BF%87%E7%B4%A7%E6%97%A5%E5%AD%90)
1. [Deepseek被曝隐私安全问题](https://www.zhihu.com/search?q=Deepseek%E8%A2%AB%E6%9B%9D%E9%9A%90%E7%A7%81%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98)
1. [三只松鼠致歉](https://www.zhihu.com/search?q=%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E8%87%B4%E6%AD%89)
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
