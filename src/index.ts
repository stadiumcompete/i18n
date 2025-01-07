import { LANGUAGE } from "./languages";
import { T } from "./translations";
import { TRANSLATION_MAP } from "./types";

export { LANGUAGE, TRANSLATION_MAP, T };

// If you don't find a translated string,
// at least just return the English version.
export const getTranslation = (tMap: TRANSLATION_MAP, lang: LANGUAGE) => {
  if (!tMap) return "";
  return tMap[lang] || tMap[LANGUAGE.EN] || "";
};
