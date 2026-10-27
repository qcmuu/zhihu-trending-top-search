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
<!-- 最后更新时间 Tue Oct 27 2026 15:17:40 GMT+0800 (China Standard Time) -->
1. [东鹏饮料终止与姆巴佩合作](https://www.zhihu.com/search?q=%E4%B8%9C%E9%B9%8F%E9%A5%AE%E6%96%99%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%88%E4%BD%9C)
1. [县委书记拒绝张雪为家乡打广告](https://www.zhihu.com/search?q=%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%8B%92%E7%BB%9D%E5%BC%A0%E9%9B%AA%E4%B8%BA%E5%AE%B6%E4%B9%A1%E6%89%93%E5%B9%BF%E5%91%8A)
1. [武契奇承认败选](https://www.zhihu.com/search?q=%E6%AD%A6%E5%A5%91%E5%A5%87%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89)
1. [蒙牛终止与姆巴佩全部合作](https://www.zhihu.com/search?q=%E8%92%99%E7%89%9B%E7%BB%88%E6%AD%A2%E4%B8%8E%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%85%A8%E9%83%A8%E5%90%88%E4%BD%9C)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [金价大跌](https://www.zhihu.com/search?q=%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C)
1. [东鹏解约姆巴佩或无需赔偿](https://www.zhihu.com/search?q=%E4%B8%9C%E9%B9%8F%E8%A7%A3%E7%BA%A6%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%88%96%E6%97%A0%E9%9C%80%E8%B5%94%E5%81%BF)
1. [日剧Vivant抹黑中国](https://www.zhihu.com/search?q=%E6%97%A5%E5%89%A7Vivant%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD)
1. [全国总人口面临跌破 14 亿](https://www.zhihu.com/search?q=%E5%85%A8%E5%9B%BD%E6%80%BB%E4%BA%BA%E5%8F%A3%E9%9D%A2%E4%B8%B4%E8%B7%8C%E7%A0%B4%2014%20%E4%BA%BF)
1. [AL 0:2 TLAW](https://www.zhihu.com/search?q=AL%200%3A2%20TLAW)
1. [江苏姑娘网购鹤岗房搬进去后傻眼](https://www.zhihu.com/search?q=%E6%B1%9F%E8%8B%8F%E5%A7%91%E5%A8%98%E7%BD%91%E8%B4%AD%E9%B9%A4%E5%B2%97%E6%88%BF%E6%90%AC%E8%BF%9B%E5%8E%BB%E5%90%8E%E5%82%BB%E7%9C%BC)
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
