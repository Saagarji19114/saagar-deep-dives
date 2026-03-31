import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/lib/articles";
import Layout from "@/components/Layout";

const Archive = () => {
  const { lang, t } = useI18n();

  const grouped: Record<string, typeof articles> = {};
  articles.forEach((a) => {
    const key = a.date.slice(0, 7); // YYYY-MM
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(a);
  });

  const months = Object.keys(grouped).sort().reverse();

  return (
    <Layout>
      <div className="container max-w-3xl py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          {t("archive.title")}
        </h1>
        <div className="space-y-8">
          {months.map((month) => (
            <div key={month}>
              <h2 className="font-display text-lg font-bold text-foreground mb-3 text-primary">
                {new Date(month + "-01").toLocaleDateString(lang === "hi" ? "hi-IN" : "en-US", { year: "numeric", month: "long" })}
              </h2>
              <div className="space-y-2 pl-4 border-l-2 border-border">
                {grouped[month].map((a) => (
                  <Link key={a.id} to={`/article/${a.slug}`} className="block group py-2">
                    <p className={`text-foreground group-hover:text-primary transition-colors ${lang === "hi" ? "font-hindi" : ""}`}>
                      {a.title[lang]}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {a.date} · {a.readTime} {t("article.readtime")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
