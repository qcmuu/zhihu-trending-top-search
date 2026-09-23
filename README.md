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
<!-- 最后更新时间 Thu Sep 24 2026 06:03:35 GMT+0800 (China Standard Time) -->
1. [到梦空间](https://www.zhihu.com/search?q=%E5%88%B0%E6%A2%A6%E7%A9%BA%E9%97%B4)
1. [人民日报评第一学历歧视](https://www.zhihu.com/search?q=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%AD%A7%E8%A7%86)
1. [多所高校取消吸烟学生学费减免资格](https://www.zhihu.com/search?q=%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E5%8F%96%E6%B6%88%E5%90%B8%E7%83%9F%E5%AD%A6%E7%94%9F%E5%AD%A6%E8%B4%B9%E5%87%8F%E5%85%8D%E8%B5%84%E6%A0%BC)
1. [字节正式员工请愿留下外包员工](https://www.zhihu.com/search?q=%E5%AD%97%E8%8A%82%E6%AD%A3%E5%BC%8F%E5%91%98%E5%B7%A5%E8%AF%B7%E6%84%BF%E7%95%99%E4%B8%8B%E5%A4%96%E5%8C%85%E5%91%98%E5%B7%A5)
1. [看山今日一签](https://www.zhihu.com/search?q=%E7%9C%8B%E5%B1%B1%E4%BB%8A%E6%97%A5%E4%B8%80%E7%AD%BE)
1. [闲鱼称「涉未成年人淫秽」不实](https://www.zhihu.com/search?q=%E9%97%B2%E9%B1%BC%E7%A7%B0%E3%80%8C%E6%B6%89%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E6%B7%AB%E7%A7%BD%E3%80%8D%E4%B8%8D%E5%AE%9E)
1. [油价将大幅调整](https://www.zhihu.com/search?q=%E6%B2%B9%E4%BB%B7%E5%B0%86%E5%A4%A7%E5%B9%85%E8%B0%83%E6%95%B4)
1. [男子熬夜刷手机脑萎缩如80岁](https://www.zhihu.com/search?q=%E7%94%B7%E5%AD%90%E7%86%AC%E5%A4%9C%E5%88%B7%E6%89%8B%E6%9C%BA%E8%84%91%E8%90%8E%E7%BC%A9%E5%A6%8280%E5%B2%81)
1. [女孩从 5 楼往下扔快递时坠亡](https://www.zhihu.com/search?q=%E5%A5%B3%E5%AD%A9%E4%BB%8E%205%20%E6%A5%BC%E5%BE%80%E4%B8%8B%E6%89%94%E5%BF%AB%E9%80%92%E6%97%B6%E5%9D%A0%E4%BA%A1)
1. [大量食品用果葡糖浆替代白砂糖](https://www.zhihu.com/search?q=%E5%A4%A7%E9%87%8F%E9%A3%9F%E5%93%81%E7%94%A8%E6%9E%9C%E8%91%A1%E7%B3%96%E6%B5%86%E6%9B%BF%E4%BB%A3%E7%99%BD%E7%A0%82%E7%B3%96)
1. [GPT-6 Sol 和 Luna 发布](https://www.zhihu.com/search?q=GPT-6%20Sol%20%E5%92%8C%20Luna%20%E5%8F%91%E5%B8%83)
1. [小米MIMO登上AA开源榜第一](https://www.zhihu.com/search?q=%E5%B0%8F%E7%B1%B3MIMO%E7%99%BB%E4%B8%8AAA%E5%BC%80%E6%BA%90%E6%A6%9C%E7%AC%AC%E4%B8%80)
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
