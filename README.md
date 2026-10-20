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
<!-- 最后更新时间 Tue Oct 20 2026 15:10:04 GMT+0800 (China Standard Time) -->
1. [身披旭日旗留学生被遣返](https://www.zhihu.com/search?q=%E8%BA%AB%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%81%A3%E8%BF%94)
1. [英伟达市值9天蒸发4万亿](https://www.zhihu.com/search?q=%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC9%E5%A4%A9%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF)
1. [网红王扁遭前经纪人锤击](https://www.zhihu.com/search?q=%E7%BD%91%E7%BA%A2%E7%8E%8B%E6%89%81%E9%81%AD%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%94%A4%E5%87%BB)
1. [稻城亚丁高反去世男子系非法穿越](https://www.zhihu.com/search?q=%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E9%AB%98%E5%8F%8D%E5%8E%BB%E4%B8%96%E7%94%B7%E5%AD%90%E7%B3%BB%E9%9D%9E%E6%B3%95%E7%A9%BF%E8%B6%8A)
1. [自愿放弃社保无效](https://www.zhihu.com/search?q=%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%95%88)
1. [小天才手表封闭社交被质疑](https://www.zhihu.com/search?q=%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%B0%81%E9%97%AD%E7%A4%BE%E4%BA%A4%E8%A2%AB%E8%B4%A8%E7%96%91)
1. [灵活就业人员可贷款缴社保](https://www.zhihu.com/search?q=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E5%8F%AF%E8%B4%B7%E6%AC%BE%E7%BC%B4%E7%A4%BE%E4%BF%9D)
1. [法国发生近年来最严重暴力骚乱](https://www.zhihu.com/search?q=%E6%B3%95%E5%9B%BD%E5%8F%91%E7%94%9F%E8%BF%91%E5%B9%B4%E6%9D%A5%E6%9C%80%E4%B8%A5%E9%87%8D%E6%9A%B4%E5%8A%9B%E9%AA%9A%E4%B9%B1)
1. [李小冉官宣离婚](https://www.zhihu.com/search?q=%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AE%98%E5%AE%A3%E7%A6%BB%E5%A9%9A)
1. [前三季度中国GDP同比增长4.6%](https://www.zhihu.com/search?q=%E5%89%8D%E4%B8%89%E5%AD%A3%E5%BA%A6%E4%B8%AD%E5%9B%BDGDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF4.6%25)
1. [DeepSeek开放自研搜索API](https://www.zhihu.com/search?q=DeepSeek%E5%BC%80%E6%94%BE%E8%87%AA%E7%A0%94%E6%90%9C%E7%B4%A2API)
1. [吴越质问花姐骗了多少钱](https://www.zhihu.com/search?q=%E5%90%B4%E8%B6%8A%E8%B4%A8%E9%97%AE%E8%8A%B1%E5%A7%90%E9%AA%97%E4%BA%86%E5%A4%9A%E5%B0%91%E9%92%B1)
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
