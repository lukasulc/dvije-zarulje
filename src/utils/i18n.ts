// i18n utility for Astro i18n routing
import { getLocaleFromUrl, locales } from 'astro:i18n';

/**
 * Get the current locale from the URL
 * @param {string} url - The current page URL
 * @returns {string} - The locale code ('en' or 'hr')
 */
export function getCurrentLocale(url: string): string {
	return getLocaleFromUrl(url);
}

/**
 * Get translated content based on locale
 * @param {object} content - Object with en and hr translations
 * @param {string} locale - Current locale
 * @returns {string} - Translated content
 */
export function t(content: { en?: string; hr?: string }, locale: string): string {
	if (locale === 'hr') {
		return content.hr || content.en || '';
	}
	return content.en || content.hr || '';
}

/**
 * Get site content for current locale
 * @param {string} locale - Current locale
 * @returns {object} - Site content for the locale
 */
export function getSiteContent(locale: string) {
	const allContent = {
		en: {
			siteName: 'Dvije Žarulje',
			siteSlogan: 'The best grill in town!',
			menu: {
				home: 'Home',
				menu: 'Menu',
				aboutUs: 'About Us',
				gallery: 'Gallery',
				contact: 'Contact',
				book: 'Book',
			},
			footer: {
				navigation: 'Navigation',
				contact: 'Contact',
				reserve: 'Reserve',
				legal: 'Legal',
				privacyPolicy: 'Privacy Policy',
			},
			hours: {
				monday: '8:00 - 19:00',
				tuesday: '8:00 - 19:00',
				wednesday: '8:00 - 19:00',
				thursday: '8:00 - 19:00',
				friday: '8:00 - 19:00',
				saturday: '8:00 - 19:00',
				sunday: 'Closed',
			},
		},
		hr: {
			siteName: 'Dvije Žarulje',
			siteSlogan: 'Najbolji roštilj u gradu!',
			menu: {
				home: 'Početna',
				menu: 'Jelovnik',
				aboutUs: 'O nama',
				gallery: 'Galerija',
				contact: 'Kontakt',
				book: 'Rezerviraj',
			},
			footer: {
				navigation: 'Navigacija',
				contact: 'Kontakt',
				reserve: 'Rezerviraj',
				legal: 'Pravno',
				privacyPolicy: 'Politika privatnosti',
			},
			hours: {
				monday: '8:00 - 19:00',
				tuesday: '8:00 - 19:00',
				wednesday: '8:00 - 19:00',
				thursday: '8:00 - 19:00',
				friday: '8:00 - 19:00',
				saturday: '8:00 - 19:00',
				sunday: 'Zatvoreno',
			},
		},
	};

	return allContent[locale as keyof typeof allContent] || allContent.hr;
}

export { locales };