import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";

const Privacy = () => {
  const { lang, t } = useI18n();

  return (
    <Layout>
      <div className="container max-w-3xl py-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">{t("privacy.title")}</h1>
        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          {lang === "en" ? (
            <>
              <p>Last updated: March 2026</p>
              <p>At The Saagar, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information about you when you use our website.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">Information We Collect</h2>
              <p>We collect information you provide directly, such as your email address when you subscribe to our newsletter. We also automatically collect certain information about your device and usage through cookies and similar technologies.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">How We Use Information</h2>
              <p>We use information to operate and improve our website, send you newsletters and updates, and analyze how our content performs.</p>
              <h2 className="text-foreground font-semibold text-base mt-6">Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us through our Contact page.</p>
            </>
          ) : (
            <>
              <p>अंतिम अपडेट: मार्च 2026</p>
              <p>The Saagar में, हम आपकी गोपनीयता को गंभीरता से लेते हैं। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग और साझा करते हैं।</p>
              <h2 className="text-foreground font-semibold text-base mt-6">हम कौन सी जानकारी एकत्र करते हैं</h2>
              <p>हम वह जानकारी एकत्र करते हैं जो आप सीधे प्रदान करते हैं, जैसे कि जब आप हमारे न्यूज़लेटर की सदस्यता लेते हैं तो आपका ईमेल पता।</p>
              <h2 className="text-foreground font-semibold text-base mt-6">संपर्क</h2>
              <p>यदि आपके इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमारे संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें।</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
