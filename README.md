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
<!-- 最后更新时间 Sat Oct 24 2026 16:38:47 GMT+0800 (China Standard Time) -->
1. [中土网民爆发大规模互怼](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9C%9F%E7%BD%91%E6%B0%91%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%92%E6%80%BC)
1. [LPL瑞士轮首轮全败](https://www.zhihu.com/search?q=LPL%E7%91%9E%E5%A3%AB%E8%BD%AE%E9%A6%96%E8%BD%AE%E5%85%A8%E8%B4%A5)
1. [女子地铁站看书5小时被扣15元](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%90%E5%9C%B0%E9%93%81%E7%AB%99%E7%9C%8B%E4%B9%A65%E5%B0%8F%E6%97%B6%E8%A2%AB%E6%89%A315%E5%85%83)
1. [「死了么」App公布收费标准](https://www.zhihu.com/search?q=%E3%80%8C%E6%AD%BB%E4%BA%86%E4%B9%88%E3%80%8DApp%E5%85%AC%E5%B8%83%E6%94%B6%E8%B4%B9%E6%A0%87%E5%87%86)
1. [毛不易婚礼致辞争议](https://www.zhihu.com/search?q=%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E8%87%B4%E8%BE%9E%E4%BA%89%E8%AE%AE)
1. [秦始皇兵马俑上发现女性指纹](https://www.zhihu.com/search?q=%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9)
1. [Kimi K3.1 Pro 正式发布](https://www.zhihu.com/search?q=Kimi%20K3.1%20Pro%20%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83)
1. [iPhoneDuo屏幕开裂](https://www.zhihu.com/search?q=iPhoneDuo%E5%B1%8F%E5%B9%95%E5%BC%80%E8%A3%82)
1. [子祺事变](https://www.zhihu.com/search?q=%E5%AD%90%E7%A5%BA%E4%BA%8B%E5%8F%98)
1. [留美女博士因答辩失利投毒](https://www.zhihu.com/search?q=%E7%95%99%E7%BE%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E5%9B%A0%E7%AD%94%E8%BE%A9%E5%A4%B1%E5%88%A9%E6%8A%95%E6%AF%92)
1. [泽连斯基称保留75%领土可达成和平协议](https://www.zhihu.com/search?q=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E5%8F%AF%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE)
1. [三部门调查尊界刹车踏板支架断裂问题](https://www.zhihu.com/search?q=%E4%B8%89%E9%83%A8%E9%97%A8%E8%B0%83%E6%9F%A5%E5%B0%8A%E7%95%8C%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E6%94%AF%E6%9E%B6%E6%96%AD%E8%A3%82%E9%97%AE%E9%A2%98)
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
