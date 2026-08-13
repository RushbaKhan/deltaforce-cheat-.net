import { siteConfig } from './site';
import { deltaForceImages } from './delta-force';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	deltaForceImages.espWallhack,
	deltaForceImages.aimbotCombat,
	deltaForceImages.aimbotSkeleton,
	deltaForceImages.playerEsp,
	deltaForceImages.cheatsCombat,
	deltaForceImages.product[0].src,
] as const;

/** One primary crawl/OG photo per product page. */
export const pageImageSrcById: Record<PageId, string> = {
	home: deltaForceImages.hero,
	'delta-force-esp': deltaForceImages.playerEsp,
	'delta-force-aimbot': deltaForceImages.aimbotCombat,
	features: deltaForceImages.aimbotSkeleton,
	pricing: deltaForceImages.cheatsCombat,
	setup: deltaForceImages.playerEsp,
	updates: deltaForceImages.hero,
	faq: deltaForceImages.aimbotSkeleton,
	support: deltaForceImages.cheatsCombat,
	undetected: deltaForceImages.espWallhack,
	wallhack: deltaForceImages.espWallhack,
	radar: deltaForceImages.playerEsp,
	ricochet: deltaForceImages.aimbotCombat,
	'cheats-2026': deltaForceImages.hero,
	hacks: deltaForceImages.cheatsCombat,
	'cheat-download': deltaForceImages.cheatsCombat,
	'mod-menu': deltaForceImages.playerEsp,
	'soft-aim': deltaForceImages.aimbotSkeleton,
	'best-cheats': deltaForceImages.hero,
	'aimbot-hack': deltaForceImages.aimbotSkeleton,
	'esp-hack': deltaForceImages.espWallhack,
	'unlock-all': deltaForceImages.playerEsp,
	privacy: deltaForceImages.aimbotCombat,
	refund: deltaForceImages.cheatsCombat,
	terms: deltaForceImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
export const productGalleryImages = deltaForceImages.gallery;
export const productPreviewImages = deltaForceImages.product;
