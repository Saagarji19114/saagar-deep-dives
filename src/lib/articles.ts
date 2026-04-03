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
      en: `## Introduction: Standing at the Threshold\n\nWe stand at a peculiar moment in human history. Artificial intelligence — once a distant dream whispered about in university labs and science fiction novels — has become the defining force of our era. By early 2026, AI is no longer a tool we occasionally use; it is the invisible architecture shaping how we work, discover, create, and even think.\n\nBut 2026 is not just another incremental year for AI. It marks a profound inflection point — a shift from AI as an assistant to AI as an autonomous collaborator. The question is no longer "What can AI do?" but rather "What should AI do, and who decides?"\n\nLet's explore the landscape.\n\n## The Rise of Agentic AI and Multi-Agent Systems\n\nPerhaps the most transformative development of 2026 is the rise of **agentic AI** — systems that don't just respond to prompts but autonomously plan, execute, and refine complex tasks across multiple steps.\n\nAccording to Gartner, by the end of 2026, **40% of enterprise applications** will incorporate agentic AI capabilities, up from less than 5% in 2024. These aren't simple chatbots. These are digital workers that can:\n\n- Browse the internet and gather research autonomously\n- Write, test, and deploy code without human intervention\n- Coordinate with other AI agents to complete multi-step workflows\n- Manage entire projects from planning to execution\n\nMulti-agent systems take this further. Imagine a team of specialized AI agents — one handles data analysis, another writes reports, a third manages communications — all collaborating seamlessly. This isn't a distant future scenario; companies like Microsoft, Google, and numerous startups are already deploying these architectures in production.\n\nThe implications are staggering. Entire categories of knowledge work may be restructured around human-AI teams rather than purely human hierarchies.\n\n## Multimodal AI: Becoming Human-Like\n\nAI in 2026 doesn't just read text. It **sees**, **hears**, **speaks**, and increasingly **understands context** the way humans do.\n\nMultimodal AI models can now seamlessly process and generate across text, images, audio, video, and even 3D environments simultaneously. A single model can watch a surgery, read a medical paper, listen to a patient's description of symptoms, and synthesize a diagnostic recommendation — all in real time.\n\nThis convergence is making AI interactions feel less like using a tool and more like conversing with a knowledgeable colleague. Voice-first AI interfaces are replacing traditional screens in homes, cars, and workplaces. The line between human communication and human-AI communication is blurring rapidly.\n\n## Physical AI and Robotics: Intelligence Gets a Body\n\nFor decades, AI existed only in the digital realm — powerful but disembodied. 2026 is the year AI steps firmly into the physical world.\n\n**Embodied AI** — artificial intelligence integrated into robots and physical systems — is advancing rapidly. Collaborative robots (cobots) powered by AI are now working alongside humans in:\n\n- Warehouses and manufacturing floors\n- Hospitals and elder care facilities\n- Agriculture and food processing\n- Construction sites and disaster response zones\n\nCompanies like Tesla (with Optimus), Figure AI, and Boston Dynamics are pushing the boundaries of what humanoid robots can do. These machines don't just follow pre-programmed instructions; they perceive their environment, make decisions, and adapt in real time.\n\nThe dream of a robot that can navigate your home, cook a meal, and hold a conversation is no longer science fiction — it's engineering.\n\n## The Shift from Scale to Efficiency: Green AI\n\nThe AI industry is undergoing a philosophical shift. The era of "bigger is always better" is giving way to a new mantra: **efficiency over scale**.\n\nTraining massive AI models consumes enormous energy — a single large model training run can emit as much carbon as five cars over their entire lifetimes. In 2026, the focus is shifting toward:\n\n- **Smaller, more efficient models** that deliver comparable performance with a fraction of the compute\n- **On-device AI** that runs locally on phones and laptops without cloud dependency\n- **Sustainable AI infrastructure** powered by renewable energy\n- **Techniques like quantization, distillation, and sparse architectures** that reduce computational costs dramatically\n\nThis isn't just an environmental imperative — it's an economic one. As AI becomes ubiquitous, the companies that can deliver intelligence cheaply and sustainably will win.\n\n## Impact on Jobs, Society, and Scientific Discovery\n\nThe societal impact of AI in 2026 is complex and nuanced. The narrative of "AI will take all jobs" is giving way to a more sophisticated understanding:\n\n- **Job transformation, not elimination**: Most roles are being augmented, not replaced. A radiologist with AI reads scans faster and more accurately. A lawyer with AI researches cases in minutes, not days.\n- **New job categories emerging**: AI trainers, prompt engineers, AI ethics officers, human-AI interaction designers — roles that didn't exist five years ago are now in high demand.\n- **Scientific acceleration**: AI is helping scientists discover new materials, design drugs, model climate systems, and decode ancient languages at unprecedented speed. The 2025 Nobel Prizes in both Chemistry and Physics were awarded to AI-assisted research — a trend that will only accelerate.\n- **Education revolution**: Personalized AI tutors are making quality education accessible to millions who previously had no access to expert instruction.\n\n## Major Challenges: The Shadow Side\n\nFor all its promise, AI in 2026 faces serious challenges that cannot be ignored:\n\n### Ethics and Bias\nAI systems inherit the biases present in their training data. Without careful oversight, they can perpetuate and amplify discrimination in hiring, lending, criminal justice, and healthcare.\n\n### Safety and Alignment\nAs AI systems become more autonomous, ensuring they remain aligned with human values becomes critical. The alignment problem — making sure AI does what we actually want, not just what we literally ask — is one of the deepest challenges in computer science.\n\n### Governance and Regulation\nGovernments worldwide are scrambling to create regulatory frameworks. The EU AI Act is now in effect, and similar legislation is emerging across Asia and the Americas. But regulation struggles to keep pace with innovation.\n\n### Energy Consumption\nDespite efficiency improvements, the total energy consumption of AI continues to rise as deployment scales. Balancing AI's benefits against its environmental cost remains an urgent priority.\n\n### Deepfakes and Misinformation\nAI-generated content is becoming indistinguishable from human-created content, raising profound questions about truth, trust, and the integrity of information in democratic societies.\n\n## The Saagar Verdict: Exploring the Universe of Intelligence\n\nAt The Saagar, we believe that artificial intelligence is humanity's telescope pointed inward — a tool for exploring not the cosmos above, but the universe of intelligence itself.\n\nJust as the James Webb Space Telescope reveals galaxies that formed in the cosmic dawn, AI is revealing the architecture of thought, creativity, and reasoning that makes us human. And just as space exploration humbles us with the vastness of what we don't know, AI reminds us that intelligence — natural or artificial — is far more mysterious than we ever imagined.\n\n2026 is not the year AI "arrives." It arrived years ago. This is the year we begin to grapple, truly and honestly, with what it means to share our world with minds that are not human but are undeniably intelligent.\n\nThe ocean of artificial intelligence is vast, deep, and largely uncharted. We are only wading in the shallows.\n\n*The future is not something that happens to us. It is something we explore — with curiosity, with courage, and with the humility to know that the deepest waters are still ahead.*`,
      hi: `## परिचय: दहलीज पर खड़े होकर\n\nहम मानव इतिहास के एक अनोखे क्षण पर खड़े हैं। कृत्रिम बुद्धिमत्ता — जो कभी विश्वविद्यालय की प्रयोगशालाओं और विज्ञान कथाओं में एक दूर का सपना था — हमारे युग की परिभाषित शक्ति बन गई है। 2026 की शुरुआत तक, AI अब केवल एक उपकरण नहीं है; यह वह अदृश्य वास्तुकला है जो हमारे काम करने, खोजने, बनाने और यहां तक कि सोचने के तरीके को आकार दे रही है।\n\n## एजेंटिक AI और मल्टी-एजेंट सिस्टम का उदय\n\n2026 का सबसे परिवर्तनकारी विकास **एजेंटिक AI** का उदय है — ऐसे सिस्टम जो केवल प्रॉम्प्ट्स का जवाब नहीं देते बल्कि स्वायत्त रूप से जटिल कार्यों की योजना बनाते हैं, निष्पादित करते हैं और परिष्कृत करते हैं।\n\nGartner के अनुसार, 2026 के अंत तक **40% एंटरप्राइज़ एप्लिकेशन** एजेंटिक AI क्षमताओं को शामिल करेंगे। ये डिजिटल कर्मचारी हैं जो इंटरनेट ब्राउज़ कर सकते हैं, कोड लिख सकते हैं, और पूरी परियोजनाओं का प्रबंधन कर सकते हैं।\n\n## मल्टीमोडल AI: मानव जैसी बनती हुई\n\n2026 में AI केवल टेक्स्ट नहीं पढ़ती। यह **देखती**, **सुनती**, **बोलती** है, और तेजी से मानवों की तरह **संदर्भ समझती** है। एक ही मॉडल टेक्स्ट, इमेज, ऑडियो, वीडियो और 3D वातावरण में एक साथ काम कर सकता है।\n\n## फिजिकल AI और रोबोटिक्स: बुद्धिमत्ता को शरीर मिला\n\nदशकों तक AI केवल डिजिटल दुनिया में मौजूद थी। 2026 वह वर्ष है जब AI भौतिक दुनिया में कदम रखती है। सहयोगी रोबोट (cobots) अब गोदामों, अस्पतालों, कृषि और निर्माण स्थलों पर मनुष्यों के साथ काम कर रहे हैं।\n\n## स्केल से दक्षता की ओर: ग्रीन AI\n\nAI उद्योग एक दार्शनिक बदलाव से गुजर रहा है। "बड़ा हमेशा बेहतर है" का युग एक नए मंत्र को रास्ता दे रहा है: **स्केल पर दक्षता**।\n\n## नौकरियों, समाज और वैज्ञानिक खोज पर प्रभाव\n\nAI का सामाजिक प्रभाव जटिल है। अधिकांश भूमिकाएं प्रतिस्थापित नहीं बल्कि संवर्धित हो रही हैं। नई नौकरी श्रेणियां उभर रही हैं। AI वैज्ञानिकों को नई सामग्री खोजने, दवाएं डिजाइन करने और जलवायु प्रणालियों को मॉडल करने में मदद कर रहा है।\n\n## द सागर का फैसला\n\nद सागर में, हम मानते हैं कि कृत्रिम बुद्धिमत्ता मानवता की अंदर की ओर इशारा करने वाली दूरबीन है। जैसे जेम्स वेब टेलीस्कोप ब्रह्मांडीय भोर में बनी आकाशगंगाओं को प्रकट करता है, AI विचार, रचनात्मकता और तर्क की वास्तुकला को प्रकट कर रही है।\n\n*भविष्य वह नहीं है जो हमारे साथ होता है। यह वह है जिसे हम खोजते हैं — जिज्ञासा के साथ, साहस के साथ, और यह जानने की विनम्रता के साथ कि सबसे गहरे पानी अभी आगे हैं।*`
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
    id: "the-big-bang",
    slug: "the-big-bang",
    title: {
      en: "The Big Bang: How the Universe Began 13.8 Billion Years Ago",
      hi: "बिग बैंग: 13.8 अरब साल पहले ब्रह्मांड की शुरुआत कैसे हुई"
    },
    excerpt: {
      en: "13.8 billion years ago the universe began with a massive explosion that created hydrogen and helium - the first building blocks of everything we see today.",
      hi: "13.8 अरब साल पहले ब्रह्मांड की शुरुआत एक बड़े विस्फोट से हुई जिसमें हाइड्रोजन और हीलियम बने — ब्रह्मांड के पहले तत्व।"
    },
    content: {
      en: `# The Big Bang: How the Universe Began 13.8 Billion Years Ago

<img src="/big-bang-hero.jpg" alt="Big Bang Explosion" style="width:100%; border-radius:12px; margin:25px 0;">

Imagine a time when there was no space, no time, no stars, and no planets. Everything that exists today — from the smallest atom to the largest galaxy — was once squeezed into an infinitely hot, infinitely dense point. Then, 13.8 billion years ago, that point exploded in the biggest event in cosmic history: the Big Bang.

This is not just a story from ancient myths. It is the most successful scientific theory we have about the origin of our universe. In this article, we will journey step by step from that first moment to the birth of the very first elements — hydrogen and helium.

### What Exactly Is the Big Bang Theory?

The Big Bang theory tells us that the universe began as an extremely hot and dense state and has been expanding and cooling ever since. It was first proposed by Belgian priest and physicist Georges Lemaître in 1927. Later, Edwin Hubble’s discovery that galaxies are moving away from us gave strong evidence that the universe is expanding.

The theory does not say something exploded into empty space. Instead, space itself began expanding from that tiny point.

### The First Instant: Cosmic Inflation

At the very beginning, the universe was a singularity. In the first tiny fraction of a second, cosmic inflation happened. The universe expanded extremely fast — from smaller than a proton to the size of a grapefruit in less than 10⁻³² seconds.

After inflation, the universe was still incredibly hot and filled with energy.

### Quark-Gluon Plasma

In the first microsecond, there was a hot soup of quarks and gluons. As the universe cooled, quarks joined together to form the first protons and neutrons.

### Big Bang Nucleosynthesis: Birth of Hydrogen and Helium

Between 10 seconds and 3 minutes after the Big Bang, nuclear fusion started. This short period is called Big Bang Nucleosynthesis.

- About 75% of all normal matter became **Hydrogen** (single proton).  
- About 25% became **Helium** (two protons + two neutrons).  

This was the only time in history when elements were created without stars. All the hydrogen and most of the helium we see today were born in these first three minutes.

<img src="/cmb-map.jpg" alt="Cosmic Microwave Background" style="width:100%; border-radius:12px; margin:25px 0;">

### 380,000 Years Later: Cosmic Microwave Background

For the next 380,000 years the universe was a hot plasma. Then electrons joined with protons to form the first neutral atoms. Light could finally travel freely.

The light from this time is still reaching us today as the Cosmic Microwave Background — the oldest light in the universe and one of the strongest evidences for the Big Bang theory.

### Strong Evidence for the Big Bang

Scientists have collected rock-solid proof:
1. Galaxies are moving away from us (Hubble’s law).
2. The Cosmic Microwave Background matches predictions perfectly.
3. The exact ratio of hydrogen (75%) and helium (25%) matches Big Bang calculations.

No other theory explains all these observations so beautifully.

<img src="/early-galaxies.jpg" alt="Early Galaxies" style="width:100%; border-radius:12px; margin:25px 0;">

### Why This Matters for Our 118 Elements Series

The Big Bang is the beginning of the story of every single element we will cover in this series on The Saagar. Without that first explosion and those first three minutes of fusion, there would be no hydrogen to fuel the first stars, no helium to help form galaxies, and no building blocks for everything else that came later.

Every atom in your body, in the air you breathe, and in the stars above was born either in the Big Bang or inside stars that came much later.

<img src="/milky-way.jpg" alt="Milky Way Galaxy" style="width:100%; border-radius:12px; margin:25px 0;">

### What’s Next on The Saagar?

In the next article of our journey, we will zoom in on the very first and most important element born in the Big Bang: **Hydrogen – The First and Most Abundant Element in the Universe**. We will explore how this simple atom powered the first stars, created the first heavy elements, and eventually made life on Earth possible.

Stay tuned — the story of the 118 elements has only just begun!`,
      hi: `# बिग बैंग: 13.8 अरब साल पहले ब्रह्मांड की शुरुआत कैसे हुई

<img src="/big-bang-hero.jpg" alt="बिग बैंग विस्फोट" style="width:100%; border-radius:12px; margin:25px 0;">

कल्पना कीजिए एक ऐसे समय की जब न स्पेस था, न समय था, न तारे थे और न ग्रह। आज जो कुछ भी अस्तित्व में है — सबसे छोटे परमाणु से लेकर सबसे बड़ी गैलेक्सी तक — सब कुछ एक बार अनंत गर्म और घने बिंदु में समाया हुआ था। फिर 13.8 अरब साल पहले उस बिंदु में ब्रह्मांड का सबसे बड़ा विस्फोट हुआ — **बिग बैंग**।

यह कोई पुरानी कहानी नहीं है। यह हमारे ब्रह्मांड की उत्पत्ति का सबसे सफल वैज्ञानिक सिद्धांत है। इस लेख में हम उस पहले पल से लेकर हाइड्रोजन और हीलियम के जन्म तक की पूरी यात्रा करेंगे।

### बिग बैंग सिद्धांत क्या है?

बिग बैंग सिद्धांत कहता है कि ब्रह्मांड बेहद गर्म और घनी अवस्था से शुरू हुआ और तब से लगातार फैल रहा है तथा ठंडा हो रहा है। यह सिद्धांत 1927 में जॉर्जेस लेमेत्रे नामक वैज्ञानिक और पुजारी ने दिया था।

### पहले पल — कॉस्मिक इन्फ्लेशन

ब्रह्मांड की शुरुआत में एक बहुत छोटा सा बिंदु था, जिसे सिंगुलैरिटी कहते हैं। पहले अंश सेकंड में **कॉस्मिक इन्फ्लेशन** हुआ। ब्रह्मांड ने इतनी तेजी से फैलाव किया कि प्रकाश की गति से भी ज्यादा तेज हो गया।

### क्वार्क-ग्लूऑन प्लाज्मा

पहले माइक्रोसेकंड में ब्रह्मांड इतना गर्म था कि प्रोटॉन और न्यूट्रॉन भी नहीं बन पाए थे। वहाँ सिर्फ क्वार्क और ग्लूऑन का गर्म सूप था। जैसे-जैसे ब्रह्मांड ठंडा हुआ, क्वार्क मिलकर पहले प्रोटॉन और न्यूट्रॉन बने।

### बिग बैंग न्यूक्लियोसिंथेसिस — हाइड्रोजन और हीलियम का जन्म

बिग बैंग के 10 सेकंड से 3 मिनट के बीच एक बहुत महत्वपूर्ण प्रक्रिया हुई — **न्यूक्लियर फ्यूजन**।

इस छोटे से समय में:
- **75% हाइड्रोजन** (सिर्फ एक प्रोटॉन)
- **25% हीलियम** (दो प्रोटॉन + दो न्यूट्रॉन)

बना। यह ब्रह्मांड के इतिहास में唯一 समय था जब बिना तारों के तत्व बने। आज भी ये दोनों तत्व ब्रह्मांड में सबसे ज्यादा हैं।

<img src="/cmb-map.jpg" alt="कॉस्मिक माइक्रोवेव बैकग्राउंड" style="width:100%; border-radius:12px; margin:25px 0;">

### 3,80,000 साल बाद — ब्रह्मांड पारदर्शी हो गया

3,80,000 साल तक ब्रह्मांड गर्म प्लाज्मा था। फिर जब तापमान काफी गिर गया, इलेक्ट्रॉन प्रोटॉन से जुड़कर पहले परमाणु बने। प्रकाश स्वतंत्र रूप से यात्रा करने लगा।

उसी समय का प्रकाश आज भी हमें **कॉस्मिक माइक्रोवेव बैकग्राउंड** के रूप में मिल रहा है — ब्रह्मांड का सबसे पुराना प्रकाश।

<img src="/early-galaxies.jpg" alt="प्राचीन गैलेक्सी" style="width:100%; border-radius:12px; margin:25px 0;">

### बिग बैंग के मजबूत सबूत

1. आकाशगंगाएँ हमसे दूर जा रही हैं (हबल का नियम)।
2. कॉस्मिक माइक्रोवेव बैकग्राउंड विकिरण बिल्कुल सही भविष्यवाणी से मेल खाता है।
3. हाइड्रोजन (75%) और हीलियम (25%) का सही अनुपात बिग बैंग की गणना से मेल खाता है।

### यह हमारी 118 तत्वों की श्रृंखला के लिए क्यों महत्वपूर्ण है?

बिग बैंग ने हमें पहली ईंटें दीं — हाइड्रोजन और हीलियम। इनके बिना तारे नहीं बन सकते थे, न भारी तत्व और न जीवन।

आपके शरीर का हर परमाणु या तो बिग बैंग से आया है या बाद में बने तारों के अंदर बना है।

<img src="/milky-way.jpg" alt="आकाशगंगा" style="width:100%; border-radius:12px; margin:25px 0;">

### अगला लेख

अगले लेख में हम **हाइड्रोजन** पर बात करेंगे — ब्रह्मांड का सबसे पहला और सबसे प्रचुर तत्व। यह कैसे पहले तारों को जलाया और बाकी सब कुछ संभव बनाया।

बने रहिए — 118 तत्वों की यात्रा अभी शुरू हुई है!`
    },
    image: "/big-bang-hero.jpg",
    category: "space",
    author: "Sahjad",
    date: "2026-04-02",
    readTime: 15,
    featured: true
  }
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
