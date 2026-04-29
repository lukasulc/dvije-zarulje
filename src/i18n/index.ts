// i18n utility for getting translations
import { translations, type Locale, type TranslationKeys } from "./translations";

/**
 * Get translations for a specific locale
 */
export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.hr;
}

/**
 * Get a specific translation value
 */
export function t(locale: Locale, path: string): string {
  const keys = path.split(".");
  let value: unknown = translations[locale];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof value === "string" ? value : path;
}

export { translations };
export type { Locale, TranslationKeys };