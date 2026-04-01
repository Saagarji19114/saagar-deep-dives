import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { articles, getFeaturedArticles, categories } from "@/lib/articles";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const { lang, t } = useI18n();
  const featured = getFeaturedArticles();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Deep ocean cosmos background"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
            The <span className="text-primary">Saagar</span>
          </h1>
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide max-w-2xl mx-auto mb-8 ${lang === "hi" ? "font-hindi" : ""}`}
            style={{
              backgroundImage: "linear-gradient(90deg, #00F5FF, #0099FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(0, 245, 255, 0.3), 0 0 60px rgba(0, 153, 255, 0.15)",
              filter: "drop-shadow(0 0 12px rgba(0, 245, 255, 0.25))",
            }}
          >
            {t("hero.tagline")}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all glow"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t("section.featured")}
          </h2>
          <div className="grid gap-6">
            {featured.slice(0, 1).map((a) => (
              <ArticleCard key={a.id} article={a} featured />
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.slice(1, 3).map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {t("section.latest")}
            </h2>
            <Link to="/blog" className="text-sm text-primary hover:underline">
              {t("viewall")} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {articles.slice(0, 8).map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t("section.categories")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/categories#${cat.id}`}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {t(`cat.${cat.id}`)}
                </h3>
                <p className={`text-xs text-muted-foreground mt-1 line-clamp-2 ${lang === "hi" ? "font-hindi" : ""}`}>
                  {cat.desc[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Index;
