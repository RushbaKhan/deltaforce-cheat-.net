/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Delta Force Cheats',
	/** Short product label if needed */
	shortName: 'Delta Force',
	/** Canonical origin — no trailing slash */
	url: 'https://deltaforcecheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@deltaforcecheat.net',
	checkoutUrl: 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fdelta-force',

	/** Game this template instance targets */
	game: 'Delta Force',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'G.T.I. Security',

	logo: '/images/delta-force-cheats-logo.webp',
	logoRaster: '/images/delta-force-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Delta Force cheats logo',
	defaultOgImage: '/images/hero-banner.webp',
	heroImage: '/images/hero-banner.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#8b5cf6',
		bg: '#0d0d0d',
		soft: '#a78bfa',
		deep: '#5b21b6',
		hover: '#9f7aea',
		panel: '#09080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'delta force cheats',
		list: [
			'delta force cheats',
			'delta force esp',
			'delta force aimbot',
			'delta force wallhack',
			'delta force cheat download',
			'undetected delta force cheats',
			'delta force cloud dma',
			'best delta force cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Delta Force Cheats - ESP, Aimbot & Wallhack',
		homeDescription: 'Delta Force cheats with ESP, aimbot, and wallhack for Windows PC. Undetected software with Ricochet maintenance, cloud DMA option, and instant delivery.',
		featuresTitle: 'Delta Force Cheat Features | ESP, Aimbot & More',
		featuresDescription: 'Full Delta Force cheat feature list — player ESP, weapon ESP, gadget ESP, vehicle ESP, no recoil, stream-proof overlay, and anti-cheat bypass.',
		storeTitle: 'Buy Delta Force Cheats | Monthly & Lifetime',
		storeDescription: 'Buy Delta Force cheats online — monthly and lifetime plans. Same ESP, aimbot, and wallhack features. Instant digital delivery for PC.',
		statusTitle: 'Delta Force Cheats Status | Patch Updates',
		statusDescription: 'Live status for Delta Force cheats after game or Ricochet patches. Check before you queue in Hazard Operations or Warfare.',
		previewTitle: 'Delta Force Cheats Preview | In-Game Screenshots',
		previewDescription: 'Preview Delta Force cheats — player ESP, chams overlay, aimbot controls, and season updates for Windows PC.',
		setupTitle: 'Delta Force Cheat Setup | Install Guide',
		setupDescription: 'Install Delta Force cheat software on Windows PC. Quick load injection steps after you buy a license.',
		supportTitle: 'Delta Force Cheats Support',
		supportDescription: 'Get help with Delta Force cheat licenses and setup. Email support@deltaforcecheat.net with your order ID.',
		faqTitle: 'Delta Force Cheats FAQ',
		faqDescription: 'Answers about Delta Force cheats — ESP, aimbot, delivery, Ricochet updates, cloud DMA, and refunds.',
		reviewsTitle: 'Delta Force Cheats Reviews | Player Feedback',
		reviewsDescription: 'Real reviews for Delta Force cheats — ESP, aimbot, cloud DMA, and patch updates on Windows PC.',
		blogTitle: 'Delta Force Intel | Guides & Updates',
		blogDescription: 'Guides for Delta Force — ESP tips, aimbot settings, Ricochet updates, and season patch notes.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected Delta Force cheats — ESP, aimbot, and wallhack for PC',
		summary: 'Delta Force Cheats is undetected cheat software for Windows PC. Player ESP, weapon ESP, advanced aimbot, no recoil, and Ricochet bypass with regular season updates.',
		heroLede: 'Delta Force cheats with ESP, aimbot, and wallhack — built for PC.',
		blogLabel: 'Delta Force Intel',
		ctaBuy: 'Buy cheats',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one Delta Force cheat license for Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a Delta Force or G.T.I. Security patch before you play.',
		previewIntro: 'A quick look at Delta Force cheats — ESP, aimbot, chams, and season updates.',
		setupIntro: 'Install Delta Force cheat software on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help? Email support@deltaforcecheat.net with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from Delta Force cheat buyers — ESP, aimbot, cloud DMA, and support.',
		chipEsp: 'Player ESP',
		chipAim: 'Advanced aimbot',
		chipRadar: 'Gadget ESP',
		chipUpdates: 'Season updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-11',
		blogImageTitle: 'Delta Force cheats blog',
		blogImageCaption: 'Tips and updates for delta force cheats',
		reviewsImageTitle: 'Delta Force cheats reviews',
		reviewsImageCaption: 'What buyers say about delta force cheats',
		images: [
			{
				src: '/images/delta-force-preview-chams-1.webp',
				title: 'Delta Force cheats ESP chams',
				caption: 'Player ESP with class identification in Delta Force',
			},
			{
				src: '/images/delta-force-preview-chams-2.webp',
				title: 'Delta Force cheats overlay',
				caption: 'Stream-proof ESP overlay for Delta Force on PC',
			},
			{
				src: '/images/hero-banner.webp',
				title: 'Delta Force cheats',
				caption: 'Undetected Delta Force cheat software for PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
