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
<!-- 最后更新时间 Fri Nov 06 2026 15:39:06 GMT+0800 (China Standard Time) -->
1. [美股暴跌遭抛售潮](https://www.zhihu.com/search?q=%E7%BE%8E%E8%82%A1%E6%9A%B4%E8%B7%8C%E9%81%AD%E6%8A%9B%E5%94%AE%E6%BD%AE)
1. [BLG 3:0 淘汰DK](https://www.zhihu.com/search?q=BLG%203%3A0%20%E6%B7%98%E6%B1%B0DK)
1. [特朗普被指全面惨败](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E6%8C%87%E5%85%A8%E9%9D%A2%E6%83%A8%E8%B4%A5)
1. [王楚钦0-3温瑞博](https://www.zhihu.com/search?q=%E7%8E%8B%E6%A5%9A%E9%92%A60-3%E6%B8%A9%E7%91%9E%E5%8D%9A)
1. [商南命案嫌犯已身亡](https://www.zhihu.com/search?q=%E5%95%86%E5%8D%97%E5%91%BD%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%B7%B2%E8%BA%AB%E4%BA%A1)
1. [张雪重庆大学开价被学生嫌弃](https://www.zhihu.com/search?q=%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83)
1. [北交大明确雄安为唯一主校区](https://www.zhihu.com/search?q=%E5%8C%97%E4%BA%A4%E5%A4%A7%E6%98%8E%E7%A1%AE%E9%9B%84%E5%AE%89%E4%B8%BA%E5%94%AF%E4%B8%80%E4%B8%BB%E6%A0%A1%E5%8C%BA)
1. [歌手袁成杰成老赖](https://www.zhihu.com/search?q=%E6%AD%8C%E6%89%8B%E8%A2%81%E6%88%90%E6%9D%B0%E6%88%90%E8%80%81%E8%B5%96)
1. [南京大学抬头率](https://www.zhihu.com/search?q=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E6%8A%AC%E5%A4%B4%E7%8E%87)
1. [红果短剧处理两万部低质短剧](https://www.zhihu.com/search?q=%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%A4%84%E7%90%86%E4%B8%A4%E4%B8%87%E9%83%A8%E4%BD%8E%E8%B4%A8%E7%9F%AD%E5%89%A7)
1. [反中乱港分子黄之锋再获刑10年](https://www.zhihu.com/search?q=%E5%8F%8D%E4%B8%AD%E4%B9%B1%E6%B8%AF%E5%88%86%E5%AD%90%E9%BB%84%E4%B9%8B%E9%94%8B%E5%86%8D%E8%8E%B7%E5%88%9110%E5%B9%B4)
1. [王子璇说不想跟文吉儿做朋友了](https://www.zhihu.com/search?q=%E7%8E%8B%E5%AD%90%E7%92%87%E8%AF%B4%E4%B8%8D%E6%83%B3%E8%B7%9F%E6%96%87%E5%90%89%E5%84%BF%E5%81%9A%E6%9C%8B%E5%8F%8B%E4%BA%86)
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
