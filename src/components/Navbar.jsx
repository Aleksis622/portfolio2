import { useEffect, useState } from "react";
import Icon from "./Icon";
import { navLinks } from "../data/site";
import { languages } from "../i18n/strings";
import { useLang } from "../i18n/context";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          Aleksis<span>Dev</span>
        </a>

        <div className="nav-right">
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {t(link.label)}
              </a>
            ))}
          </nav>

          <div className="lang-switch" role="group" aria-label={t("chooseLanguage")}>
            {languages.map((code) => (
              <button
                key={code}
                className={lang === code ? "active" : ""}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="nav-toggle"
            aria-label={t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
