import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Clock, Languages, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { astraArticle, astraSeo } from "@/lib/astraArticle";
import { articleReadingTime, headingId } from "@/lib/articleText";
import { articles } from "@/lib/articles";
import Layout from "./Layout";
import ArticleCard from "./ArticleCard";
import Giscus from "./Giscus";
import LikeButton from "./LikeButton";
import { Button } from "./ui/button";

const origin = "https://saagar-deep-dives.lovable.app";

export default function AstraArticleView() {
  const { lang, setLang, t } = useI18n();
  const [params, setParams] = useSearchParams();
  const queryLang = params.get("lang");
  useEffect(() => {
    if (queryLang === "hi" || queryLang === "en") setLang(queryLang);
  }, [queryLang, setLang]);
  const article = astraArticle;
  const content = article.content[lang];
  const headings = [...content.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
  const url = `${origin}/article/${article.slug}`;
  const editionUrl = `${url}?lang=${lang}`;
  const seo = astraSeo[lang];
  const shareTitle = article.title[lang];
  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${editionUrl}#article`,
    headline: article.title[lang],
    description: seo.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: "The Saagar — Stories from the Depths" },
    inLanguage: lang,
    mainEntityOfPage: editionUrl,
    image: new URL(article.image, origin).href,
    articleBody: content.replace(/!\[[^\]]*\]\([^\n]*\)/g, ""),
  };
  return (
    <Layout>
      <Helmet>
        <html lang={lang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={editionUrl} />
        <link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />
        <link rel="alternate" hrefLang="hi" href={`${url}?lang=hi`} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={editionUrl} />
        <meta property="og:locale" content={lang === "hi" ? "hi_IN" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative isolate overflow-hidden">
        <img src={article.image} alt={lang === "hi" ? "शोध, कोड और जटिल कामों में AI सहायता का संपादकीय चित्र" : "Editorial illustration of AI assisting with research, code and complex workflows"} width={1600} height={912} fetchPriority="high" className="w-full h-[240px] sm:h-[380px] lg:h-[460px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </section>
      <div className="container max-w-6xl relative -mt-12 sm:-mt-16">
        <header className="max-w-4xl pt-6 pb-8">
          <div className="flex flex-wrap gap-3 items-center mb-5">
            <Link to="/categories#ai" className="text-primary text-xs font-semibold uppercase">{t("cat.ai")}</Link>
            <span className="text-muted-foreground text-xs">The Saagar — Stories from the Depths</span>
          </div>
          <h1 className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground break-words ${lang === "hi" ? "font-hindi" : ""}`}>{article.title[lang]}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground mt-6">
            <span>{t("article.by")} <span className="font-semibold text-foreground">Sahjad</span></span>
            <time dateTime={article.date}>{new Intl.DateTimeFormat(lang === "hi" ? "hi-IN" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${article.date}T00:00:00Z`))}</time>
            <span className="inline-flex gap-1.5 items-center"><Clock size={14} />{articleReadingTime(content, lang)} {t("article.readtime")}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Languages className="text-primary" size={20} aria-hidden="true" />
            <div role="group" aria-label="Article language" className="inline-flex border border-border rounded-md p-1 gap-1 bg-card">
              {(["hi", "en"] as const).map((language) => (
                <Button key={language} size="sm" variant={lang === language ? "default" : "ghost"} aria-pressed={lang === language} onClick={() => { setLang(language); setParams({ lang: language }, { replace: true }); }} className={language === "hi" ? "font-hindi" : ""}>{language === "hi" ? "हिंदी" : "English"}</Button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">{lang === "hi" ? "मुख्य चित्र: मूल AI-निर्मित संपादकीय कल्पना, वास्तविक Astra स्क्रीनशॉट नहीं।" : "Cover: original AI-generated editorial illustration, not a genuine Astra screenshot."}</p>
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-border">
            <span className="text-sm text-muted-foreground mr-1">{t("article.share")}</span>
            {[
              ["Twitter/X", `https://twitter.com/intent/tweet?url=${encodeURIComponent(editionUrl)}&text=${encodeURIComponent(shareTitle)}`],
              ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(editionUrl)}`],
              ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(editionUrl)}`],
              ["WhatsApp", `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${editionUrl}`)}`],
            ].map(([label, href]) => <Button asChild variant="secondary" size="sm" key={label}><a href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={12} /></a></Button>)}
          </div>
        </header>
        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12 border-t border-border pt-8">
          <aside className="min-w-0">
            <nav aria-label={t("section.toc")} className="lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-foreground mb-4">{t("section.toc")}</h2>
              <ol className="space-y-3">
                {headings.map((h, i) => <li key={h} className="flex gap-3 text-sm leading-relaxed"><span className="text-primary shrink-0 w-5 text-xs pt-0.5">{String(i + 1).padStart(2, "0")}</span><a href={`#${headingId(h)}`} className="text-muted-foreground hover:text-primary break-words">{h}</a></li>)}
              </ol>
            </nav>
          </aside>
          <div className="min-w-0">
            <article lang={lang} aria-label={article.title[lang]} className={`min-w-0 text-lg leading-[1.9] text-foreground break-words ${lang === "hi" ? "font-hindi" : ""}`}>
              <ReactMarkdown components={{
                h2: ({ children }) => <h2 id={headingId(String(children))} className="scroll-mt-24 font-display text-2xl sm:text-3xl font-bold leading-snug mt-12 mb-5 first:mt-0">{children}</h2>,
                h3: ({ children }) => <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug mt-9 mb-4">{children}</h3>,
                p: ({ children, node }) => node?.children.some((child) => child.type === "element" && child.tagName === "img") ? <div className="mt-9 mb-2">{children}</div> : <p className="mb-6">{children}</p>,
                img: ({ src, alt }) => <img src={src} alt={alt || ""} width={1440} height={912} loading="lazy" className="w-full h-auto rounded-md" />,
                em: ({ children }) => <em className="block text-sm leading-relaxed text-muted-foreground not-italic">{children}</em>,
                a: ({ href, children }) => href?.startsWith("/") ? <Link to={href} className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">{children}</Link> : <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">{children}</a>,
              }}>{content}</ReactMarkdown>
            </article>
            <div className="py-8 border-y border-border mt-10"><LikeButton articleId={article.id} /></div>
            <section className="py-10"><h2 className="font-display text-xl font-bold mb-5">{t("section.comments")}</h2><Giscus /></section>
          </div>
        </div>
        {related.length > 0 && <section className="py-12 border-t border-border"><h2 className="font-display text-2xl font-bold mb-6">{t("section.related")}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{related.map((a) => <ArticleCard key={a.id} article={a} />)}</div></section>}
      </div>
    </Layout>
  );
}
