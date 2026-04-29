// Menu configuration
// For i18n, use Astro's built-in routing with lang parameter

export const menuMain = [
  {
    name: "Home",
    nameEn: "Home",
    url: "/",
    highlighted: false,
  },
  {
    name: "Menu",
    nameEn: "Menu",
    url: "/menu",
    highlighted: false,
  },
  {
    name: "About Us",
    nameEn: "About Us",
    url: "/about-us",
    highlighted: false,
  },
  {
    name: "Gallery",
    nameEn: "Gallery",
    url: "/gallery",
    highlighted: false,
  },
  {
    name: "Contact",
    nameEn: "Contact",
    url: "/contact",
    highlighted: false,
  },
  {
    name: "Book",
    nameEn: "Book",
    url: "/book",
    highlighted: true,
  },
];

export const menuMainHr = [
  {
    name: "Početna",
    url: "/",
    highlighted: false,
  },
  {
    name: "Jelovnik",
    url: "/menu",
    highlighted: false,
  },
  {
    name: "O nama",
    url: "/about-us",
    highlighted: false,
  },
  {
    name: "Galerija",
    url: "/gallery",
    highlighted: false,
  },
  {
    name: "Kontakt",
    url: "/contact",
    highlighted: false,
  },
  {
    name: "Rezerviraj",
    url: "/book",
    highlighted: true,
  },
];

export const footerPrimary = [
  {
    title: "Navigation",
    items: [
      { name: "Home", url: "/" },
      { name: "Menu", url: "/menu" },
      { name: "About Us", url: "/about-us" },
    ],
  },
];

export const footerPrimaryHr = [
  {
    title: "Navigacija",
    items: [
      { name: "Početna", url: "/" },
      { name: "Jelovnik", url: "/menu" },
      { name: "O nama", url: "/about-us" },
    ],
  },
];

export const footerSecondary = [
  {
    title: "Contact",
    items: [
      { name: "Contact", url: "/contact" },
      { name: "Book a Table", url: "/book" },
    ],
  },
];

export const footerSecondaryHr = [
  {
    title: "Kontakt",
    items: [
      { name: "Kontakt", url: "/contact" },
      { name: "Rezerviraj", url: "/book" },
    ],
  },
];

export const footerTertiary = [
  {
    title: "Legal",
    items: [{ name: "Privacy Policy", url: "/privacy-policy" }],
  },
];

export const footerTertiaryHr = [
  {
    title: "Pravno",
    items: [{ name: "Politika privatnosti", url: "/privacy-policy" }],
  },
];
