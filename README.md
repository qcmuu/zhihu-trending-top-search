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
<!-- 最后更新时间 Sun Sep 20 2026 01:45:58 GMT+0800 (China Standard Time) -->
1. [华为突破冯诺依曼单机架构](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E7%AA%81%E7%A0%B4%E5%86%AF%E8%AF%BA%E4%BE%9D%E6%9B%BC%E5%8D%95%E6%9C%BA%E6%9E%B6%E6%9E%84)
1. [华为高层内部万字长文曝光](https://www.zhihu.com/search?q=%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B1%82%E5%86%85%E9%83%A8%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%E6%9B%9D%E5%85%89)
1. [歌手许嵩官宣结婚](https://www.zhihu.com/search?q=%E6%AD%8C%E6%89%8B%E8%AE%B8%E5%B5%A9%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A)
1. [iG 3:1 JDG](https://www.zhihu.com/search?q=iG%203%3A1%20JDG)
1. [知乎 CLI 创作者能力上新](https://www.zhihu.com/search?q=%E7%9F%A5%E4%B9%8E%20CLI%20%E5%88%9B%E4%BD%9C%E8%80%85%E8%83%BD%E5%8A%9B%E4%B8%8A%E6%96%B0)
1. [西贝被曝将彻底倒闭](https://www.zhihu.com/search?q=%E8%A5%BF%E8%B4%9D%E8%A2%AB%E6%9B%9D%E5%B0%86%E5%BD%BB%E5%BA%95%E5%80%92%E9%97%AD)
1. [广西孙子非亲生案鉴定机构被罚](https://www.zhihu.com/search?q=%E5%B9%BF%E8%A5%BF%E5%AD%99%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E9%89%B4%E5%AE%9A%E6%9C%BA%E6%9E%84%E8%A2%AB%E7%BD%9A)
1. [智谱ZCode被曝偷传用户数据](https://www.zhihu.com/search?q=%E6%99%BA%E8%B0%B1ZCode%E8%A2%AB%E6%9B%9D%E5%81%B7%E4%BC%A0%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE)
1. [12306已拒绝出票133.1万张](https://www.zhihu.com/search?q=12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8133.1%E4%B8%87%E5%BC%A0)
1. [中国男篮 77-97 日本男篮](https://www.zhihu.com/search?q=%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%2077-97%20%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE)
1. [李小璐赵涛疑似恋情](https://www.zhihu.com/search?q=%E6%9D%8E%E5%B0%8F%E7%92%90%E8%B5%B5%E6%B6%9B%E7%96%91%E4%BC%BC%E6%81%8B%E6%83%85)
1. [特朗普称将获格陵兰岛安全永久控制权](https://www.zhihu.com/search?q=%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E8%8E%B7%E6%A0%BC%E9%99%B5%E5%85%B0%E5%B2%9B%E5%AE%89%E5%85%A8%E6%B0%B8%E4%B9%85%E6%8E%A7%E5%88%B6%E6%9D%83)
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
