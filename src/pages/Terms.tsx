import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";

const Terms = () => {
  const { lang, t } = useI18n();

  return (
    <Layout>
      <div className="container max-w-3xl py-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">{t("terms.title")}</h1>
        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          {lang === "en" ? (
            <>
              <p>Last updated: March 2026</p>
              <p>By accessing and using The Saagar website, you agree to be bound by these Terms and Conditions.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">Use of Content</h2>
              <p>All content on this website is the intellectual property of The Saagar. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">Disclaimer</h2>
              <p>The information provided on this website is for educational and informational purposes only. We make no warranties about the accuracy or completeness of the content.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">Changes</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of any changes.</p>
            </>
          ) : (
            <>
              <p>अंतिम अपडेट: मार्च 2026</p>
              <p>The Saagar वेबसाइट का उपयोग करके, आप इन नियमों और शर्तों से बंधे होने के लिए सहमत हैं।</p>
              <h2 className="text-foreground font-semibold text-base mt-6">सामग्री का उपयोग</h2>
              <p>इस वेबसाइट की सभी सामग्री The Saagar की बौद्धिक संपदा है। आप स्पष्ट अनुमति के बिना पुनरुत्पादन या वितरण नहीं कर सकते।</p>
              <h2 className="text-foreground font-semibold text-base mt-6">अस्वीकरण</h2>
              <p>इस वेबसाइट पर दी गई जानकारी केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है।</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
