export function countArticleWords(markdown: string): number {
  const prose = markdown
    .replace(/!\[[^\]]*\]\([^\n]*\)/g, "")
    .replace(/^\*[^\n]*\*$/gm, "")
    .replace(/\[([^\]]*)\]\([^\n]*?\)/g, "$1")
    .replace(/^#{1,6}\s+.*$/gm, "");
  return prose.trim().split(/\s+/u).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

export function headingId(heading: string): string {
  return heading.toLowerCase().trim().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-");
}

export function articleReadingTime(markdown: string, lang: "en" | "hi"): number {
  return Math.ceil(countArticleWords(markdown) / (lang === "hi" ? 180 : 220));
}