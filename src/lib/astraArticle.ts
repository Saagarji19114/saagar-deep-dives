import type { Article } from "./articles";
import hero from "@/assets/astra-hero.jpg";
import everyday from "@/assets/ai-2020.jpg";
import generative from "@/assets/ai-2023.jpg";
import agents from "@/assets/ai-agents.jpg";
import security from "@/assets/ai-security.jpg";
import php from "@/assets/ai-php.jpg";
import building from "@/assets/ai-building.jpg";
import verification from "@/assets/ai-verification.jpg";
import future from "@/assets/ai-future.jpg";

export const astraSources = {
  announcement: "https://openai.com/index/gpt-6-astra/",
  safety: "https://openai.com/index/safety-overview-gpt-6-astra/",
  chatgpt: "https://openai.com/index/chatgpt/",
  php: "https://www.php.net/archive/2026.php#2026-10-21-5",
  wiz: "https://www.wiz.io/blog/php2shell-php-rce",
  google: "https://cloud.google.com/blog/products/identity-security/responding-to-core-php-vulnerabilities-cve-2026-109618-cve-2026-109619",
};
const s = astraSources;

const en = `## Imagine bringing 2026 back to 2020

Imagine sitting beside an ordinary computer user in 2020. You show them an AI system that works through a difficult coding task, opens supported computer tools, reads technical documents, tests its changes and helps security researchers investigate subtle software weaknesses. Then you explain that this is not a carefully scripted film. These are the kinds of workflows described in the documentation for GPT-6 Astra.

Their surprise would not mean that every ingredient was impossible in 2020. Researchers had already built remarkable specialized systems. The startling change is the combination: a conversational interface connected to reasoning, software and tools, increasingly accessible to people who are not AI researchers.

That transformation deserves wonder, but not surrender to advertising. As of October 26, 2026, OpenAI’s published material documents Astra’s strengths and serious safety concerns. In this story, manufacturer-reported evaluations are identified as such; practical examples illustrate possible uses, not promises that every customer receives identical tools or results. [OpenAI announcement](${s.announcement}) · [Safety overview, September 3, 2026](${s.safety})

## 2020: intelligence was already around us

In 2020, AI often worked behind the curtain. A voice assistant set a timer. A streaming service suggested a film. Translation software bridged a language barrier. A phone recognized a face, and a customer-service bot routed an enquiry. Specialized machine-learning systems supported tasks such as image classification and fraud detection.

None of this came from nowhere. AI research had a history stretching back decades. Machine learning means learning useful patterns from examples rather than receiving a hand-written rule for every situation. Some systems were impressive within a narrow task and awkward outside it.

For ordinary people, the constraint was often access. You generally used an application’s predefined functions; you did not routinely hold an open-ended conversation with a general-purpose assistant about a business problem, then ask it to help implement the solution. Sophisticated research and commercial systems existed, but capability in a laboratory and convenient access on a family laptop were different things.

![A family using a computer, tablet and voice assistant at home](${everyday})
*Original AI-generated editorial illustration: familiar, mostly specialized AI in everyday life around 2020; not a historical photograph.*

## 2023: the computer began accepting ordinary language

ChatGPT’s public launch on November 30, 2022 helped make conversational generative AI a mainstream experience in 2023. Its initial research release invited people to try a system that responded in dialogue, while openly acknowledging limitations. [Original ChatGPT announcement](${s.chatgpt})

Generative AI produces new text, images or other outputs from learned patterns. People experimented with explanations, summaries, draft letters, brainstorming and coding assistance; image-generation tools expanded the creative possibilities. Adoption was not uniform, and different products offered different capabilities. Nevertheless, the change in interface was profound.

A shopkeeper could describe an inventory problem without first learning a programming language. A student could ask for another explanation when the first made no sense. A programmer could request a sketch of a solution. Natural language became a doorway, not a guarantee of correctness.

The excitement sometimes obscured a crucial distinction: a convincing answer is not the same as completed work. An AI could describe how to build a website while leaving the actual files, testing and deployment to somebody else. The next transition would connect that conversation to action.

![Two people exploring conversational and creative AI on a laptop](${generative})
*Original AI-generated editorial illustration: the generative-AI transition; interface elements are conceptual, not product screenshots.*

## From an answer to a working attendance application

Consider a contractor who wants an attendance application for several construction sites. Workers need daily entries, supervisors need corrections, and the owner needs an accurate monthly report. The problem sounds simple until a duplicate entry changes somebody’s pay.

A traditional chatbot might explain the database fields and suggest a design. A coding assistant might generate the forms, validation logic and report queries. A tool-enabled agent can potentially inspect an existing project, modify files, run tests, read an error, change its approach and test again. It may then prepare deployment instructions or perform an authorized deployment if the environment allows it.

An agent is therefore not a magic title for a clever chatbot. It is a model operating inside a system that supplies tools, observations and rules. No terminal access means no local test execution. No permission to publish means no publishing. A successful demonstration in one environment does not establish universal access to everyone’s computer.

The contractor still sets the requirements: who may edit attendance, how corrections are recorded and which pay rules apply. AI can assist with implementing those decisions; it should not invent the policy or quietly alter live payroll records.

![Connected conversation, software-development and testing workstations](${agents})
*Original AI-generated editorial illustration: conversation, code and verification connected into a workflow.*

## GPT-6 Astra: why this model is the turning point

OpenAI’s safety overview dated September 3, 2026 describes Astra as a broadly deployed model and its first at the Critical cybersecurity capability level. The announcement covers computer use, browsing, software engineering, scientific work and professional documents. Its subsequent September updates mention other GPT-6-family models; Astra is the focus here, not a claim that it remains the newest release. [Safety overview](${s.safety}) · [Announcement and updates](${s.announcement})

The important development is how these abilities can reinforce one another. A system that reasons about a problem but cannot inspect the evidence stops early. A system that clicks quickly but misunderstands the goal creates trouble faster. Astra’s documented approach brings reasoning and computer interaction into longer workflows.

### Reasoning: keeping the whole problem in view

Complex reasoning means working through constraints, alternatives and intermediate results rather than merely producing a plausible final sentence. For a construction manager, it might mean comparing two schedules when equipment, crews and delivery dates interact. For a teacher, it might mean diagnosing why a student’s mathematical argument goes wrong and explaining a different route.

OpenAI reports 98% on FrontierMath Tier 4 and 99.9% on ARC-AGI-3. These are task-specific evaluation results under particular conditions, not percentages of all human problems solved. A benchmark can show meaningful progress without proving general infallibility or achieved AGI. [Reported reasoning evaluations](${s.announcement})

The limitation remains practical: a plan built on an incorrect delivery date is still wrong. Ask for explicit assumptions, check decisive arithmetic and compare the proposal with real constraints. A fluent explanation must not become a substitute for evidence.

### Software engineering: working beyond a code snippet

Complex software engineering involves understanding how files, interfaces, data and tests fit together. OpenAI describes Astra creating websites, running frontend checks, installing and testing software, and troubleshooting on-screen problems. These are more substantial activities than supplying an isolated function. [Documented coding and computer-use examples](${s.announcement})

In the attendance example, an authorized workflow might trace a report error to a query, add a regression test, change the query and show the corrected report. On a website, it might investigate a broken image instead of simply proposing a different design.

But a model can still misunderstand existing behavior or introduce another bug. Passing tests establish only what those tests cover. A professional must review changes, scrutinize access controls and confirm that the application works with realistic data before relying on it.

### Computer use and browsing: recommendations become actions

Computer use means interacting with supported software interfaces, sometimes through screen observations and mouse or keyboard actions. Browsing means gathering information from web pages, with suitable tools. OpenAI describes research, online forms, customer-record updates and calendar organization among Astra’s possible workflows. [Computer-use documentation](${s.announcement})

For a small business, this could help compare supplier specifications and prepare a sourced purchasing summary. It does not automatically authorize placing an order. For a researcher, it could help navigate specialized software and inspect a plot. It does not confer access to a restricted laboratory account.

Pages can be outdated or malicious. A prompt injection is content that tries to trick an agent into treating a page’s instructions as higher authority than the user’s task. OpenAI reports improved robustness, not elimination of the problem. Keep access limited and require approval for consequential actions. [Browsing and workplace safety](${s.safety})

### Science and mathematics: accelerating the work around discovery

Scientific research involves far more than a brilliant hypothesis. Researchers inspect data, run simulations, fit models, check calculations and compare results. OpenAI describes Astra combining scientific reasoning with computer use, including inspection of sequencing quality and genetic variation in specialized software. [Scientific-work examples](${s.announcement})

The announcement reports 64.6% on Terminal-Bench Science 0.1, an evaluation of scientific workflows using code and terminal tools. That is evidence about specified evaluated tasks, not a promise that Astra can complete every research project. It also describes contributions to mathematical results; any claimed theorem still requires its proof to withstand expert scrutiny.

A student might use such assistance to understand a mathematical step. A scientist might investigate why a simulation behaves unexpectedly. Neither should confuse a suggested explanation with a validated experiment, clinical advice or an independently checked proof.

### Large documents and codebases: remembering what matters

A large codebase resembles a city: one changed junction can affect traffic far away. Understanding it requires locating relevant files and preserving earlier decisions. OpenAI describes an experimental Codex feature for Astra that keeps notes across context windows and searches earlier messages and tool outputs. [Codebase and context-workflow description](${s.announcement})

A context window is the material available to a model at one time. Searching earlier work can help recover requirements or test results that a short summary omitted. For long engineering reports, useful assistance means connecting the relevant evidence, not just compressing everything into a confident paragraph.

This is not unlimited perfect memory. Retrieval can miss important details, scanned documents can be misread, and access depends on the connected system. Sensitive contracts and employee records should be shared only within approved privacy arrangements.

### Spreadsheets, reports and presentations: finishing the handoff

OpenAI describes Astra producing documents, spreadsheets, analyses and presentations that follow existing templates. The everyday significance is a more coherent handoff: data cleaning, calculations, charts and a written explanation can become stages of one supervised task. [Professional-work examples](${s.announcement})

A business owner might turn sales records into a monthly dashboard and an accompanying report. A construction manager might assemble progress summaries from supplied site records. An educator might prepare teaching materials in an agreed format.

A polished presentation can hide an incorrect denominator. A spreadsheet can contain a formula that breaks when another row is added. Validate source data, units, formulas and exported files. Astra can coordinate stages, but the human owner remains responsible for deciding whether the result is fit for use.

![Researchers examining code beside a conceptual building with a hidden weak point](${security})
*Original AI-generated editorial illustration: software weaknesses compared with hidden structural faults; not evidence of a real incident.*

## Why Astra’s cybersecurity capability matters

Imagine a building with a weakness concealed behind its walls. A vulnerability is a weakness in software that may allow an attacker to cause an unintended result. Finding a suspicious crack is discovery; showing, under controlled conditions, that it compromises the structure is validation. A proof of exploitation is more than an alarming code comment or a crash.

OpenAI states that Astra meets its Preparedness Framework’s Critical cybersecurity threshold: with suitable tools and access, it can find previously unknown flaws and develop ways to exploit them across many well-protected systems without a person guiding each step. This is an attributed capability assessment, not permission to attack arbitrary systems. [Official Critical-threshold explanation](${s.safety})

The announcement reports 100% on ExploitBench, which evaluates turning known vulnerabilities into working exploits, and describes additional assessments involving unknown vulnerabilities. These evaluations were performed without production safeguards. The launching version described in the announcement supports tasks such as secure code review and patching while refusing more advanced exploit-creation tasks; controlled defensive access is described separately through Daybreak. Product safeguards and access can change, so the cited release description should not be mistaken for a universal current entitlement. [Cybersecurity evaluations and deployment restrictions](${s.announcement})

For defenders, faster investigation can shorten the interval between a hidden flaw and a repaired system. For attackers, similar reasoning could magnify harm. Responsible disclosure means reporting privately to maintainers, coordinating a fix and sharing enough information for users to protect themselves. Patching is the repair, and verifying the repair matters as much as discovering the fault.

## PHP: a real warning, with the right attribution

PHP is a server-side programming language used by many websites and content-management systems. A flaw in that shared foundation can affect more than one application. On October 21, 2026, PHP announced fixes for CVE-2026-109618, involving out-of-memory corruption, and CVE-2026-109619, involving stale internal state. Its advisory warns that these weaknesses can allow unauthenticated remote code execution. That means a possible route to running attacker-chosen code without first logging in—not proof that every installation was compromised. [Official PHP advisory](${s.php})

Google Cloud’s incident report describes affected releases from PHP 5.4 through 8.5.11. PHP’s official repaired releases are 8.5.12, 8.4.27, 8.3.36 and 8.2.35. Administrators must match their branch and vendor package to the advisory rather than compare version strings casually. PHP also points to vendor backports and exceptional minimal source backports for some obsolete branches; these do not restore normal support. [Affected versions](${s.google}) · [Authoritative update guidance](${s.php})

Wiz’s researchers—Sagi Tzadik, Shir Tamari, Nir Ohfeld and Tomer Schwartz—credit Wiz Atlas, Gemini 4 Argon and GPT-5.6 Sol. Their timeline begins with discovery on August 19, reporting to PHP on August 24, and coordinated patches and disclosure on October 21. Astra is not credited with this discovery. [Researchers’ account and timeline](${s.wiz})

PHP’s October 23 follow-up additionally discusses an unusual session-upload-progress configuration and planned CVE-2026-115560 advisory. This is a distinct follow-up, not evidence that the original two fixes never existed. Operators should read the latest guidance, not stop at a headline. [PHP follow-up](${s.php})

![An engineer maintaining server infrastructure with a laptop](${php})
*Original AI-generated editorial illustration: patching shared infrastructure; not a photograph of the PHP discovery or an attack.*

## What can AI actually build for people?

A website, project dashboard or attendance system is not one task. It is a chain of requirements, design, implementation, testing, release and maintenance. With appropriate access, an agent can help clarify needs, modify code, run checks, investigate failures and prepare the next stage.

For the contractor, a meaningful demonstration uses sample attendance entries, checks duplicate handling and reads the monthly total back through the application. For an engineering report, it compares measurements and units against the original records. For a small retailer, it checks that a data-analysis workflow handles missing values rather than quietly treating them as zero.

Production adds obligations: secure logins, reliable databases, backups, privacy protections, recovery procedures and someone accountable for maintenance. A generated interface is not evidence that all of these exist. Costly actions and publication require authorization. The distance between a promising prototype and a dependable service can shrink, but it does not disappear.

![A construction manager and developer checking an attendance dashboard](${building})
*Original AI-generated editorial illustration: an attendance application under human review; not a genuine Astra output.*

## What Astra still cannot guarantee

Hallucination means producing an unsupported or incorrect answer as if it were true. Coding mistakes, outdated information and overlooked details remain possible even when overall performance improves. Tools can fail, permissions can block work, and data can be incomplete.

OpenAI’s safety overview also reports reduced monitorability of Astra’s written reasoning in adversarial tests. Better alignment and stronger safeguards therefore coexist with unresolved risks. A record of good behavior in an evaluation is not a guarantee about every future situation. [Documented limitations and monitoring concerns](${s.safety})

The practical response is layered verification: require evidence near important claims, inspect changes, exercise realistic tests and retain human judgment. A teacher verifies a worked solution; an engineer checks a calculation; a security team validates findings in an authorized environment. Trust should grow from demonstrated reliability, not from a model’s confident voice.

![A scientist comparing an AI-assisted chart with original records](${verification})
*Original AI-generated editorial illustration: verification against original evidence remains essential.*

## The next five years: possibilities, not promises

Personal agents might become better at coordinating appointments and paperwork. Programming assistants might carry more changes from specification through verified testing. Scientific tools might speed up hypothesis exploration, while education systems might offer more useful individual feedback.

Robotics could connect some digital planning to physical work, but a robot handling a real object faces hazards that a text answer does not. Cybersecurity could become a faster contest between discovery and repair. Small businesses could automate more administrative steps if the systems are affordable and dependable.

These are possibilities, not a guaranteed schedule. Progress depends on computing resources, energy, cost, safety, regulation and adoption. Reliability on long tasks matters as much as dazzling short demonstrations. Societies must also decide how to protect workers, distribute benefits and preserve accountability. Benchmark scores alone do not establish AGI.

![People from several professions collaborating around a conceptual AI-assisted workspace](${future})
*Original AI-generated editorial illustration of a possible future; not a prediction or a photograph of existing technology.*

## The extraordinary change—and our responsibility

In 2020, much everyday AI was specialized and largely invisible. In 2023, a conversation opened new doors. In 2026, Astra’s documentation shows why connecting reasoning to tools can make the next doorway feel dramatically larger.

The most important story is not that a machine can sound intelligent. It is that assistance can reach deeper into the work between a question and a checked result. That can widen opportunity, accelerate research and also magnify mistakes or misuse.

The future will not be settled by a benchmark or a product name. It will be shaped by human choices about access, safety and evidence. We should ask not only what AI can do today, but how quickly its abilities may change—and whether we are preparing thoughtfully for that change.

Continue exploring: [CRISPR gene editing](/article/crispr-gene-editing-explained) · [Quantum computing](/article/quantum-computing-breakthrough).
`;

const hi = `## कल्पना कीजिए: 2020 के सामने 2026 आ जाए

कल्पना कीजिए कि आप 2020 में किसी सामान्य कंप्यूटर उपयोगकर्ता के पास बैठे हैं। उसके सामने ऐसी कृत्रिम बुद्धिमत्ता रख दी जाती है जो कठिन प्रोग्रामिंग समस्या पर काम करती है, उपलब्ध कंप्यूटर उपकरण खोलती है, तकनीकी दस्तावेज पढ़ती है, अपने बदलावों की जांच करती है और सुरक्षा शोधकर्ताओं को सॉफ्टवेयर की छिपी कमजोरियां समझने में मदद देती है। फिर आप बताते हैं कि यह पहले से तैयार फिल्म नहीं, बल्कि GPT-6 Astra के दस्तावेजों में वर्णित कामों जैसी एक प्रक्रिया है।

उस व्यक्ति की हैरानी का मतलब यह नहीं होगा कि 2020 में इन सभी कामों की हर छोटी क्षमता असंभव थी। प्रयोगशालाओं और विशेष उद्योगों में शक्तिशाली प्रणालियां पहले से मौजूद थीं। आश्चर्य इस बात पर होगा कि बातचीत, तर्क, कंप्यूटर और काम करने वाले उपकरण अब एक ही प्रक्रिया में जुड़ रहे हैं। जो सुविधा पहले विशेषज्ञों तक सीमित लगती थी, वह सामान्य व्यक्ति की जरूरतों के करीब आ रही है।

लेकिन अच्छी विज्ञान पत्रकारिता विस्मय और विज्ञापन के बीच अंतर रखती है। 26 अक्टूबर 2026 तक उपलब्ध OpenAI के दस्तावेज Astra की क्षमताओं के साथ उसकी सीमाएं और सुरक्षा संबंधी चिंताएं भी बताते हैं। इस लेख में कंपनी द्वारा बताए गए परीक्षण परिणामों को उसी रूप में प्रस्तुत किया गया है। रोजमर्रा के उदाहरण संभावित उपयोग समझाते हैं; वे हर उपयोगकर्ता को समान उपकरण और सफलता मिलने का वादा नहीं हैं। [OpenAI की घोषणा](${s.announcement}) · [3 सितंबर 2026 का सुरक्षा विवरण](${s.safety})

## 2020: AI हमारे आसपास था, पर अक्सर पर्दे के पीछे

2020 में कृत्रिम बुद्धिमत्ता कई घरों में पहले से काम कर रही थी। आवाज से चलने वाला सहायक अलार्म लगा देता था। वीडियो सेवा अगली फिल्म सुझाती थी। अनुवाद प्रणाली दूसरे देश की भाषा समझने में मदद करती थी। फोन चेहरे को पहचानता था और ग्राहक सेवा का स्वचालित संवाद सही विभाग तक पहुंचाता था। तस्वीरों का वर्गीकरण और धोखाधड़ी पहचानने जैसी विशेष प्रक्रियाओं में मशीन लर्निंग इस्तेमाल होती थी।

मशीन लर्निंग का सरल अर्थ है उदाहरणों से उपयोगी पैटर्न सीखना, बजाय हर परिस्थिति के लिए अलग नियम लिखने के। यह किसी प्रशिक्षु को हजारों उदाहरण दिखाकर पहचान सिखाने जैसा है, हालांकि मशीन का सीखना मनुष्य के अनुभव के बराबर नहीं होता। किसी एक काम में प्रभावशाली प्रणाली दूसरे काम में बहुत कमजोर हो सकती थी।

AI का शोध दशकों पुराना था। इसलिए इसकी कहानी 2022 से शुरू करना गलत होगा। सामान्य लोगों के लिए बड़ा अंतर पहुंच का था। वे किसी तैयार अनुप्रयोग के तय काम इस्तेमाल करते थे। अपनी दुकान की उलझन समझाकर सामान्य उद्देश्य वाले सहायक से खुली बातचीत करना, फिर उसी से समाधान बनवाने में मदद लेना, रोजमर्रा की आम सुविधा नहीं थी। प्रयोगशाला में उपलब्ध शक्ति और परिवार के लैपटॉप पर सुविधाजनक पहुंच दो अलग बातें थीं।

![घर में कंप्यूटर, टैबलेट और आवाज वाले सहायक का इस्तेमाल करता परिवार](${everyday})
*मूल AI-निर्मित संपादकीय चित्र: 2020 के आसपास रोजमर्रा की विशेष AI सुविधाओं की कल्पना; यह ऐतिहासिक फोटो नहीं है।*

## 2023: जब सामान्य भाषा कंप्यूटर का नया दरवाजा बनी

ChatGPT का सार्वजनिक परिचय 30 नवंबर 2022 को हुआ। इसके बाद 2023 में बातचीत करने वाली जनरेटिव AI का अनुभव बड़ी संख्या में सामान्य लोगों तक पहुंचा। शुरुआती घोषणा ने संवाद की सुविधा दिखाते हुए उसकी सीमाएं भी स्पष्ट की थीं। [ChatGPT की मूल घोषणा](${s.chatgpt})

जनरेटिव AI सीखे हुए पैटर्न के आधार पर नया पाठ, चित्र या अन्य सामग्री बनाती है। लोगों ने उससे पत्र के मसौदे, कठिन विषयों की व्याख्या, लंबे लेखों के सार, विचारों की सूची और प्रोग्रामिंग सहायता मांगी। चित्र बनाने वाले उपकरणों ने रचनात्मक प्रयोगों का अलग दरवाजा खोला। हर देश, पेशे और व्यक्ति ने इन्हें समान गति से नहीं अपनाया, लेकिन बातचीत का तरीका सचमुच बदल गया।

एक दुकानदार अब अपनी सूची की समस्या हिंदी में समझा सकता था। छात्र कह सकता था कि पहली व्याख्या समझ नहीं आई, इसलिए कोई सरल उदाहरण दिया जाए। प्रोग्रामर किसी समाधान का शुरुआती ढांचा मांग सकता था। सहायता पाने के लिए पहले कंप्यूटर की भाषा सीखना हमेशा जरूरी नहीं रहा। सामान्य भाषा पहुंच का माध्यम बनी, सही परिणाम की गारंटी नहीं।

यहीं उत्साह में एक भ्रम भी पैदा हुआ। अच्छा जवाब मिलना और काम पूरा होना अलग बातें हैं। वेबसाइट बनाने की विधि बताने वाला उत्तर उपयोगी हो सकता है, लेकिन फाइलें बदलना, जांच करना और वेबसाइट चलाना अभी भी बाकी रहता है। अगला परिवर्तन बातचीत को इन वास्तविक चरणों से जोड़ने का था।

![लैपटॉप पर संवाद और चित्र बनाने वाली AI को देखते दो लोग](${generative})
*मूल AI-निर्मित संपादकीय चित्र: जनरेटिव AI से परिचय की कल्पना; दिखाई गई स्क्रीन किसी असली उत्पाद का स्क्रीनशॉट नहीं है।*

## जवाब से काम तक: ठेकेदार की उपस्थिति प्रणाली

मान लीजिए एक ठेकेदार कई निर्माण स्थलों के लिए मजदूरों की उपस्थिति का अनुप्रयोग चाहता है। रोज की उपस्थिति दर्ज हो, पर्यवेक्षक गलती सुधार सके और महीने की रिपोर्ट मालिक को मिल जाए। सुनने में काम आसान है, लेकिन एक ही व्यक्ति की दो बार उपस्थिति दर्ज होने से भुगतान बदल सकता है। सुधार का रिकॉर्ड न रहे तो विवाद भी पैदा हो सकता है।

पारंपरिक चैटबॉट आवश्यक जानकारी और डिजाइन समझा सकता है। प्रोग्रामिंग सहायक फॉर्म, डेटा संरचना और रिपोर्ट का कोड बना सकता है। उपकरणों से जुड़ा AI एजेंट, अनुमति मिलने पर, मौजूदा परियोजना देख सकता है, फाइल बदल सकता है, परीक्षण चला सकता है, गलती का संदेश पढ़ सकता है और दोबारा सुधार कर सकता है। उसके बाद वह जारी करने की तैयारी कर सकता है; वास्तविक जारी करना तभी संभव है जब उपयुक्त सुविधा और अनुमति हो।

एजेंट का अर्थ केवल ज्यादा बुद्धिमान चैटबॉट नहीं है। यह ऐसा मॉडल है जिसके आसपास उपकरण, काम के परिणाम और नियम देने वाली व्यवस्था मौजूद हो। परीक्षण चलाने की सुविधा नहीं है तो वह स्थानीय परीक्षण नहीं चला सकता। प्रकाशित करने की अनुमति नहीं है तो उसे वेबसाइट प्रकाशित नहीं करनी चाहिए। किसी प्रदर्शन में दिखा कंप्यूटर उपयोग हर व्यक्ति के कंप्यूटर पर असीमित पहुंच साबित नहीं करता।

उपस्थिति और भुगतान के नियम मनुष्य तय करेगा। कौन सुधार कर सकता है, किस बदलाव का रिकॉर्ड रखना है और मजदूरी कैसे गिननी है, ये वास्तविक जिम्मेदारियां हैं। AI इन निर्णयों को लागू करने में मदद दे सकता है; उसे चुपचाप नई नीति बनाकर वास्तविक भुगतान बदलना नहीं चाहिए।

![बातचीत, प्रोग्रामिंग और परीक्षण को जोड़ती तीन कार्य स्क्रीन](${agents})
*मूल AI-निर्मित संपादकीय चित्र: सलाह से कोड और सत्यापन तक जुड़ती कार्य प्रक्रिया।*

## GPT-6 Astra: इस कहानी का केंद्रीय मोड़

3 सितंबर 2026 के OpenAI सुरक्षा विवरण में Astra को व्यापक रूप से जारी मॉडल और कंपनी की Critical साइबर क्षमता सीमा तक पहुंचने वाला पहला मॉडल बताया गया है। घोषणा में कंप्यूटर उपयोग, वेब शोध, सॉफ्टवेयर इंजीनियरिंग, वैज्ञानिक काम और पेशेवर दस्तावेज शामिल हैं। सितंबर के बाद के अपडेट दूसरे GPT-6 परिवार के मॉडल भी बताते हैं। यहां Astra मुख्य विषय है; उसे आज का सबसे नया मॉडल बताना जरूरी या उचित नहीं है। [सुरक्षा विवरण](${s.safety}) · [घोषणा और अपडेट](${s.announcement})

महत्व केवल अलग-अलग सुविधाओं में नहीं, उनके जुड़ने में है। समस्या पर अच्छा तर्क देने वाली प्रणाली यदि प्रमाण देख ही नहीं सकती तो बीच में रुक जाएगी। तेजी से क्लिक करने वाली प्रणाली यदि उद्देश्य नहीं समझती तो गलत काम भी तेजी से कर सकती है। Astra की वर्णित दिशा तर्क और कंप्यूटर के कामों को लंबी प्रक्रिया में जोड़ती है। इसे समझने के लिए हर क्षमता का अर्थ, उपयोग और सीमा अलग देखनी होगी।

### तर्क: पूरी समस्या और उसकी शर्तें साथ देखना

जटिल तर्क का मतलब सिर्फ प्रभावशाली अंतिम वाक्य लिखना नहीं है। इसमें शर्तें समझना, विकल्प तुलना करना, बीच के परिणाम जांचना और गलत धारणा पहचानना शामिल है। निर्माण प्रबंधक के लिए यह दो कार्यक्रमों की तुलना हो सकती है, जहां मशीन, मजदूर और सामग्री की उपलब्धता एक-दूसरे को प्रभावित करती हैं। शिक्षक के लिए यह छात्र की गणितीय सोच में गलत मोड़ पहचानकर दूसरा रास्ता समझाना हो सकता है।

OpenAI ने FrontierMath Tier 4 पर 98% और ARC-AGI-3 पर 99.9% परिणाम बताए हैं। ये निश्चित परीक्षण परिस्थितियों के परिणाम हैं, दुनिया की सभी समस्याओं का उतना प्रतिशत हल करने का प्रमाण नहीं। अच्छे परीक्षण महत्वपूर्ण प्रगति दिखा सकते हैं, लेकिन उनसे सर्वज्ञता या AGI प्राप्त होने का निष्कर्ष नहीं निकलता। [कंपनी के बताए तर्क परीक्षण](${s.announcement})

सीमा बहुत साधारण जगह पर भी सामने आ सकती है। सामग्री पहुंचने की तारीख गलत है तो सुंदर कार्यक्रम भी गलत होगा। इसलिए जरूरी धारणाएं स्पष्ट कराएं, निर्णायक गणना जांचें और वास्तविक परिस्थिति से योजना मिलाएं। तर्क की सुगठित भाषा प्रमाण की जगह नहीं ले सकती।

### सॉफ्टवेयर इंजीनियरिंग: एक छोटे कोड से आगे

बड़ा अनुप्रयोग कई फाइलों, डेटा, उपयोगकर्ता स्क्रीन और परीक्षणों का जुड़ा ढांचा होता है। किसी हिस्से में बदलाव दूसरे हिस्से को प्रभावित कर सकता है। OpenAI के उदाहरण Astra द्वारा वेबसाइट बनाना, सामने दिखने वाली सुविधाओं की जांच करना, सॉफ्टवेयर स्थापित करके परीक्षण करना और स्क्रीन पर समस्या समझना वर्णित करते हैं। यह अलग-थलग कोड लिखने से अधिक व्यापक सहायता है। [प्रोग्रामिंग और कंप्यूटर उपयोग के उदाहरण](${s.announcement})

उपस्थिति प्रणाली में एजेंट मासिक रिपोर्ट की गलती को किसी डेटा प्रश्न तक खोज सकता है। फिर वह गलती दोबारा पकड़ने वाला परीक्षण जोड़कर सुधार जांच सकता है। वेबसाइट में टूटी तस्वीर मिलने पर उसे केवल नया डिजाइन सुझाने के बजाय वास्तविक कारण ढूंढना चाहिए। इस तरह काम उत्तर से जांचे हुए बदलाव की दिशा में बढ़ता है।

फिर भी मॉडल मौजूदा व्यवहार गलत समझ सकता है या दूसरी खराबी जोड़ सकता है। सफल परीक्षण केवल उन्हीं स्थितियों के बारे में बताता है जिन्हें जांचा गया है। वास्तविक डेटा, उपयोगकर्ता अधिकार और निजी जानकारी की सुरक्षा की समीक्षा जरूरी है। पेशेवर अनुप्रयोग में जिम्मेदारी को कोड की चमक के पीछे नहीं छिपाया जा सकता।

### कंप्यूटर और ब्राउज़र: सुझाव कब कार्रवाई बनता है?

कंप्यूटर उपयोग का अर्थ उपलब्ध सॉफ्टवेयर से समर्थित तरीके से बातचीत करना है, कभी स्क्रीन देखकर और माउस या कीबोर्ड जैसे काम करके। ब्राउज़र आधारित शोध वेब पन्नों से जानकारी जुटाने में मदद करता है। OpenAI ने ऑनलाइन फॉर्म, ग्राहक रिकॉर्ड, कैलेंडर और शोध जैसे कामों के उदाहरण दिए हैं। [कंप्यूटर उपयोग का विवरण](${s.announcement})

एक छोटे व्यवसाय के लिए यह आपूर्तिकर्ताओं की विशेषताएं तुलना करके स्रोतों सहित खरीद संबंधी रिपोर्ट तैयार करने में मदद हो सकती है। इसका अर्थ अपने आप ऑर्डर देने की अनुमति नहीं है। वैज्ञानिक के लिए यह विशेष सॉफ्टवेयर में डेटा का चित्र देखना हो सकता है। इसका अर्थ प्रतिबंधित खाते तक अपने आप पहुंच मिलना नहीं है।

वेब पन्ने पुराने भी हो सकते हैं और दुर्भावनापूर्ण भी। प्रॉम्प्ट इंजेक्शन ऐसा निर्देश है जो एजेंट को पन्ने की सामग्री को उपयोगकर्ता से अधिक अधिकार वाला आदेश मानने के लिए बहकाता है। OpenAI बेहतर प्रतिरोध बताता है, समस्या समाप्त होने का दावा नहीं। इसलिए पहुंच सीमित हो, महत्वपूर्ण कार्रवाई से पहले स्वीकृति हो और संवेदनशील जानकारी सावधानी से इस्तेमाल की जाए। [ब्राउज़िंग की सुरक्षा](${s.safety})

### विज्ञान और गणित: खोज के आसपास का कठिन काम

वैज्ञानिक शोध केवल नया विचार आने का नाम नहीं है। इसमें डेटा देखना, सिमुलेशन चलाना, मॉडल मिलाना, गणना जांचना और परिणाम तुलना करना शामिल है। OpenAI बताता है कि Astra वैज्ञानिक तर्क को कंप्यूटर उपयोग से जोड़ सकता है। उदाहरणों में विशेष सॉफ्टवेयर में अनुक्रमण की गुणवत्ता और आनुवंशिक विविधता देखना शामिल है। [वैज्ञानिक काम के उदाहरण](${s.announcement})

घोषणा में Terminal-Bench Science 0.1 पर 64.6% परिणाम है। यह कोड और टर्मिनल उपकरणों वाले निश्चित वैज्ञानिक कामों का परीक्षण है, हर शोध परियोजना पूरी करने का आश्वासन नहीं। दस्तावेज गणितीय परिणामों में योगदान भी बताते हैं, लेकिन किसी नए प्रमेय का प्रमाण विशेषज्ञों की जांच सहन करना चाहिए। प्रयोगशाला में सही होना और जवाब में सही लगना अलग बातें हैं।

छात्र किसी गणितीय चरण को समझने के लिए मदद ले सकता है। शोधकर्ता सिमुलेशन के अनपेक्षित व्यवहार का कारण खोज सकता है। मगर सुझाई गई व्याख्या सत्यापित प्रयोग, चिकित्सा सलाह या स्वतंत्र रूप से जांचे हुए प्रमाण के बराबर नहीं है। AI जांच की गति बढ़ा सकता है; वैज्ञानिक विधि को हटाने का अधिकार नहीं देता।

### लंबे दस्तावेज और बड़े कोड: जरूरी बात याद रखना

बड़ा कोड किसी शहर जैसा है। एक चौराहे का बदलाव दूर के रास्ते पर असर डाल सकता है। उपयोगी सहायता के लिए संबंधित फाइल ढूंढना और पहले तय बातों को सुरक्षित रखना जरूरी है। OpenAI ने Codex में Astra के लिए प्रयोगात्मक सुविधा बताई है, जो संदर्भ खिड़कियों के बीच नोट रखती है और पहले के संदेश तथा उपकरण परिणाम खोज सकती है। [संदर्भ और कोड का विवरण](${s.announcement})

संदर्भ खिड़की वह सामग्री है जिसे मॉडल एक समय पर उपलब्ध रूप में देखता है। लंबा काम होने पर पहले की बातें छोटे सार में छूट सकती हैं। पुरानी सामग्री खोजने से कोई आवश्यकता या परीक्षण परिणाम वापस मिल सकता है। लंबे इंजीनियरिंग दस्तावेज में सही सहायता का मतलब जरूरी प्रमाण जोड़ना है, हर पन्ने को आत्मविश्वासी छोटे सार में बदलना नहीं।

यह असीमित और पूरी तरह सही स्मृति नहीं है। खोज महत्वपूर्ण विवरण छोड़ सकती है, स्कैन किया पन्ना गलत पढ़ा जा सकता है और पहुंच उपलब्ध प्रणाली पर निर्भर है। कर्मचारी रिकॉर्ड और निजी अनुबंध केवल स्वीकृत गोपनीयता व्यवस्था में दिए जाएं। सुविधा बढ़ना निजी जानकारी खुली छोड़ने का कारण नहीं होना चाहिए।

### तालिकाएं, रिपोर्ट और प्रस्तुतियां: काम की अंतिम कड़ी

OpenAI दस्तावेज, स्प्रेडशीट, विश्लेषण और प्रस्तुतियां मौजूदा नमूनों के अनुसार तैयार करने की क्षमता बताता है। इसका वास्तविक लाभ यह है कि डेटा साफ करना, गणना, चार्ट और लिखित निष्कर्ष एक निगरानी वाली प्रक्रिया के अलग चरण बन सकते हैं। [पेशेवर काम के उदाहरण](${s.announcement})

दुकानदार महीने की बिक्री से सार और रिपोर्ट बनवा सकता है। निर्माण प्रबंधक उपलब्ध स्थल रिकॉर्ड से प्रगति विवरण तैयार कर सकता है। शिक्षक स्वीकृत ढांचे में अध्ययन सामग्री बना सकता है। उपयोगी समन्वय में मॉडल आवश्यक संदर्भ चुनता है और महत्वपूर्ण जानकारी गायब होने पर पूछता है; उसे निर्णायक बात मन से नहीं भरनी चाहिए।

सुंदर प्रस्तुति गलत प्रतिशत छिपा सकती है। स्प्रेडशीट का सूत्र नई पंक्ति जुड़ते ही टूट सकता है। इसलिए मूल डेटा, इकाइयां, सूत्र और अंतिम फाइल जांचना जरूरी है। Astra कई चरण जोड़ सकता है, लेकिन परिणाम इस्तेमाल करने योग्य है या नहीं, इसका निर्णय मानव मालिक की जिम्मेदारी है।

![कोड जांचते शोधकर्ता और छिपी संरचनात्मक कमजोरी वाली इमारत की कल्पना](${security})
*मूल AI-निर्मित संपादकीय चित्र: सॉफ्टवेयर की कमजोरी को इमारत की छिपी खराबी से समझाती कल्पना; किसी वास्तविक घटना का प्रमाण नहीं।*

## Astra की साइबर क्षमता इतनी महत्वपूर्ण क्यों है?

एक इमारत सोचिए जिसकी दीवारों के पीछे कमजोरी छिपी है। सॉफ्टवेयर की कमजोरी ऐसा दोष है जिससे हमला करने वाला अनचाहा परिणाम पैदा कर सकता है। संदिग्ध दरार ढूंढना खोज है। नियंत्रित परिस्थिति में दिखाना कि उससे सुरक्षा सचमुच टूट सकती है, अलग सत्यापन है। केवल चेतावनी, संदिग्ध कोड या प्रोग्राम का बंद हो जाना सफल शोषण का प्रमाण नहीं है।

OpenAI के अनुसार Astra उसके Preparedness Framework की Critical साइबर सीमा तक पहुंचता है। उचित उपकरण और पहुंच होने पर वह कई अच्छी तरह सुरक्षित प्रणालियों में पहले अज्ञात दोष खोजकर उनके शोषण के तरीके विकसित कर सकता है, बिना हर कदम पर व्यक्ति के मार्गदर्शन के। यह कंपनी का क्षमता मूल्यांकन है, किसी भी मनचाही वेबसाइट पर हमला करने की अनुमति नहीं। [Critical सीमा का आधिकारिक अर्थ](${s.safety})

घोषणा ExploitBench पर 100% परिणाम बताती है। यह ज्ञात कमजोरियों को काम करने वाले शोषण में बदलने का परीक्षण है। अन्य परीक्षण अज्ञात कमजोरियों पर भी चर्चा करते हैं। महत्वपूर्ण बात यह है कि ये परीक्षण उत्पादन सुरक्षा उपायों के बिना किए गए थे। घोषणा में जारी संस्करण सुरक्षित कोड समीक्षा और सुधार जैसे कामों की सहायता करता है, जबकि अधिक उन्नत शोषण बनाने वाले अनुरोधों को अस्वीकार करता है। अलग नियंत्रित रक्षा पहुंच Daybreak के माध्यम से वर्णित है। इसे हर उपयोगकर्ता की आज की असीमित सुविधा नहीं मानना चाहिए। [परीक्षण और जारी संस्करण के प्रतिबंध](${s.announcement})

रक्षकों के लिए तेज खोज किसी छिपे दोष और उसके सुधार के बीच का समय घटा सकती है। वही शक्ति गलत हाथों में नुकसान बढ़ा सकती है। जिम्मेदार खुलासा पहले रखरखाव करने वालों को निजी सूचना देना, सुधार पर समन्वय करना और उपयोगकर्ताओं की सुरक्षा के लिए उचित जानकारी जारी करना है। दोष ढूंढना पहला कदम है; सुधार करके उसकी जांच करना उतना ही जरूरी है।

## PHP की घटना: वास्तविक चेतावनी, सही श्रेय के साथ

PHP सर्वर पर चलने वाली प्रोग्रामिंग भाषा है, जिसे अनेक वेबसाइट और सामग्री प्रबंधन प्रणालियां इस्तेमाल करती हैं। साझा नींव में खराबी हो तो प्रभाव एक अनुप्रयोग से बड़ा हो सकता है। 21 अक्टूबर 2026 को PHP ने CVE-2026-109618 और CVE-2026-109619 के सुधार घोषित किए। पहला स्मृति समाप्त होने की स्थिति में भ्रष्ट डेटा से संबंधित है; दूसरा पुरानी आंतरिक स्थिति के बचे रहने से। आधिकारिक चेतावनी कहती है कि इनसे बिना लॉगिन दूर से कोड चलाने की संभावना हो सकती है। इसका अर्थ हर वेबसाइट का समझौता हो जाना नहीं है। [PHP की आधिकारिक चेतावनी](${s.php})

Google Cloud की रिपोर्ट PHP 5.4 से 8.5.11 तक प्रभावित संस्करण बताती है। PHP के आधिकारिक सुधरे संस्करण 8.5.12, 8.4.27, 8.3.36 और 8.2.35 हैं। प्रशासक अपनी शाखा और विक्रेता के पैकेज को चेतावनी से मिलाएं; केवल संस्करण संख्या देखकर निष्कर्ष न निकालें। PHP पुराने संस्करणों के लिए कुछ विक्रेता सुधार और विशेष न्यूनतम स्रोत सुधार भी बताता है। इससे पुराने संस्करण का सामान्य समर्थन वापस नहीं आता। [प्रभावित संस्करण](${s.google}) · [प्रामाणिक सुधार मार्गदर्शन](${s.php})

Wiz के शोधकर्ता Sagi Tzadik, Shir Tamari, Nir Ohfeld और Tomer Schwartz अपने काम में Wiz Atlas, Gemini 4 Argon और GPT-5.6 Sol को श्रेय देते हैं। उनकी समयरेखा 19 अगस्त की खोज, 24 अगस्त को PHP को रिपोर्ट और 21 अक्टूबर के सुधार तथा सार्वजनिक खुलासे को बताती है। इस विशेष खोज का श्रेय Astra को देना गलत होगा। [शोधकर्ताओं का विवरण और समयरेखा](${s.wiz})

23 अक्टूबर के PHP अपडेट में असामान्य session-upload-progress व्यवस्था और प्रस्तावित CVE-2026-115560 चेतावनी की अलग चर्चा है। यह नया अनुवर्ती मुद्दा है; इससे मूल दो सुधारों का अस्तित्व समाप्त नहीं हो जाता। वेबसाइट चलाने वालों को सबसे नया आधिकारिक मार्गदर्शन देखना चाहिए, केवल बड़ी खबर का शीर्षक नहीं। [PHP का अनुवर्ती विवरण](${s.php})

![लैपटॉप की मदद से सर्वर व्यवस्था का रखरखाव करता इंजीनियर](${php})
*मूल AI-निर्मित संपादकीय चित्र: साझा सॉफ्टवेयर व्यवस्था में सुधार की कल्पना; PHP खोज या हमले की वास्तविक फोटो नहीं।*

## AI वास्तव में क्या बना सकता है?

वेबसाइट, परियोजना डैशबोर्ड या उपस्थिति प्रणाली एक काम नहीं, कामों की श्रृंखला है। जरूरत समझना, डिजाइन, कोड, परीक्षण, जारी करना और रखरखाव अलग चरण हैं। उपयुक्त पहुंच वाला एजेंट आवश्यकता स्पष्ट करने, फाइल बदलने, जांच चलाने, गलती खोजने और अगले चरण की तैयारी में मदद कर सकता है।

ठेकेदार के उदाहरण में अच्छा प्रदर्शन वास्तविक जैसी नमूना उपस्थिति दर्ज करता है। एक ही प्रविष्टि दो बार जाने पर क्या होता है, यह जांचता है। फिर महीने का योग उसी अनुप्रयोग में वापस देखकर पुष्टि करता है। इंजीनियरिंग रिपोर्ट में माप और इकाइयों को मूल रिकॉर्ड से मिलाया जाता है। दुकान के विश्लेषण में गायब संख्या को चुपचाप शून्य मान लेना सही नहीं है।

वास्तविक सेवा के लिए सुरक्षित लॉगिन, भरोसेमंद डेटा व्यवस्था, बैकअप, निजी जानकारी की रक्षा और विफलता से उबरने की योजना चाहिए। रखरखाव की जिम्मेदारी भी तय होनी चाहिए। आकर्षक स्क्रीन बन जाना इन सबके मौजूद होने का प्रमाण नहीं। महंगी कार्रवाई और प्रकाशन से पहले अनुमति जरूरी है। शुरुआती नमूने से भरोसेमंद सेवा तक का रास्ता छोटा हो सकता है, लेकिन गायब नहीं होता।

![उपस्थिति अनुप्रयोग जांचते निर्माण प्रबंधक और सॉफ्टवेयर डेवलपर](${building})
*मूल AI-निर्मित संपादकीय चित्र: मनुष्य की समीक्षा में उपस्थिति प्रणाली; यह Astra का वास्तविक बनाया परिणाम नहीं है।*

## AI अभी भी किन बातों की गारंटी नहीं दे सकता?

हैलुसिनेशन का अर्थ है गलत या बिना प्रमाण की बात ऐसे कहना जैसे वह सही हो। प्रोग्रामिंग की गलती, पुरानी जानकारी और छूटे हुए विवरण अब भी संभव हैं। उपकरण विफल हो सकते हैं, अनुमति काम रोक सकती है और दिया गया डेटा अधूरा हो सकता है। बेहतर औसत प्रदर्शन हर परिस्थिति में सही परिणाम नहीं बनाता।

OpenAI सुरक्षा विवरण Astra के लिखित तर्क की निगरानी में कुछ विरोधी परीक्षणों के दौरान कमी भी बताता है। इसका मतलब है कि बेहतर व्यवहार और मजबूत सुरक्षा उपायों के साथ अनसुलझी चिंताएं भी मौजूद हैं। किसी परीक्षण में अच्छा रिकॉर्ड भविष्य की हर घटना का वादा नहीं है। [सीमाएं और निगरानी संबंधी चिंताएं](${s.safety})

उचित उत्तर कई स्तरों का सत्यापन है। महत्वपूर्ण दावे के पास प्रमाण मांगें, बदलाव देखें, वास्तविक परिस्थिति वाले परीक्षण करें और अंतिम निर्णय मनुष्य रखे। शिक्षक गणितीय समाधान जांचे, इंजीनियर गणना जांचे और सुरक्षा टीम केवल अधिकृत वातावरण में निष्कर्ष परखे। भरोसा प्रदर्शित विश्वसनीयता से बनना चाहिए, मॉडल की आत्मविश्वासी आवाज से नहीं।

![मूल रिकॉर्ड से कंप्यूटर पर बने चार्ट की तुलना करती वैज्ञानिक](${verification})
*मूल AI-निर्मित संपादकीय चित्र: परिणामों का मूल प्रमाण से सत्यापन अब भी आवश्यक है।*

## अगले पांच वर्ष: संभावनाएं, निश्चित भविष्यवाणी नहीं

व्यक्तिगत एजेंट मुलाकात, कागजी काम और दैनिक प्रशासन को बेहतर जोड़ सकते हैं। प्रोग्रामिंग सहायक जरूरत से सत्यापित परीक्षण तक अधिक चरण संभाल सकते हैं। वैज्ञानिक उपकरण विचारों की जांच तेज कर सकते हैं और शिक्षा प्रणालियां छात्र की कठिनाई के अनुसार बेहतर प्रतिक्रिया दे सकती हैं। ये संभावनाएं हैं, तय तारीख वाला वादा नहीं।

रोबोटिक्स कुछ डिजिटल योजना को वास्तविक दुनिया के काम से जोड़ सकती है। लेकिन असली वस्तु उठाने वाले रोबोट की गलती का असर पाठ की गलती से अलग होता है। साइबर सुरक्षा में खोज और सुधार की दौड़ तेज हो सकती है। छोटे व्यवसाय अधिक प्रशासनिक काम जोड़ सकते हैं, यदि प्रणालियां सस्ती, सुरक्षित और भरोसेमंद हों।

प्रगति कंप्यूटिंग संसाधन, ऊर्जा, लागत, नियम, सुरक्षा और लोगों द्वारा अपनाने पर निर्भर करेगी। लंबे काम में विश्वसनीयता छोटे चमकदार प्रदर्शन जितनी महत्वपूर्ण है। समाज को श्रमिकों की सुरक्षा, लाभ के वितरण और जिम्मेदारी पर भी निर्णय लेना होगा। केवल किसी बेंचमार्क का ऊंचा परिणाम AGI सिद्ध नहीं करता। भविष्य तकनीकी संभावना और मानव निर्णय दोनों से बनेगा।

![साझा कार्यस्थल में विभिन्न पेशों के लोगों और AI सहयोग की कल्पना](${future})
*मूल AI-निर्मित संपादकीय चित्र: संभावित भविष्य की कल्पना; निश्चित भविष्यवाणी या वर्तमान तकनीक की वास्तविक फोटो नहीं।*

## असाधारण बदलाव और हमारी जिम्मेदारी

2020 में रोजमर्रा का बहुत सा AI विशेष कामों में लगा और लगभग अदृश्य था। 2023 में बातचीत ने नया दरवाजा खोला। 2026 में Astra के दस्तावेज बताते हैं कि तर्क और उपकरण जुड़ने से अगला दरवाजा इतना बड़ा क्यों लग सकता है। अंतर सिर्फ मशीन के अच्छी भाषा बोलने का नहीं, सवाल और जांचे हुए परिणाम के बीच ज्यादा काम तक पहुंचने का है।

यह अवसर बढ़ा सकता है, शोध तेज कर सकता है और गलती या दुरुपयोग का असर भी बढ़ा सकता है। इसलिए विस्मय का उचित साथी जिम्मेदारी है। शक्तिशाली मॉडल होने का अर्थ मानवीय निर्णय की जरूरत खत्म होना नहीं; कई बार वही जरूरत और महत्वपूर्ण हो जाती है।

भविष्य किसी उत्पाद के नाम या परीक्षण से अकेले तय नहीं होगा। पहुंच, सुरक्षा, प्रमाण और जवाबदेही के हमारे चुनाव उसे आकार देंगे। महत्वपूर्ण सवाल केवल यह नहीं है कि AI आज क्या कर सकता है। सवाल यह भी है कि उसकी क्षमता कितनी तेजी से बदल सकती है, और क्या हम उस बदलाव के लिए समझदारी से तैयार हो रहे हैं।

आगे पढ़ें: [CRISPR जीन संपादन](/article/crispr-gene-editing-explained) · [क्वांटम कंप्यूटिंग](/article/quantum-computing-breakthrough)।
`;

export const astraArticle: Article = {
  id: "gpt-6-astra-evolution",
  slug: "ai-evolution-gpt-6-astra",
  title: {
    en: "From AI Chatbots to GPT-6 Astra: The Extraordinary Evolution of Artificial Intelligence",
    hi: "2020 से GPT-6 Astra तक: AI इतनी तेजी से कैसे बदल गया कि दुनिया हैरान रह गई?",
  },
  excerpt: {
    en: "From everyday AI in 2020 to Astra’s reasoning, computer use and security research: a sourced journey through a remarkable transformation.",
    hi: "2020 के रोजमर्रा के AI से Astra के तर्क, कंप्यूटर उपयोग और सुरक्षा शोध तक: प्रमाणों के साथ एक असाधारण बदलाव की कहानी।",
  },
  content: { en, hi },
  image: hero,
  category: "ai",
  author: "Sahjad",
  date: "2026-10-26",
  readTime: 15,
  featured: true,
};

export const astraSeo = {
  en: { title: "GPT-6 Astra & AI’s Extraordinary Evolution | The Saagar", description: "Explore AI from 2020 to GPT-6 Astra: reasoning, coding, computer use, research, cybersecurity and the PHP incident, with sources and honest limits." },
  hi: { title: "2020 से GPT-6 Astra तक: AI का असाधारण विकास | The Saagar", description: "AI के विकास की हिंदी कहानी: GPT-6 Astra का तर्क, कोडिंग, कंप्यूटर उपयोग, वैज्ञानिक शोध और साइबर सुरक्षा—प्रमाणों और सीमाओं के साथ।" },
};
