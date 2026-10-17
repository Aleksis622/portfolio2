import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { strings, languages } from "./strings";

const STORAGE_KEY = "portfolio-lang";

function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (languages.includes(saved)) return saved;
  } catch {
    // storage blocked (private mode etc.): fall back to the browser language
  }
  return (navigator.language || "").toLowerCase().startsWith("lv") ? "lv" : "en";
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // not saved, still switches for this visit
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = strings[lang].docTitle;
  }, [lang]);

  const value = useMemo(() => {
    const t = (key, vars = {}) => {
      const text = strings[lang][key] ?? strings.en[key] ?? key;
      if (typeof text !== "string") return text;
      return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`);
    };
    // Picks the current language from a { en, lv } text; plain strings pass through.
    const L = (text) => (text && typeof text === "object" ? text[lang] ?? text.en : text);
    return { lang, setLang, t, L };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
