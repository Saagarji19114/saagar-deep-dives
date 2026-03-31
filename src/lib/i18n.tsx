import React, { createContext, useContext, useState, useCallback } from "react";

export type Lang = "en" | "hi";

type Translations = {
  [key: string]: { en: string; hi: string };
};

const t: Translations = {
  // Nav
  "nav.home": { en: "Home", hi: "होम" },
  "nav.blog": { en: "Blog", hi: "ब्लॉग" },
  "nav.categories": { en: "Categories", hi: "श्रेणियाँ" },
  "nav.archive": { en: "Archive", hi: "संग्रह" },
  "nav.about": { en: "About", hi: "हमारे बारे में" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  // Hero
  "hero.tagline": { en: "Exploring Science, Technology & The Universe", hi: "विज्ञान, प्रौद्योगिकी और ब्रह्मांड की खोज" },
  "hero.cta": { en: "Start Reading", hi: "पढ़ना शुरू करें" },
  // Sections
  "section.featured": { en: "Featured Articles", hi: "विशेष लेख" },
  "section.latest": { en: "Latest Articles", hi: "नवीनतम लेख" },
  "section.categories": { en: "Explore Categories", hi: "श्रेणियाँ देखें" },
  "section.newsletter": { en: "Stay Curious", hi: "जिज्ञासु बने रहें" },
  "section.newsletter.desc": { en: "Get the latest articles on science and technology delivered to your inbox.", hi: "विज्ञान और प्रौद्योगिकी पर नवीनतम लेख अपने इनबॉक्स में पाएं।" },
  "section.newsletter.placeholder": { en: "Your email address", hi: "आपका ईमेल पता" },
  "section.newsletter.btn": { en: "Subscribe", hi: "सदस्यता लें" },
  "section.popular": { en: "Popular Posts", hi: "लोकप्रिय पोस्ट" },
  "section.search": { en: "Search articles...", hi: "लेख खोजें..." },
  "section.related": { en: "Related Articles", hi: "संबंधित लेख" },
  "section.comments": { en: "Comments", hi: "टिप्पणियाँ" },
  "section.comments.placeholder": { en: "Share your thoughts...", hi: "अपने विचार साझा करें..." },
  "section.comments.submit": { en: "Post Comment", hi: "टिप्पणी करें" },
  "section.toc": { en: "Table of Contents", hi: "विषय सूची" },
  // Article meta
  "article.readtime": { en: "min read", hi: "मिनट पढ़ें" },
  "article.by": { en: "By", hi: "लेखक" },
  "article.share": { en: "Share", hi: "शेयर करें" },
  "article.all": { en: "All Articles", hi: "सभी लेख" },
  // Footer
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
  "footer.quicklinks": { en: "Quick Links", hi: "त्वरित लिंक" },
  "footer.social": { en: "Follow Us", hi: "हमें फॉलो करें" },
  "footer.tagline": { en: "Exploring the frontiers of science and technology.", hi: "विज्ञान और प्रौद्योगिकी की सीमाओं की खोज।" },
  // About
  "about.title": { en: "About The Saagar", hi: "The Saagar के बारे में" },
  "about.bio": { en: "The Saagar is a science and technology blog by Sahjad that explores the latest discoveries, future tech, and deep scientific concepts in simple language.", hi: "The Saagar, साहजाद द्वारा लिखा गया एक विज्ञान और प्रौद्योगिकी ब्लॉग है जो नवीनतम खोजों, भविष्य की तकनीक और गहन वैज्ञानिक अवधारणाओं को सरल भाषा में प्रस्तुत करता है।" },
  // Contact
  "contact.title": { en: "Get in Touch", hi: "संपर्क करें" },
  "contact.name": { en: "Your Name", hi: "आपका नाम" },
  "contact.email": { en: "Your Email", hi: "आपका ईमेल" },
  "contact.message": { en: "Your Message", hi: "आपका संदेश" },
  "contact.send": { en: "Send Message", hi: "संदेश भेजें" },
  // Categories
  "cat.science": { en: "Science", hi: "विज्ञान" },
  "cat.technology": { en: "Technology", hi: "प्रौद्योगिकी" },
  "cat.space": { en: "Space", hi: "अंतरिक्ष" },
  "cat.ai": { en: "AI & Future", hi: "AI और भविष्य" },
  "cat.gadgets": { en: "Gadgets", hi: "गैजेट्स" },
  "cat.environment": { en: "Environment", hi: "पर्यावरण" },
  "cat.explainers": { en: "Explainers", hi: "व्याख्या" },
  // Theme
  "theme.dark": { en: "Dark", hi: "डार्क" },
  "theme.light": { en: "Light", hi: "लाइट" },
  // Pages
  "privacy.title": { en: "Privacy Policy", hi: "गोपनीयता नीति" },
  "terms.title": { en: "Terms and Conditions", hi: "नियम और शर्तें" },
  "archive.title": { en: "Archive", hi: "संग्रह" },
  "viewall": { en: "View All", hi: "सभी देखें" },
};

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  const translate = useCallback(
    (key: string) => {
      const entry = t[key];
      if (!entry) return key;
      return entry[lang] || entry.en || key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translate }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
