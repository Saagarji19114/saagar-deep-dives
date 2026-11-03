import { describe, expect, it } from "vitest";
import { astraArticle } from "@/lib/astraArticle";
import { articles, getArticleBySlug } from "@/lib/articles";
import { countArticleWords, headingId } from "@/lib/articleText";

describe("Astra editorial requirements", () => {
  it("has at least 1600 Hindi prose words", () => {
    expect(countArticleWords(astraArticle.content.hi)).toBeGreaterThanOrEqual(1600);
  });
  it("has at least 1200 English prose words", () => {
    expect(countArticleWords(astraArticle.content.en)).toBeGreaterThanOrEqual(1200);
  });
  it("has nine illustrations in each edition including the hero", () => {
    for (const lang of ["en", "hi"] as const) {
      expect((astraArticle.content[lang].match(/!\[/g) || []).length + 1).toBe(9);
    }
  });
  it("registers one unique article with the correct author", () => {
    expect(articles.filter((article) => article.slug === "ai-evolution-gpt-6-astra")).toHaveLength(1);
    expect(getArticleBySlug("ai-evolution-gpt-6-astra")?.author).toBe("Sahjad");
  });
  it("creates distinct nonempty anchors for both editions", () => {
    for (const lang of ["en", "hi"] as const) {
      const headings = [...astraArticle.content[lang].matchAll(/^## (.+)$/gm)].map((match) => headingId(match[1]));
      expect(headings.every(Boolean)).toBe(true);
      expect(new Set(headings).size).toBe(headings.length);
    }
  });
});