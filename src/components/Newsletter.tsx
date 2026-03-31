import { useI18n } from "@/lib/i18n";

const Newsletter = () => {
  const { t } = useI18n();

  return (
    <section className="py-16">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          {t("section.newsletter")}
        </h2>
        <p className="text-muted-foreground mb-6">{t("section.newsletter.desc")}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder={t("section.newsletter.placeholder")}
            className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors glow"
          >
            {t("section.newsletter.btn")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
