import { useParams, Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { getArticleBySlug, articles } from "@/lib/articles";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";

const ArticlePage = () => {
  const { slug } = useParams();
  const { lang, t } = useI18n();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">Article not found.</p>
          <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">← {t("nav.blog")}</Link>
        </div>
      </Layout>
    );
  }

  const content = article.content[lang] || article.content.en;
  const headings = content.match(/^##\s+(.+)$/gm)?.map((h) => h.replace(/^##\s+/, "")) || [];
  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

  const renderContent = (md: string) => {
    return md.split("\n").map((line, i) => {
      if (line.trim().startsWith("<img ")) return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{line.replace("### ", "")}</h3>;
      if (line.startsWith("## ")) return <h2 key={i} id={line.replace("## ", "").toLowerCase().replace(/\s+/g, "-")} className="text-xl font-bold text-foreground mt-8 mb-3">{line.replace("## ", "")}</h2>;
      if (line.startsWith("- ")) return <li key={i} className="text-muted-foreground ml-4 list-disc">{line.replace("- ", "")}</li>;
      if (line.startsWith("1. ")) return <li key={i} className="text-muted-foreground ml-4 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-muted-foreground leading-relaxed mb-2">{line}</p>;
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = article.title[lang];

  return (
    <Layout>
      {/* Hero image */}
      <div className="w-full h-[40vh] min-h-[300px] relative overflow-hidden">
        <img src={article.image} alt={article.title[lang]} className="w-full h-full object-cover" width={800} height={512} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container max-w-4xl -mt-20 relative z-10">
        <div className="bg-card border border-border rounded-xl p-6 md:p-10">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">{t(`cat.${article.category}`)}</span>
          <h1 className={`font-display text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4 leading-tight ${lang === "hi" ? "font-hindi" : ""}`}>
            {article.title[lang]}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
            <span>{t("article.by")} {article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} {t("article.readtime")}</span>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <span className="text-sm text-muted-foreground">{t("article.share")}:</span>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">Twitter/X</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* TOC */}
            {headings.length > 0 && (
              <aside className="lg:w-48 shrink-0">
                <div className="sticky top-20">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("section.toc")}</h4>
                  <nav className="space-y-1.5">
                    {headings.map((h, i) => (
                      <a key={i} href={`#${h.toLowerCase().replace(/\s+/g, "-")}`} className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                        {h}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Content */}
            <article className={`flex-1 ${lang === "hi" ? "font-hindi" : ""}`}>
              {renderContent(content)}
            </article>
          </div>

          {/* Comments placeholder */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">{t("section.comments")}</h3>
            <textarea
              placeholder={t("section.comments.placeholder")}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none h-24"
            />
            <button className="mt-3 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              {t("section.comments.submit")}
            </button>
          </div>
        </div>
         {/* Giscus Comments */}
        <div className="giscus mt-12" id="giscus"></div>

        <script
          src="https://giscus.app/client.js"
          data-repo="Saagarji19114/saagar-deep-dives"
          data-repo-id="R_kqDOR2xtuw"
          data-category="General"
          data-category-id="DIC_kwDOR2xtu84C8a54"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="en"
          crossOrigin="anonymous"
          async
        ></script>
        {/* Related */}
        {related.length > 0 && (
          <section className="py-12">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">{t("section.related")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ArticlePage;
