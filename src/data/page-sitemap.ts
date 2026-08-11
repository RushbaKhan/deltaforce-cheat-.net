import { siteConfig } from './site';
import { deltaForceImages } from './delta-force';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import { pageSitemapImageLabels, resolvedSitemapImages, sitemapLastmod,
} from './brand-sitemap'; export type SitemapImage = { url: string; title: string; caption: string;
}; export type PageSitemapEntry = { path: string; priority: number; changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'; lastmod: string; images: SitemapImage[];
}; const abs = (path: string) => new URL(path, siteConfig.url).href; const img = (path: string, title: string, caption: string): SitemapImage => ({ url: abs(path), title, caption,
}); /** * One screenshot per page — paths stay in deltaForceImages; titles/captions from brand tokens. */
const pageImageSrcById: Record<PageId, string> = { home: deltaForceImages.hero, 'delta-force-esp': deltaForceImages.playerEsp, 'delta-force-aimbot': deltaForceImages.aimbotCombat, features: deltaForceImages.aimbotSkeleton, pricing: deltaForceImages.cheatsCombat, setup: deltaForceImages.playerEsp, updates: deltaForceImages.hero, faq: deltaForceImages.aimbotSkeleton, support: deltaForceImages.cheatsCombat, undetected: deltaForceImages.espWallhack, wallhack: deltaForceImages.espWallhack, radar: deltaForceImages.playerEsp, ricochet: deltaForceImages.aimbotCombat, 'cheats-2026': deltaForceImages.hero, hacks: deltaForceImages.cheatsCombat, 'cheat-download': deltaForceImages.cheatsCombat, 'mod-menu': deltaForceImages.playerEsp, 'soft-aim': deltaForceImages.aimbotSkeleton, 'best-cheats': deltaForceImages.hero, 'aimbot-hack': deltaForceImages.aimbotSkeleton, 'esp-hack': deltaForceImages.espWallhack, 'unlock-all': deltaForceImages.playerEsp, privacy: deltaForceImages.aimbotCombat, refund: deltaForceImages.cheatsCombat, terms: deltaForceImages.aimbotSkeleton,
}; for (const pageId of pageIds) { if (!pageImageSrcById[pageId]) { throw new Error(`[sitemap] No image path configured for pageId: ${pageId}`); }
} /** * Canonical English sitemap entries — always includes every pageId from routing. * Absolute locs use siteConfig.url (from brand.url). */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => { const meta = pageSitemapMeta[pageId]; const labels = pageSitemapImageLabels(pageId); return { path: englishPaths[pageId], priority: meta.priority, changefreq: meta.changefreq, lastmod: sitemapLastmod(meta.lastmod), images: [img(pageImageSrcById[pageId], labels.title, labels.caption)], };
}); /** Unique keyword images for the dedicated image sitemap (editable in Brand Studio). */
export const imageSitemapEntries: SitemapImage[] = resolvedSitemapImages().map((entry) => img(entry.src, entry.title, entry.caption),
); export function absolutePageUrl(path: string): string { return abs(path);
} export function absoluteAssetUrl(path: string): string { return abs(path);
}
