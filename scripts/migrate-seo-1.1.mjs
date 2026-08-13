#!/usr/bin/env node
/**
 * Port SEO-1.1 template infrastructure onto deltaforcecheat.net
 * while preserving Delta Force brand, copy, images, and routing slugs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REF = path.resolve(ROOT, '..', 'SEO-1.1-ref');

const SKIP_DIRS = new Set([
	'node_modules',
	'dist',
	'.git',
	'.astro',
	'images', // keep delta images
]);

const PRESERVE_FILES = new Set([
	'src/data/brand.ts',
	'src/data/delta-force.ts',
	'src/data/i18n/content.generated.ts',
	'src/data/i18n/routing.ts',
	'src/data/site.ts',
	'src/data/reviews.ts',
	'src/data/faq.ts',
	'src/data/blog/posts.ts',
]);

const PATCHES = [
	[/tarkovImages/g, 'deltaForceImages'],
	[/from '\.\.\/data\/tarkov'/g, "from '../data/delta-force'"],
	[/from '\.\/tarkov'/g, "from './delta-force'"],
	[/from '\.\.\/\.\.\/data\/tarkov'/g, "from '../../data/delta-force'"],
	[/getLocalizedPath\('tarkov-esp'/g, "getLocalizedPath('delta-force-esp'"],
	[/getLocalizedPath\('tarkov-aimbot'/g, "getLocalizedPath('delta-force-aimbot'"],
	[/pageId="tarkov-esp"/g, 'pageId="delta-force-esp"'],
	[/pageId="tarkov-aimbot"/g, 'pageId="delta-force-aimbot"'],
	[/pageId: 'tarkov-esp'/g, "pageId: 'delta-force-esp'"],
	[/pageId: 'tarkov-aimbot'/g, "pageId: 'delta-force-aimbot'"],
	[/\/tarkov-esp\//g, '/delta-force-esp/'],
	[/\/tarkov-aimbot\//g, '/delta-force-aimbot/'],
	[/\/tarkov-radar-hack\//g, '/delta-force-radar/'],
	[/\/undetected-tarkov-cheats\//g, '/undetected-delta-force-cheats/'],
	[/\/tarkov-cheats\//g, '/delta-force-cheats/'],
	[/\/tarkov-cheats-2026\//g, '/delta-force-cheats-2026/'],
	[/\/battleye-bypass\//g, '/delta-force-anti-cheat-bypass/'],
	[/\/tarkov-mod-menu\//g, '/delta-force-cheat-menu/'],
	[/\/tarkov-soft-aim\//g, '/delta-force-aim-assist/'],
	[/\/tarkov-unlock-all\//g, '/delta-force-cloud-dma/'],
	[/\/tarkov-cheat-download\//g, '/delta-force-cheat-download/'],
	[/\/best-tarkov-cheats\//g, '/best-delta-force-cheats/'],
	[/\/tarkov-aimbot-hack\//g, '/delta-force-aimbot-hack/'],
	[/\/tarkov-esp-hack\//g, '/delta-force-esp-hack/'],
	[/\/tarkov-wallhack\//g, '/delta-force-wallhack/'],
	[/alt="tarkov cheats"/gi, 'alt={siteConfig.name}'],
	[/heroAlt = 'tarkov cheats'/g, 'heroAlt = siteConfig.name'],
	[/https:\/\/tarkovcheats\.org/g, 'https://deltaforcecheat.net'],
	[/tarkovcheats\.org/g, 'deltaforcecheat.net'],
	[/CANONICAL_HOST = 'tarkovcheats\.org'/g, "CANONICAL_HOST = 'deltaforcecheat.net'"],
	[/name = "tarkovcheats"/g, 'name = "deltaforcecheat"'],
	[/project-name=tarkovcheats/g, 'project-name=deltaforcecheat'],
	[/site: 'https:\/\/tarkovcheats\.org'/g, "site: 'https://deltaforcecheat.net'"],
	[/"name": "tarkov-cheats"/g, '"name": "deltaforcecheat"'],
];

function walk(dir, base = dir) {
	const out = [];
	for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(ent.name)) continue;
		const full = path.join(dir, ent.name);
		const rel = path.relative(base, full).replace(/\\/g, '/');
		if (ent.isDirectory()) out.push(...walk(full, base));
		else out.push(rel);
	}
	return out;
}

function patch(content) {
	let out = content;
	for (const [re, rep] of PATCHES) out = out.replace(re, rep);
	return out;
}

function copyFromRef(rel) {
	if (PRESERVE_FILES.has(rel)) return;
	const src = path.join(REF, rel);
	const dest = path.join(ROOT, rel);
	if (!fs.existsSync(src)) return;
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	let content = fs.readFileSync(src, 'utf8');
	if (/\.(astro|ts|tsx|js|mjs|css|json|toml|md|txt|html)$/.test(rel)) {
		content = patch(content);
	}
	fs.writeFileSync(dest, content);
	console.log('copied', rel);
}

// Copy all ref files
for (const rel of walk(REF, REF)) {
	copyFromRef(rel);
}

// Delta-specific seo-cannibal-map
fs.writeFileSync(
	path.join(ROOT, 'src/data/seo-cannibal-map.ts'),
	`/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'hacks',
	'cheats-2026': 'hacks',
	undetected: 'hacks',
	'mod-menu': 'hacks',
	'unlock-all': 'hacks',
	'aimbot-hack': 'delta-force-aimbot',
	'soft-aim': 'delta-force-aimbot',
	'esp-hack': 'delta-force-esp',
	wallhack: 'delta-force-esp',
	'cheat-download': 'setup',
	ricochet: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
`,
);

// Delta seo-canonical
fs.writeFileSync(
	path.join(ROOT, 'src/data/seo-canonical.ts'),
	`import type { PageId } from './i18n/routing';
import {
	cannibalPageIds,
	cannibalRedirectTargets,
	getCannibalTargetId,
	isCannibalPageId,
	type CannibalPageId,
} from './seo-cannibal-map';

export {
	cannibalPageIds,
	cannibalRedirectTargets,
	isCannibalPageId,
	type CannibalPageId,
};

export const sitemapExcludedPageIds = new Set<PageId>(cannibalPageIds as PageId[]);

/** Primary commercial landing for the head term "delta force cheats". */
export const MONEY_PAGE_ID = 'hacks' as const satisfies PageId;
export const MONEY_PATH = '/delta-force-cheats/' as const;

export function getCannibalTarget(pageId: PageId): PageId {
	return getCannibalTargetId(pageId) as PageId;
}
`,
);

// page-images.ts for delta
fs.writeFileSync(
	path.join(ROOT, 'src/data/page-images.ts'),
	`import { deltaForceImages } from './delta-force';

/** Default crawl / schema image when a page has no dedicated hero. */
export const defaultCrawlImageSrc = deltaForceImages.hero;
export const productGalleryImages = deltaForceImages.gallery;
export const productPreviewImages = deltaForceImages.product;
`,
);

// worker.ts for delta
fs.writeFileSync(
	path.join(ROOT, 'src/worker.ts'),
	`/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://deltaforcecheat.net (matches brand.url)
 */
export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'deltaforcecheat.net';

const LEGACY_HOSTS = new Set([
	'www.deltaforcecheat.net',
	'delta-forcescheats.net',
	'www.delta-forcescheats.net',
	'delta-forcescheats.com',
	'www.delta-forcescheats.com',
]);

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (host === \`www.\${CANONICAL_HOST}\` || LEGACY_HOSTS.has(host)) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const target = canonicalUrl(request);
		if (target) {
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
`,
);

// Merge cannibal into routing.ts
const routingPath = path.join(ROOT, 'src/data/i18n/routing.ts');
let routing = fs.readFileSync(routingPath, 'utf8');
if (!routing.includes('seo-cannibal-map')) {
	routing = routing.replace(
		"import { siteConfig } from '../site';",
		"import { siteConfig } from '../site';\nimport { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';",
	);
	if (!routing.includes('localizeInternalHref')) {
		const insert = `
/** Rewrite internal links from cannibal URLs to pillar URLs (same locale). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	const url = new URL(href, siteConfig.url);
	const ctx = resolvePageContextFromPath(url.pathname);
	if (!ctx.pageId || !isCannibalPageId(ctx.pageId)) return href;
	const targetId = getCannibalTargetId(ctx.pageId) as PageId;
	return getLocalizedPath(targetId, ctx.locale ?? locale);
}
`;
		routing = routing.replace(
			/export function getLocalizedPath\(/,
			`${insert}\nexport function getLocalizedPath(`,
		);
	}
	const oldGetLocalized = /export function getLocalizedPath\(pageId: PageId, locale: LocaleCode = defaultLocale\): string \{[\s\S]*?^\}/m;
	if (oldGetLocalized.test(routing) && !routing.includes('getCannibalTargetId(pageId)')) {
		routing = routing.replace(
			/export function getLocalizedPath\(pageId: PageId, locale: LocaleCode = defaultLocale\): string \{/,
			`export function getLocalizedPath(pageId: PageId, locale: LocaleCode = defaultLocale): string {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;`,
		);
		routing = routing.replace(
			/if \(locale === defaultLocale\) \{\s*return englishPaths\[pageId\]/,
			`if (locale === defaultLocale) {
		return englishPaths[resolvedId]`,
		);
		routing = routing.replace(
			/const slug = localizedSlugs\[pageId\]/,
			'const slug = localizedSlugs[resolvedId]',
		);
	}
	fs.writeFileSync(routingPath, routing);
	console.log('patched routing.ts cannibal support');
}

// package.json merge
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const refPkg = JSON.parse(fs.readFileSync(path.join(REF, 'package.json'), 'utf8'));
pkg.scripts = { ...refPkg.scripts, ...pkg.scripts };
pkg.scripts['sync:brand'] = 'node scripts/sync-brand.mjs && node scripts/sync-cannibal-redirects.mjs';
pkg.scripts.prebuild = pkg.scripts['sync:brand'];
pkg.scripts['validate:sitemaps'] =
	'node scripts/validate-sitemaps.mjs && node scripts/audit-sitemap-deep.mjs';
pkg.scripts.deploy = 'npm run build && wrangler deploy';
pkg.scripts['fetch:images'] = 'node scripts/fetch-warzone-images.mjs';
pkg.dependencies = { ...refPkg.dependencies, ...pkg.dependencies };
pkg.devDependencies = { ...refPkg.devDependencies, ...pkg.devDependencies };
pkg.name = 'deltaforcecheat';
fs.writeFileSync(path.join(ROOT, 'package.json'), `${JSON.stringify(pkg, null, '\t')}\n`);

console.log('migration complete');
