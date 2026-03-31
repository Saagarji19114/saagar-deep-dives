import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { articles, categories } from "@/lib/articles";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";

const Blog = () => {
  const { lang, t } = useI18n();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = !selectedCat || a.category === selectedCat;
    const matchSearch = !searchQuery || a.title[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          {t("article.all")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-center py-12">
                {lang === "en" ? "No articles found." : "कोई लेख नहीं मिला।"}
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            <div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("section.search")}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">{t("nav.categories")}</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCat(null)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    !selectedCat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang === "en" ? "All" : "सभी"}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      selectedCat === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.icon} {t(`cat.${cat.id}`)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">{t("section.popular")}</h3>
              <div className="space-y-3">
                {articles.slice(0, 4).map((a) => (
                  <a key={a.id} href={`/article/${a.slug}`} className="block group">
                    <p className={`text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 ${lang === "hi" ? "font-hindi" : ""}`}>
                      {a.title[lang]}
                    </p>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
