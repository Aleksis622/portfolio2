import Icon from "./Icon";
import Doodles from "./Doodles";
import { CV_URL, EMAIL, navLinks } from "../data/site";
import { useLang } from "../i18n/context";

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="footer">
      <Doodles variant="footer" />
      <div className="container footer-inner">
        <nav className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <Icon name={link.icon} size={15} /> {t(link.label)}
            </a>
          ))}
        </nav>

        <div className="social-row">
          <a className="social-btn" href="https://github.com/Aleksis622" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" size={16} />
          </a>
          <a className="social-btn" href={`mailto:${EMAIL}`} aria-label={t("email")}>
            <Icon name="mail" size={16} />
          </a>
          <a className="social-btn" href={CV_URL[lang]} download aria-label={t("downloadCv")}>
            <Icon name="file" size={16} />
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Aleksis Aleksandrs Eglītis</p>
      </div>
    </footer>
  );
}
