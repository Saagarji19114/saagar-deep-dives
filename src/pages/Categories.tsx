import { useI18n } from "@/lib/i18n";
import { categories, getArticlesByCategory } from "@/lib/articles";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";

const Categories = () => {
  const { lang, t } = useI18n();

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          {t("nav.categories")}
        </h1>
        <div className="space-y-12">
          {categories.map((cat) => {
            const catArticles = getArticlesByCategory(cat.id);
            return (
              <section key={cat.id} id={cat.id}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{t(`cat.${cat.id}`)}</h2>
                    <p className={`text-sm text-muted-foreground ${lang === "hi" ? "font-hindi" : ""}`}>{cat.desc[lang]}</p>
                  </div>
                </div>
                {catArticles.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catArticles.map((a) => (
                      <ArticleCard key={a.id} article={a} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground py-4">
                    {lang === "en" ? "Coming soon..." : "जल्द आ रहा है..."}
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
