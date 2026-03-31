import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";

const Contact = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="container max-w-2xl py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          {t("contact.title")}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.name")}</label>
            <input className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.email")}</label>
            <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.message")}</label>
            <textarea className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none h-32" />
          </div>
          <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
            {t("contact.send")}
          </button>
        </form>
      </div>
      <Newsletter />
    </Layout>
  );
};

export default Contact;
