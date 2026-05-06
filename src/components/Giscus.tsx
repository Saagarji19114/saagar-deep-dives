import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useI18n();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    const attrs: Record<string, string> = {
      "data-repo": "Saagarji19114/saagar-deep-dives",
      "data-repo-id": "R_kgDOR2xtuw",
      "data-category": "General",
      "data-category-id": "DIC_kwDOR2xtu84C8a54",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": "preferred_color_scheme",
      "data-lang": lang === "hi" ? "en" : "en",
    };
    Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));
    ref.current.appendChild(script);
  }, [lang]);

  return <div ref={ref} className="giscus-wrapper" />;
};

export default Giscus;