import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import type { Article } from "@/lib/articles";

const ArticleCard = ({ article, featured = false }: { article: Article; featured?: boolean }) => {
  const { lang, t } = useI18n();

  return (
    <Link
      to={`/article/${article.slug}`}
      className={`group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
        featured ? "md:flex" : ""
      }`}
    >
      <div className={`overflow-hidden ${featured ? "md:w-1/2" : "aspect-[16/10]"}`}>
        <img
          src={article.image}
          alt={article.title[lang]}
          loading="lazy"
          width={800}
          height={512}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`p-5 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center md:p-8" : ""}`}>
        <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-2">
          {t(`cat.${article.category}`)}
        </span>
        <h3 className={`font-display font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors ${
          featured ? "text-xl md:text-2xl" : "text-base"
        } ${lang === "hi" ? "font-hindi" : ""}`}>
          {article.title[lang]}
        </h3>
        <p className={`text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 ${lang === "hi" ? "font-hindi" : ""}`}>
          {article.excerpt[lang]}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} {t("article.readtime")}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
