import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              The <span className="text-primary">Saagar</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("footer.quicklinks")}</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
                { to: "/categories", label: t("nav.categories") },
                { to: "/privacy", label: t("privacy.title") },
                { to: "/terms", label: t("terms.title") },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("footer.social")}</h4>
            <div className="flex gap-3">
              {["Twitter/X", "LinkedIn", "YouTube"].map((s) => (
  <a 
    key={s} 
    href={s === "Twitter/X" ? "https://x.com/sahjad_saagarji" : "#"} 
    target={s === "Twitter/X" ? "_blank" : undefined}
    rel={s === "Twitter/X" ? "noopener noreferrer" : undefined}
    className="text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    {s}
  </a>
))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Saagar. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
