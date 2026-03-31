import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const Header = () => {
  const { lang, setLang, t } = useI18n();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/categories", label: t("nav.categories") },
    { to: "/archive", label: t("nav.archive") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          The <span className="text-primary">Saagar</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="hidden sm:flex items-center border border-border rounded-md overflow-hidden text-xs">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-2.5 py-1.5 font-hindi transition-colors ${
                lang === "hi" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="container pb-3">
          <input
            type="text"
            placeholder={t("section.search")}
            className="w-full px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            autoFocus
          />
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-2 px-3">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded text-xs ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1.5 rounded text-xs font-hindi ${lang === "hi" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                हिंदी
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
