import articleAi from "@/assets/article-ai.jpg";
import articleSpace from "@/assets/article-space.jpg";
import articleQuantum from "@/assets/article-quantum.jpg";
import articleOcean from "@/assets/article-ocean.jpg";
import articleEnergy from "@/assets/article-energy.jpg";
import articleMars from "@/assets/article-mars.jpg";
import articleGadget from "@/assets/article-gadget.jpg";
import articleDna from "@/assets/article-dna.jpg";

export interface Article {
  id: string;
  slug: string;
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  content: { en: string; hi: string };
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  featured?: boolean;
}

export const categories = [
  { id: "science", icon: "🔬", desc: { en: "Discoveries that reshape our understanding of the world.", hi: "ऐसी खोजें जो दुनिया की हमारी समझ को बदलती हैं।" } },
  { id: "technology", icon: "💻", desc: { en: "The tools and innovations driving human progress.", hi: "मानव प्रगति को आगे बढ़ाने वाले उपकरण और नवाचार।" } },
  { id: "space", icon: "🚀", desc: { en: "Exploring the cosmos and our place in it.", hi: "ब्रह्मांड और उसमें हमारे स्थान की खोज।" } },
  { id: "ai", icon: "🤖", desc: { en: "Artificial intelligence and what lies ahead.", hi: "कृत्रिम बुद्धिमत्ता और आगे क्या है।" } },
  { id: "gadgets", icon: "📱", desc: { en: "The latest devices shaping everyday life.", hi: "रोज़मर्रा की ज़िंदगी को आकार देने वाले नवीनतम उपकरण।" } },
  { id: "environment", icon: "🌍", desc: { en: "Climate, energy, and protecting our planet.", hi: "जलवायु, ऊर्जा और हमारे ग्रह की रक्षा।" } },
  { id: "explainers", icon: "📖", desc: { en: "Complex topics made simple and clear.", hi: "जटिल विषय सरल और स्पष्ट बनाए गए।" } },
];

export const articles: Article[] = [
  {
    id: "1", slug: "future-of-artificial-intelligence-2026",
    title: { en: "The Future of Artificial Intelligence in 2026", hi: "2026 में कृत्रिम बुद्धिमत्ता का भविष्य" },
    excerpt: { en: "From autonomous agents to creative AI — how artificial intelligence is reshaping every industry this year.", hi: "स्वायत्त एजेंटों से लेकर रचनात्मक AI तक — इस साल कृत्रिम बुद्धिमत्ता हर उद्योग को कैसे बदल रही है।" },
    content: {
      en: `## The AI Revolution Continues\n\nArtificial intelligence has moved far beyond chatbots. In 2026, we're seeing AI agents that can autonomously plan, execute, and iterate on complex tasks.\n\n## Key Trends\n\n### 1. Autonomous AI Agents\nThese systems can browse the web, write code, and manage projects with minimal human oversight.\n\n### 2. Multimodal Understanding\nModern AI can seamlessly process text, images, audio, and video simultaneously.\n\n### 3. AI in Scientific Discovery\nFrom protein folding to drug discovery, AI is accelerating breakthroughs.\n\n## What This Means for You\n\nThe democratization of AI tools means everyone—from students to entrepreneurs—can harness powerful capabilities that were once reserved for tech giants.\n\n## Looking Ahead\n\nAs we move through 2026, expect AI to become more embedded in daily workflows, more capable, and more accessible than ever before.`,
      hi: `## AI क्रांति जारी है\n\nकृत्रिम बुद्धिमत्ता चैटबॉट्स से बहुत आगे बढ़ चुकी है। 2026 में, हम AI एजेंट्स देख रहे हैं जो स्वायत्त रूप से जटिल कार्यों की योजना बना सकते हैं।\n\n## प्रमुख रुझान\n\n### 1. स्वायत्त AI एजेंट\nये सिस्टम वेब ब्राउज़ कर सकते हैं, कोड लिख सकते हैं और न्यूनतम मानवीय निगरानी के साथ परियोजनाओं का प्रबंधन कर सकते हैं।\n\n### 2. मल्टीमोडल समझ\nआधुनिक AI एक साथ टेक्स्ट, इमेज, ऑडियो और वीडियो को संसाधित कर सकती है।\n\n### 3. वैज्ञानिक खोज में AI\nप्रोटीन फोल्डिंग से लेकर दवा की खोज तक, AI सफलताओं को तेज कर रही है।`
    },
    image: articleAi, category: "ai", author: "Sahjad", date: "2026-03-28", readTime: 8, featured: true,
  },
  {
    id: "2", slug: "james-webb-telescope-new-discoveries",
    title: { en: "James Webb Telescope: New Discoveries Beyond Imagination", hi: "जेम्स वेब टेलीस्कोप: कल्पना से परे नई खोजें" },
    excerpt: { en: "The telescope continues to reveal ancient galaxies and atmospheric data from exoplanets that challenge our models.", hi: "यह टेलीस्कोप प्राचीन आकाशगंगाओं और एक्सोप्लैनेट्स के वायुमंडलीय डेटा को प्रकट करता जा रहा है।" },
    content: {
      en: `## Peering Into the Cosmic Dawn\n\nThe James Webb Space Telescope (JWST) has been operational for over three years now, and its discoveries continue to astound astronomers.\n\n## Recent Breakthroughs\n\n### Ancient Galaxies\nJWST has identified galaxies that formed just 300 million years after the Big Bang — far earlier than our models predicted.\n\n### Exoplanet Atmospheres\nFor the first time, we can analyze the chemical composition of exoplanet atmospheres with unprecedented detail.\n\n## What's Next\n\nUpcoming observations will focus on potentially habitable worlds in the TRAPPIST-1 system.`,
      hi: `## ब्रह्मांडीय भोर में झांकना\n\nजेम्स वेब स्पेस टेलीस्कोप (JWST) तीन साल से अधिक समय से काम कर रहा है, और इसकी खोजें खगोलविदों को चकित करती रहती हैं।\n\n## हालिया सफलताएं\n\n### प्राचीन आकाशगंगाएं\nJWST ने ऐसी आकाशगंगाओं की पहचान की है जो बिग बैंग के केवल 300 मिलियन वर्ष बाद बनी थीं।`
    },
    image: articleSpace, category: "space", author: "Sahjad", date: "2026-03-25", readTime: 6, featured: true,
  },
  {
    id: "3", slug: "quantum-computing-breakthrough",
    title: { en: "Quantum Computing: The 1000-Qubit Milestone", hi: "क्वांटम कंप्यूटिंग: 1000-क्यूबिट का मील का पत्थर" },
    excerpt: { en: "Researchers achieve a landmark 1000-qubit processor, bringing quantum advantage closer to reality.", hi: "शोधकर्ताओं ने 1000-क्यूबिट प्रोसेसर हासिल किया, क्वांटम लाभ को वास्तविकता के करीब लाया।" },
    content: {
      en: `## A New Era in Computing\n\nThe race to build practical quantum computers has reached a pivotal moment with the first 1000-qubit processor.\n\n## Why It Matters\n\nQuantum computers can solve certain problems exponentially faster than classical computers.\n\n## Applications\n\n- Drug discovery and molecular simulation\n- Cryptography and security\n- Financial modeling\n- Climate prediction`,
      hi: `## कंप्यूटिंग में एक नया युग\n\nव्यावहारिक क्वांटम कंप्यूटर बनाने की दौड़ पहले 1000-क्यूबिट प्रोसेसर के साथ एक महत्वपूर्ण मोड़ पर पहुंच गई है।`
    },
    image: articleQuantum, category: "technology", author: "Sahjad", date: "2026-03-20", readTime: 7, featured: true,
  },
  {
    id: "4", slug: "deep-ocean-bioluminescence-mysteries",
    title: { en: "Deep Ocean Bioluminescence: Nature's Light Show", hi: "गहरे समुद्र की जैव-प्रकाशिकी: प्रकृति का प्रकाश शो" },
    excerpt: { en: "Scientists uncover new bioluminescent species in the hadal zone, rewriting what we know about life in extreme environments.", hi: "वैज्ञानिकों ने हैडल ज़ोन में नई जैव-प्रकाशिक प्रजातियों की खोज की।" },
    content: {
      en: `## Light in the Abyss\n\nMore than 80% of deep-sea organisms produce their own light through bioluminescence.\n\n## New Discoveries\n\nRecent expeditions to the hadal zone (below 6,000 meters) have revealed species that use light in ways never seen before.\n\n## Why Bioluminescence?\n\nOrganisms use it for communication, predation, camouflage, and mating signals.`,
      hi: `## रसातल में प्रकाश\n\nगहरे समुद्र के 80% से अधिक जीव जैव-प्रकाशिकी के माध्यम से अपना प्रकाश उत्पन्न करते हैं।`
    },
    image: articleOcean, category: "science", author: "Sahjad", date: "2026-03-15", readTime: 5,
  },
  {
    id: "5", slug: "renewable-energy-revolution-2026",
    title: { en: "The Renewable Energy Revolution of 2026", hi: "2026 की नवीकरणीय ऊर्जा क्रांति" },
    excerpt: { en: "Solar and wind now account for 40% of global electricity — and the growth is accelerating.", hi: "सौर और पवन ऊर्जा अब वैश्विक बिजली का 40% है — और विकास तेज हो रहा है।" },
    content: {
      en: `## A Tipping Point\n\nRenewable energy has crossed a critical threshold in 2026.\n\n## Key Numbers\n\n- Solar capacity has doubled since 2023\n- Battery storage costs dropped 45%\n- Green hydrogen production is scaling rapidly`,
      hi: `## एक महत्वपूर्ण मोड़\n\n2026 में नवीकरणीय ऊर्जा ने एक महत्वपूर्ण सीमा पार कर ली है।`
    },
    image: articleEnergy, category: "environment", author: "Sahjad", date: "2026-03-10", readTime: 6,
  },
  {
    id: "6", slug: "mars-sample-return-mission-update",
    title: { en: "Mars Sample Return: What We've Learned So Far", hi: "मंगल नमूना वापसी: अब तक हमने क्या सीखा" },
    excerpt: { en: "The Mars Sample Return mission is on track, and preliminary analysis of collected samples is revealing surprises.", hi: "मंगल नमूना वापसी मिशन सही दिशा में है, और एकत्रित नमूनों का प्रारंभिक विश्लेषण आश्चर्यजनक है।" },
    content: {
      en: `## Bringing Mars to Earth\n\nThe Mars Sample Return mission represents one of the most ambitious endeavors in space exploration history.\n\n## What Samples Reveal\n\n- Evidence of ancient water chemistry\n- Organic molecules in Jezero Crater sediments\n- Mineral formations suggesting past habitable conditions`,
      hi: `## मंगल को पृथ्वी पर लाना\n\nमंगल नमूना वापसी मिशन अंतरिक्ष अन्वेषण इतिहास में सबसे महत्वाकांक्षी प्रयासों में से एक है।`
    },
    image: articleMars, category: "space", author: "Sahjad", date: "2026-03-05", readTime: 7,
  },
  {
    id: "7", slug: "best-gadgets-spring-2026",
    title: { en: "Top 5 Gadgets to Watch in Spring 2026", hi: "स्प्रिंग 2026 के शीर्ष 5 गैजेट्स" },
    excerpt: { en: "From foldable laptops to neural-interface earbuds, here are the most exciting gadgets launching this spring.", hi: "फोल्डेबल लैपटॉप से लेकर न्यूरल-इंटरफेस ईयरबड्स तक, इस वसंत के सबसे रोमांचक गैजेट्स।" },
    content: {
      en: `## Spring Tech Roundup\n\n### 1. Foldable Laptop Pro\nA 17-inch display that folds into a 12-inch form factor.\n\n### 2. Neural Earbuds X\nEarbuds that can detect your mood and adjust music accordingly.\n\n### 3. Holographic Display Tablet\nTrue 3D holographic content without glasses.\n\n### 4. AI Camera Drone\nAutonomous filming with cinematic AI.\n\n### 5. Smart Ring Health Monitor\nComplete health tracking in a ring.`,
      hi: `## वसंत तकनीक राउंडअप\n\n### 1. फोल्डेबल लैपटॉप प्रो\n17-इंच डिस्प्ले जो 12-इंच में फोल्ड हो जाता है।`
    },
    image: articleGadget, category: "gadgets", author: "Sahjad", date: "2026-03-01", readTime: 5,
  },
  {
    id: "8", slug: "crispr-gene-editing-explained",
    title: { en: "CRISPR Gene Editing: A Complete Guide", hi: "CRISPR जीन एडिटिंग: एक संपूर्ण गाइड" },
    excerpt: { en: "How CRISPR works, why it matters, and what ethical questions it raises — explained simply.", hi: "CRISPR कैसे काम करता है, यह क्यों महत्वपूर्ण है, और यह कौन से नैतिक सवाल उठाता है — सरल भाषा में।" },
    content: {
      en: `## What is CRISPR?\n\nCRISPR-Cas9 is a revolutionary gene editing tool that allows scientists to modify DNA with unprecedented precision.\n\n## How It Works\n\n1. A guide RNA directs the Cas9 protein to a specific DNA sequence\n2. Cas9 cuts the DNA at that location\n3. The cell's repair machinery fixes the cut, allowing edits\n\n## Applications\n\n- Treating genetic diseases\n- Developing disease-resistant crops\n- Creating new antibiotics\n- Understanding evolution`,
      hi: `## CRISPR क्या है?\n\nCRISPR-Cas9 एक क्रांतिकारी जीन एडिटिंग उपकरण है जो वैज्ञानिकों को अभूतपूर्व सटीकता के साथ DNA को संशोधित करने की अनुमति देता है।`
    },
    image: articleDna, category: "explainers", author: "Sahjad", date: "2026-02-25", readTime: 10,
  },
];

export const getArticlesByCategory = (cat: string) => articles.filter((a) => a.category === cat);
export const getFeaturedArticles = () => articles.filter((a) => a.featured);
export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
