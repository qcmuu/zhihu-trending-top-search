import type { SearchWord } from "./types.ts";

/** 合并两次关键词并根据 display_query 去重 */
export function mergeWords(
  words: SearchWord[],
  another: SearchWord[],
): SearchWord[] {
  // 必须用 Map：普通对象的整数样式键（"520"、"315"、"11"）会被按数值升序
  // 排到最前，破坏「数组下标即当日排名」的顺序。
  const merged = new Map<string, string>();
  for (const w of words.concat(another)) {
    merged.set(w.display_query, w.query);
  }
  return [...merged].map(([display_query, query]) => ({
    query,
    display_query,
  }));
}

const README_SLOT = /<!-- BEGIN -->[\W\w]*<!-- END -->/;

function escapeMdLabel(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(
    /\]/g,
    "\\]",
  );
}

export async function createReadme(words: SearchWord[]): Promise<string> {
  const readme = await Deno.readTextFile("./README.md");
  if (!README_SLOT.test(readme)) {
    throw new Error("README.md 缺少 <!-- BEGIN --> / <!-- END --> 标记");
  }
  // 用函数形式替换：字符串替换会把标题里的 $&、$' 当成替换模式，破坏 README
  return readme.replace(README_SLOT, () => createList(words));
}

export function createList(words: SearchWord[]): string {
  return `<!-- BEGIN -->
<!-- 最后更新时间 ${Date()} -->
${
    words.map((x) =>
      `1. [${escapeMdLabel(x.display_query)}](https://www.zhihu.com/search?q=${
        encodeURIComponent(x.query)
      })`
    ).join("\n")
  }
<!-- END -->`;
}

export function createArchive(words: SearchWord[], date: string): string {
  return `# ${date}\n
共 ${words.length} 条\n
${createList(words)}
`;
}
