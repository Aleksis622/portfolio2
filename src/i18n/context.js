import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

/** { lang, setLang, t(key, vars), L(textObject) } */
export function useLang() {
  return useContext(LanguageContext);
}
