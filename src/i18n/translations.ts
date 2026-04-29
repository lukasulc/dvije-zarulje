// Translations for the site
// Used with Astro's i18n routing

export const translations = {
  en: {
    // Site
    siteName: "Dvije Žarulje",
    siteSlogan: "The best grill in town!",

    // Navigation
    nav: {
      home: "Home",
      menu: "Menu",
      aboutUs: "About Us",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book",
    },

    // Footer
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      reserve: "Reserve",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
    },

    // Hours
    hours: {
      monday: "8:00 - 19:00",
      tuesday: "8:00 - 19:00",
      wednesday: "8:00 - 19:00",
      thursday: "8:00 - 19:00",
      friday: "8:00 - 19:00",
      saturday: "8:00 - 19:00",
      sunday: "Closed",
    },

    // Common
    common: {
      readMore: "Read more",
      bookNow: "Book now",
      callUs: "Call us",
      price: "Price",
      viewAll: "View all",
    },

    // Menu categories
    menuCategories: {
      dnevnaPonuda: "Daily Offer",
      cevapi: "Cevapi",
      burgers: "Burgers",
      rostilj: "Grill",
      prilozi: "Side Dishes",
      pića: "Drinks",
      umaci: "Sauces & Extras",
    },
  },

  hr: {
    // Site
    siteName: "Dvije Žarulje",
    siteSlogan: "Najbolji roštilj u gradu!",

    // Navigation
    nav: {
      home: "Početna",
      menu: "Jelovnik",
      aboutUs: "O nama",
      gallery: "Galerija",
      contact: "Kontakt",
      book: "Rezerviraj",
    },

    // Footer
    footer: {
      navigation: "Navigacija",
      contact: "Kontakt",
      reserve: "Rezerviraj",
      legal: "Pravno",
      privacyPolicy: "Politika privatnosti",
    },

    // Hours
    hours: {
      monday: "8:00 - 19:00",
      tuesday: "8:00 - 19:00",
      wednesday: "8:00 - 19:00",
      thursday: "8:00 - 19:00",
      friday: "8:00 - 19:00",
      saturday: "8:00 - 19:00",
      sunday: "Zatvoreno",
    },

    // Common
    common: {
      readMore: "Više",
      bookNow: "Rezerviraj",
      callUs: "Nazovite nas",
      price: "Cijena",
      viewAll: "Pogledaj sve",
    },

    // Menu categories
    menuCategories: {
      dnevnaPonuda: "Dnevna ponuda",
      cevapi: "Ćevapi",
      burgers: "Burgersi",
      rostilj: "Roštilj",
      prilozi: "Prilozi",
      pića: "Pića",
      umaci: "Umaci i dodaci",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;