import { useI18n } from "@/lib/i18n";
import Layout from "@/components/Layout";

const About = () => {
  const { lang, t } = useI18n();

  return (
    <Layout>
      <div className="container max-w-3xl py-16">
        <h1 className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-6 ${lang === "hi" ? "font-hindi" : ""}`}>
          {t("about.title")}
        </h1>
        <div className={`prose prose-lg max-w-none ${lang === "hi" ? "font-hindi" : ""}`}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("about.bio")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {lang === "en"
              ? "Our mission is to make science and technology accessible to everyone. We believe that understanding the world around us — from the smallest quantum particles to the vast expanse of the cosmos — enriches our lives and empowers better decisions. Every article is researched thoroughly and written in clear, jargon-free language."
              : "हमारा मिशन विज्ञान और प्रौद्योगिकी को सभी के लिए सुलभ बनाना है। हम मानते हैं कि हमारे आसपास की दुनिया को समझना — सबसे छोटे क्वांटम कणों से लेकर ब्रह्मांड के विशाल विस्तार तक — हमारे जीवन को समृद्ध करता है। प्रत्येक लेख पूरी तरह से शोध किया गया है और स्पष्ट, सरल भाषा में लिखा गया है।"}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
