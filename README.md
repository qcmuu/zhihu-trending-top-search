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
<!-- 最后更新时间 Tue Aug 25 2026 16:38:41 GMT+0800 (China Standard Time) -->
1. [老人进店休息离世店家帮扶遭索赔](https://www.zhihu.com/search?q=%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%94)
1. [字节TRAE扣子并入豆包工作](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82TRAE%E6%89%A3%E5%AD%90%E5%B9%B6%E5%85%A5%E8%B1%86%E5%8C%85%E5%B7%A5%E4%BD%9C)
1. [小米玄戒芯片发布会](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8F%91%E5%B8%83%E4%BC%9A)
1. [Zhihu CLI上线](https://www.zhihu.com/search?q=Zhihu%20CLI%E4%B8%8A%E7%BA%BF)
1. [出发吧！看山](https://www.zhihu.com/search?q=%E5%87%BA%E5%8F%91%E5%90%A7%EF%BC%81%E7%9C%8B%E5%B1%B1)
1. [台风沙德尔进入 48 小时警戒线](https://www.zhihu.com/search?q=%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E8%BF%9B%E5%85%A5%2048%20%E5%B0%8F%E6%97%B6%E8%AD%A6%E6%88%92%E7%BA%BF)
1. [陕西版「孙小果」二审维持死刑](https://www.zhihu.com/search?q=%E9%99%95%E8%A5%BF%E7%89%88%E3%80%8C%E5%AD%99%E5%B0%8F%E6%9E%9C%E3%80%8D%E4%BA%8C%E5%AE%A1%E7%BB%B4%E6%8C%81%E6%AD%BB%E5%88%91)
1. [《黑神话：钟馗》发布实机演示视频](https://www.zhihu.com/search?q=%E3%80%8A%E9%BB%91%E7%A5%9E%E8%AF%9D%EF%BC%9A%E9%92%9F%E9%A6%97%E3%80%8B%E5%8F%91%E5%B8%83%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91)
1. [甲醛白菜被运往江苏安徽多地](https://www.zhihu.com/search?q=%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E8%A2%AB%E8%BF%90%E5%BE%80%E6%B1%9F%E8%8B%8F%E5%AE%89%E5%BE%BD%E5%A4%9A%E5%9C%B0)
1. [四川宜宾 4.7 级地震](https://www.zhihu.com/search?q=%E5%9B%9B%E5%B7%9D%E5%AE%9C%E5%AE%BE%204.7%20%E7%BA%A7%E5%9C%B0%E9%9C%87)
1. [许家印被判处无期徒刑](https://www.zhihu.com/search?q=%E8%AE%B8%E5%AE%B6%E5%8D%B0%E8%A2%AB%E5%88%A4%E5%A4%84%E6%97%A0%E6%9C%9F%E5%BE%92%E5%88%91)
1. [宇树上市后股价连续下跌](https://www.zhihu.com/search?q=%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E5%90%8E%E8%82%A1%E4%BB%B7%E8%BF%9E%E7%BB%AD%E4%B8%8B%E8%B7%8C)
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
