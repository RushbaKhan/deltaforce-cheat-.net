/** Shared constants for i18n content generation. */ export const LOCALES = [ 'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
]; export const PAGE_IDS = [ 'home', 'delta-force-esp', 'delta-force-aimbot', 'features', 'pricing', 'setup', 'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'ricochet', 'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
]; /** Hero image per page — six unique Delta Force cheat screenshots (primary pages each get a distinct file). */
export const HERO_IMAGES = { home: '/images/hero-banner.webp',
	'delta-force-esp': '/images/delta-force-preview-chams-1.webp',
	'delta-force-aimbot': '/images/delta-force-preview-chams-2.webp',
	features: '/images/delta-force-preview-chams-1.webp',
	pricing: '/images/hero-banner.webp',
	setup: '/images/delta-force-preview-chams-2.webp',
	updates: '/images/delta-force-preview-chams-1.webp',
	faq: '/images/delta-force-preview-chams-2.webp',
	support: '/images/hero-banner.webp',
	undetected: '/images/delta-force-preview-chams-1.webp',
	wallhack: '/images/delta-force-preview-chams-1.webp',
	radar: '/images/delta-force-preview-chams-2.webp',
	ricochet: '/images/hero-banner.webp',
	'cheats-2026': '/images/delta-force-preview-chams-1.webp',
	hacks: '/images/delta-force-preview-chams-1.webp',
	'cheat-download': '/images/delta-force-preview-chams-2.webp',
	'mod-menu': '/images/delta-force-preview-chams-2.webp',
	'soft-aim': '/images/delta-force-preview-chams-1.webp',
	'best-cheats': '/images/hero-banner.webp',
	'aimbot-hack': '/images/delta-force-preview-chams-2.webp',
	'esp-hack': '/images/delta-force-preview-chams-1.webp',
	'unlock-all': '/images/hero-banner.webp',
	privacy: '/images/hero-banner.webp',
	refund: '/images/delta-force-preview-chams-2.webp',
	terms: '/images/hero-banner.webp',
}; export const TS_HEADER = `import type { LocaleCode } from './locales'; export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'delta-force-esp' | 'delta-force-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'ricochet' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`; /** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) { if (s.length <= 60) return s; const trimmed = s.slice(0, 60); const lastSpace = trimmed.lastIndexOf(' '); return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
} export function clampDesc(s) { if (s.length <= 160) return s; const trimmed = s.slice(0, 160); const lastSpace = trimmed.lastIndexOf(' '); return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
} /** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Delta Force Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
} /** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2,...args) { let list; const paragraphs = [...args]; if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) { list = paragraphs.pop(); } if (paragraphs.length < 2) { throw new Error(`section "${h2}" needs at least 2 paragraphs`); } const sec = { h2, paragraphs }; if (list?.length) sec.list = list; return sec;
} /** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision: '<a href="https://www.playdeltaforce.com" target="_blank" rel="noopener noreferrer">Delta Force</a>',
	game: '<a href="https://www.playdeltaforce.com" target="_blank" rel="noopener noreferrer">Delta Force</a>',
	status: '<a href="https://www.playdeltaforce.com" target="_blank" rel="noopener noreferrer">Delta Force Support</a>',
	ricochet: '<a href="https://www.playdeltaforce.com" target="_blank" rel="noopener noreferrer">Ricochet Anti-Cheat</a>',
};
