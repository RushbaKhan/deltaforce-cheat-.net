import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'delta-force-esp'
	| 'delta-force-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'ricochet'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'delta-force-esp': '/delta-force-esp/',
	'delta-force-aimbot': '/delta-force-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-delta-force-cheats/',
	wallhack: '/delta-force-wallhack/',
	radar: '/delta-force-radar/',
	'ricochet': '/delta-force-anti-cheat-bypass/',
	'cheats-2026': '/delta-force-cheats-2026/',
	hacks: '/delta-force-cheats/',
	'cheat-download': '/delta-force-cheat-download/',
	'mod-menu': '/delta-force-cheat-menu/',
	'soft-aim': '/delta-force-aim-assist/',
	'best-cheats': '/best-delta-force-cheats/',
	'aimbot-hack': '/delta-force-aimbot-hack/',
	'esp-hack': '/delta-force-esp-hack/',
	'unlock-all': '/delta-force-cloud-dma/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'delta-force-esp': {
		en: 'delta-force-esp',
		es: 'trucos-delta-force-esp',
		fr: 'triche-delta-force-esp',
		de: 'delta-force-esp-wallhack',
		pt: 'cheats-delta-force-esp',
		it: 'trucchi-delta-force-esp',
		nl: 'delta-force-esp-wallhack',
		pl: 'cheaty-delta-force-esp',
		ru: 'delta-force-esp-chity',
		tr: 'delta-force-esp-hile',
		ar: 'delta-force-esp-wallhack',
		ja: 'delta-force-esp-wallhack',
		ko: 'delta-force-esp-wallhack',
		zh: 'delta-force-esp-wallhack',
		hi: 'delta-force-esp-wallhack',
		id: 'delta-force-esp-wallhack',
		th: 'delta-force-esp-wallhack',
		vi: 'delta-force-esp-wallhack',
		uk: 'delta-force-esp-chity',
		cs: 'delta-force-esp-wallhack',
		ro: 'delta-force-esp-wallhack',
		sv: 'delta-force-esp-wallhack',
	},
	'delta-force-aimbot': {
		en: 'delta-force-aimbot',
		es: 'trucos-delta-force-aimbot',
		fr: 'triche-delta-force-aimbot',
		de: 'delta-force-aimbot',
		pt: 'cheats-delta-force-aimbot',
		it: 'trucchi-delta-force-aimbot',
		nl: 'delta-force-aimbot',
		pl: 'cheaty-delta-force-aimbot',
		ru: 'delta-force-aimbot-chity',
		tr: 'delta-force-aimbot-hile',
		ar: 'delta-force-aimbot',
		ja: 'delta-force-aimbot',
		ko: 'delta-force-aimbot',
		zh: 'delta-force-aimbot',
		hi: 'delta-force-aimbot',
		id: 'delta-force-aimbot',
		th: 'delta-force-aimbot',
		vi: 'delta-force-aimbot',
		uk: 'delta-force-aimbot-chity',
		cs: 'delta-force-aimbot',
		ro: 'delta-force-aimbot',
		sv: 'delta-force-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-warzone',
		fr: 'fonctionnalites-triche-warzone',
		de: 'call-of-duty-warzone-cheats-funktionen',
		pt: 'recursos-cheats-warzone',
		it: 'funzioni-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-functies',
		pl: 'funkcje-cheatow-warzone',
		ru: 'funkcii-chitov-warzone',
		tr: 'warzone-hile-ozellikleri',
		ar: 'call-of-duty-warzone-cheats-features',
		ja: 'call-of-duty-warzone-cheats-features',
		ko: 'call-of-duty-warzone-cheats-features',
		zh: 'call-of-duty-warzone-cheats-features',
		hi: 'call-of-duty-warzone-cheats-features',
		id: 'call-of-duty-warzone-cheats-features',
		th: 'call-of-duty-warzone-cheats-features',
		vi: 'call-of-duty-warzone-cheats-features',
		uk: 'funkcii-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-funkce',
		ro: 'functii-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-warzone',
		fr: 'prix-triche-warzone',
		de: 'call-of-duty-warzone-cheats-preise',
		pt: 'precos-cheats-warzone',
		it: 'prezzi-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-prijzen',
		pl: 'ceny-cheatow-warzone',
		ru: 'ceny-chitov-warzone',
		tr: 'warzone-hile-fiyatlari',
		ar: 'call-of-duty-warzone-cheats-pricing',
		ja: 'call-of-duty-warzone-cheats-pricing',
		ko: 'call-of-duty-warzone-cheats-pricing',
		zh: 'call-of-duty-warzone-cheats-pricing',
		hi: 'call-of-duty-warzone-cheats-pricing',
		id: 'call-of-duty-warzone-cheats-pricing',
		th: 'call-of-duty-warzone-cheats-pricing',
		vi: 'call-of-duty-warzone-cheats-pricing',
		uk: 'ciny-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-ceny',
		ro: 'preturi-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-warzone',
		fr: 'installation-triche-warzone',
		de: 'call-of-duty-warzone-cheats-installation',
		pt: 'instalacao-cheats-warzone',
		it: 'installazione-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-installatie',
		pl: 'instalacja-cheatow-warzone',
		ru: 'ustanovka-chitov-warzone',
		tr: 'warzone-hile-kurulum',
		ar: 'call-of-duty-warzone-cheats-setup',
		ja: 'call-of-duty-warzone-cheats-setup',
		ko: 'call-of-duty-warzone-cheats-setup',
		zh: 'call-of-duty-warzone-cheats-setup',
		hi: 'call-of-duty-warzone-cheats-setup',
		id: 'call-of-duty-warzone-cheats-setup',
		th: 'call-of-duty-warzone-cheats-setup',
		vi: 'call-of-duty-warzone-cheats-setup',
		uk: 'vstanovka-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-instalace',
		ro: 'instalare-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-warzone',
		fr: 'mises-a-jour-triche-warzone',
		de: 'call-of-duty-warzone-cheats-updates',
		pt: 'atualizacoes-cheats-warzone',
		it: 'aggiornamenti-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-updates',
		pl: 'aktualizacje-cheatow-warzone',
		ru: 'obnovleniya-chitov-warzone',
		tr: 'warzone-hile-guncellemeleri',
		ar: 'call-of-duty-warzone-cheats-updates',
		ja: 'call-of-duty-warzone-cheats-updates',
		ko: 'call-of-duty-warzone-cheats-updates',
		zh: 'call-of-duty-warzone-cheats-updates',
		hi: 'call-of-duty-warzone-cheats-updates',
		id: 'call-of-duty-warzone-cheats-updates',
		th: 'call-of-duty-warzone-cheats-updates',
		vi: 'call-of-duty-warzone-cheats-updates',
		uk: 'onovlennya-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-aktualizace',
		ro: 'actualizari-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-warzone',
		fr: 'faq-triche-warzone',
		de: 'call-of-duty-warzone-cheats-faq',
		pt: 'faq-cheats-warzone',
		it: 'faq-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-faq',
		pl: 'faq-cheatow-warzone',
		ru: 'faq-chitov-warzone',
		tr: 'warzone-hile-sss',
		ar: 'call-of-duty-warzone-cheats-faq',
		ja: 'call-of-duty-warzone-cheats-faq',
		ko: 'call-of-duty-warzone-cheats-faq',
		zh: 'call-of-duty-warzone-cheats-faq',
		hi: 'call-of-duty-warzone-cheats-faq',
		id: 'call-of-duty-warzone-cheats-faq',
		th: 'call-of-duty-warzone-cheats-faq',
		vi: 'call-of-duty-warzone-cheats-faq',
		uk: 'faq-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-faq',
		ro: 'faq-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-warzone',
		fr: 'support-triche-warzone',
		de: 'call-of-duty-warzone-cheats-support',
		pt: 'suporte-cheats-warzone',
		it: 'supporto-trucchi-warzone',
		nl: 'call-of-duty-warzone-cheats-support',
		pl: 'wsparcie-cheatow-warzone',
		ru: 'podderzhka-chitov-warzone',
		tr: 'warzone-hile-destek',
		ar: 'call-of-duty-warzone-cheats-support',
		ja: 'call-of-duty-warzone-cheats-support',
		ko: 'call-of-duty-warzone-cheats-support',
		zh: 'call-of-duty-warzone-cheats-support',
		hi: 'call-of-duty-warzone-cheats-support',
		id: 'call-of-duty-warzone-cheats-support',
		th: 'call-of-duty-warzone-cheats-support',
		vi: 'call-of-duty-warzone-cheats-support',
		uk: 'pidtrymka-chitiv-warzone',
		cs: 'call-of-duty-warzone-cheats-podpora',
		ro: 'suport-cheats-warzone',
		sv: 'call-of-duty-warzone-cheats-support',
	},
	undetected: {
		en: 'undetected-delta-force-cheats',
		es: 'trucos-warzone-indetectables',
		fr: 'triche-warzone-indetectable',
		de: 'unentdeckte-call-of-duty-warzone-cheats',
		pt: 'cheats-warzone-indetectaveis',
		it: 'trucchi-warzone-indetectabili',
		nl: 'undetected-delta-force-cheats',
		pl: 'niewykrywalne-cheats-warzone',
		ru: 'nedecektiruemye-chity-warzone',
		tr: 'tespit-edilemeyen-warzone-hileleri',
		ar: 'undetected-delta-force-cheats',
		ja: 'undetected-delta-force-cheats',
		ko: 'undetected-delta-force-cheats',
		zh: 'undetected-delta-force-cheats',
		hi: 'undetected-delta-force-cheats',
		id: 'undetected-delta-force-cheats',
		th: 'undetected-delta-force-cheats',
		vi: 'undetected-delta-force-cheats',
		uk: 'nedecektovani-chity-warzone',
		cs: 'undetected-delta-force-cheats',
		ro: 'cheats-warzone-nedetectabile',
		sv: 'undetected-delta-force-cheats',
	},
	wallhack: {
		en: 'warzone-wallhack',
		es: 'wallhack-trucos-warzone',
		fr: 'wallhack-triche-warzone',
		de: 'warzone-wallhack',
		pt: 'wallhack-cheats-warzone',
		it: 'wallhack-trucchi-warzone',
		nl: 'warzone-wallhack',
		pl: 'wallhack-cheatow-warzone',
		ru: 'wallhack-chity-warzone',
		tr: 'warzone-wallhack-hile',
		ar: 'warzone-wallhack',
		ja: 'warzone-wallhack',
		ko: 'warzone-wallhack',
		zh: 'warzone-wallhack',
		hi: 'warzone-wallhack',
		id: 'warzone-wallhack',
		th: 'warzone-wallhack',
		vi: 'warzone-wallhack',
		uk: 'wallhack-chity-warzone',
		cs: 'warzone-wallhack',
		ro: 'wallhack-cheats-warzone',
		sv: 'warzone-wallhack',
	},
	radar: {
		en: 'warzone-radar-hack',
		es: 'radar-hack-trucos-warzone',
		fr: 'radar-hack-triche-warzone',
		de: 'warzone-radar-hack',
		pt: 'radar-hack-cheats-warzone',
		it: 'radar-hack-trucchi-warzone',
		nl: 'warzone-radar-hack',
		pl: 'radar-hack-cheatow-warzone',
		ru: 'radar-hack-chity-warzone',
		tr: 'warzone-radar-hack',
		ar: 'warzone-radar-hack',
		ja: 'warzone-radar-hack',
		ko: 'warzone-radar-hack',
		zh: 'warzone-radar-hack',
		hi: 'warzone-radar-hack',
		id: 'warzone-radar-hack',
		th: 'warzone-radar-hack',
		vi: 'warzone-radar-hack',
		uk: 'radar-hack-chity-warzone',
		cs: 'warzone-radar-hack',
		ro: 'radar-hack-cheats-warzone',
		sv: 'warzone-radar-hack',
	},
	'ricochet': {
		en: 'ricochet-bypass',
		es: 'ricochet-bypass-trucos',
		fr: 'ricochet-bypass-triche',
		de: 'ricochet-bypass',
		pt: 'ricochet-bypass-cheats',
		it: 'ricochet-bypass-trucchi',
		nl: 'ricochet-bypass',
		pl: 'ricochet-bypass-cheatow',
		ru: 'ricochet-bypass-chity',
		tr: 'ricochet-bypass',
		ar: 'ricochet-bypass',
		ja: 'ricochet-bypass',
		ko: 'ricochet-bypass',
		zh: 'ricochet-bypass',
		hi: 'ricochet-bypass',
		id: 'ricochet-bypass',
		th: 'ricochet-bypass',
		vi: 'ricochet-bypass',
		uk: 'ricochet-bypass-chity',
		cs: 'ricochet-bypass',
		ro: 'ricochet-bypass-cheats',
		sv: 'ricochet-bypass',
	},
	'cheats-2026': {
		en: 'warzone-cheats-2026',
		es: 'trucos-warzone-2026',
		fr: 'triche-warzone-2026',
		de: 'warzone-cheats-2026',
		pt: 'cheats-warzone-2026',
		it: 'trucchi-warzone-2026',
		nl: 'warzone-cheats-2026',
		pl: 'cheaty-warzone-2026',
		ru: 'chity-warzone-2026',
		tr: 'warzone-hileleri-2026',
		ar: 'warzone-cheats-2026',
		ja: 'warzone-cheats-2026',
		ko: 'warzone-cheats-2026',
		zh: 'warzone-cheats-2026',
		hi: 'warzone-cheats-2026',
		id: 'warzone-cheats-2026',
		th: 'warzone-cheats-2026',
		vi: 'warzone-cheats-2026',
		uk: 'chity-warzone-2026',
		cs: 'warzone-cheats-2026',
		ro: 'cheats-warzone-2026',
		sv: 'warzone-cheats-2026',
	},
	hacks: {
		en: 'delta-force-cheats',
		es: 'hacks-trucos-warzone',
		fr: 'hacks-triche-warzone',
		de: 'delta-force-cheats',
		pt: 'hacks-cheats-warzone',
		it: 'hacks-trucchi-warzone',
		nl: 'delta-force-cheats',
		pl: 'hacks-cheatow-warzone',
		ru: 'haksy-chity-warzone',
		tr: 'warzone-hile-hacks',
		ar: 'delta-force-cheats',
		ja: 'delta-force-cheats',
		ko: 'delta-force-cheats',
		zh: 'delta-force-cheats',
		hi: 'delta-force-cheats',
		id: 'delta-force-cheats',
		th: 'delta-force-cheats',
		vi: 'delta-force-cheats',
		uk: 'haksy-chity-warzone',
		cs: 'delta-force-cheats',
		ro: 'hacks-cheats-warzone',
		sv: 'delta-force-cheats',
	},
	'cheat-download': {
		en: 'warzone-cheat-download',
		es: 'descarga-trucos-warzone',
		fr: 'telechargement-triche-warzone',
		de: 'warzone-cheat-download',
		pt: 'download-cheats-warzone',
		it: 'download-trucchi-warzone',
		nl: 'warzone-cheat-download',
		pl: 'pobieranie-cheatow-warzone',
		ru: 'skachat-chity-warzone',
		tr: 'warzone-hile-indir',
		ar: 'warzone-cheat-download',
		ja: 'warzone-cheat-download',
		ko: 'warzone-cheat-download',
		zh: 'warzone-cheat-download',
		hi: 'warzone-cheat-download',
		id: 'warzone-cheat-download',
		th: 'warzone-cheat-download',
		vi: 'warzone-cheat-download',
		uk: 'zavantazhennya-chitiv-warzone',
		cs: 'warzone-cheat-download',
		ro: 'descarcare-cheats-warzone',
		sv: 'warzone-cheat-download',
	},
	'mod-menu': {
		en: 'warzone-mod-menu',
		es: 'menu-mod-trucos-warzone',
		fr: 'menu-mod-triche-warzone',
		de: 'warzone-mod-menu',
		pt: 'menu-mod-cheats-warzone',
		it: 'menu-mod-trucchi-warzone',
		nl: 'warzone-mod-menu',
		pl: 'menu-mod-cheatow-warzone',
		ru: 'mod-menu-chity-warzone',
		tr: 'warzone-mod-menu',
		ar: 'warzone-mod-menu',
		ja: 'warzone-mod-menu',
		ko: 'warzone-mod-menu',
		zh: 'warzone-mod-menu',
		hi: 'warzone-mod-menu',
		id: 'warzone-mod-menu',
		th: 'warzone-mod-menu',
		vi: 'warzone-mod-menu',
		uk: 'mod-menu-chity-warzone',
		cs: 'warzone-mod-menu',
		ro: 'meniu-mod-cheats-warzone',
		sv: 'warzone-mod-menu',
	},
	'soft-aim': {
		en: 'warzone-soft-aim',
		es: 'soft-aim-trucos-warzone',
		fr: 'soft-aim-triche-warzone',
		de: 'warzone-soft-aim',
		pt: 'soft-aim-cheats-warzone',
		it: 'soft-aim-trucchi-warzone',
		nl: 'warzone-soft-aim',
		pl: 'soft-aim-cheatow-warzone',
		ru: 'soft-aim-chity-warzone',
		tr: 'warzone-soft-aim',
		ar: 'warzone-soft-aim',
		ja: 'warzone-soft-aim',
		ko: 'warzone-soft-aim',
		zh: 'warzone-soft-aim',
		hi: 'warzone-soft-aim',
		id: 'warzone-soft-aim',
		th: 'warzone-soft-aim',
		vi: 'warzone-soft-aim',
		uk: 'soft-aim-chity-warzone',
		cs: 'warzone-soft-aim',
		ro: 'soft-aim-cheats-warzone',
		sv: 'warzone-soft-aim',
	},
	'best-cheats': {
		en: 'best-warzone-cheats',
		es: 'mejores-trucos-warzone',
		fr: 'meilleures-triches-warzone',
		de: 'beste-call-of-duty-warzone-cheats',
		pt: 'melhores-cheats-warzone',
		it: 'migliori-trucchi-warzone',
		nl: 'beste-call-of-duty-warzone-cheats',
		pl: 'najlepsze-cheats-warzone',
		ru: 'luchshie-chity-warzone',
		tr: 'en-iyi-warzone-hileleri',
		ar: 'best-warzone-cheats',
		ja: 'best-warzone-cheats',
		ko: 'best-warzone-cheats',
		zh: 'best-warzone-cheats',
		hi: 'best-warzone-cheats',
		id: 'best-warzone-cheats',
		th: 'best-warzone-cheats',
		vi: 'best-warzone-cheats',
		uk: 'naykrashchi-chity-warzone',
		cs: 'nejlepsi-call-of-duty-warzone-cheats',
		ro: 'cele-mai-bune-cheats-warzone',
		sv: 'basta-call-of-duty-warzone-cheats',
	},
	'aimbot-hack': {
		en: 'delta-force-aimbot-hack',
		es: 'aimbot-hack-trucos-warzone',
		fr: 'aimbot-hack-triche-warzone',
		de: 'delta-force-aimbot-hack',
		pt: 'aimbot-hack-cheats-warzone',
		it: 'aimbot-hack-trucchi-warzone',
		nl: 'delta-force-aimbot-hack',
		pl: 'aimbot-hack-cheatow-warzone',
		ru: 'aimbot-hack-chity-warzone',
		tr: 'delta-force-aimbot-hack',
		ar: 'delta-force-aimbot-hack',
		ja: 'delta-force-aimbot-hack',
		ko: 'delta-force-aimbot-hack',
		zh: 'delta-force-aimbot-hack',
		hi: 'delta-force-aimbot-hack',
		id: 'delta-force-aimbot-hack',
		th: 'delta-force-aimbot-hack',
		vi: 'delta-force-aimbot-hack',
		uk: 'aimbot-hack-chity-warzone',
		cs: 'delta-force-aimbot-hack',
		ro: 'aimbot-hack-cheats-warzone',
		sv: 'delta-force-aimbot-hack',
	},
	'esp-hack': {
		en: 'delta-force-esp-hack',
		es: 'esp-hack-trucos-warzone',
		fr: 'esp-hack-triche-warzone',
		de: 'delta-force-esp-hack',
		pt: 'esp-hack-cheats-warzone',
		it: 'esp-hack-trucchi-warzone',
		nl: 'delta-force-esp-hack',
		pl: 'esp-hack-cheatow-warzone',
		ru: 'esp-hack-chity-warzone',
		tr: 'delta-force-esp-hack',
		ar: 'delta-force-esp-hack',
		ja: 'delta-force-esp-hack',
		ko: 'delta-force-esp-hack',
		zh: 'delta-force-esp-hack',
		hi: 'delta-force-esp-hack',
		id: 'delta-force-esp-hack',
		th: 'delta-force-esp-hack',
		vi: 'delta-force-esp-hack',
		uk: 'esp-hack-chity-warzone',
		cs: 'delta-force-esp-hack',
		ro: 'esp-hack-cheats-warzone',
		sv: 'delta-force-esp-hack',
	},
	'unlock-all': {
		en: 'warzone-unlock-all',
		es: 'unlock-all-trucos-warzone',
		fr: 'unlock-all-triche-warzone',
		de: 'warzone-unlock-all',
		pt: 'unlock-all-cheats-warzone',
		it: 'unlock-all-trucchi-warzone',
		nl: 'warzone-unlock-all',
		pl: 'unlock-all-cheatow-warzone',
		ru: 'unlock-all-chity-warzone',
		tr: 'warzone-unlock-all',
		ar: 'warzone-unlock-all',
		ja: 'warzone-unlock-all',
		ko: 'warzone-unlock-all',
		zh: 'warzone-unlock-all',
		hi: 'warzone-unlock-all',
		id: 'warzone-unlock-all',
		th: 'warzone-unlock-all',
		vi: 'warzone-unlock-all',
		uk: 'unlock-all-chity-warzone',
		cs: 'warzone-unlock-all',
		ro: 'unlock-all-cheats-warzone',
		sv: 'warzone-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(pageId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(pageId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('delta-force-aimbot', locale), pageId: 'delta-force-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('delta-force-esp', locale), pageId: 'delta-force-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
