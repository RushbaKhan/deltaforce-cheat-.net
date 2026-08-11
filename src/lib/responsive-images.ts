export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (name.endsWith('-640w') || name.endsWith('-960w') || name.endsWith('-1400w')) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/** Hero banner srcset — 640w through 4K (3840w). */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/hero-banner-640w.webp', width: 640 },
	{ src: '/images/hero-banner-960w.webp', width: 960 },
	{ src: '/images/hero-banner-1280w.webp', width: 1280 },
	{ src: '/images/hero-banner-1920w.webp', width: 1920 },
	{ src: '/images/hero-banner-2560w.webp', width: 2560 },
	{ src: '/images/hero-banner.webp', width: 3840 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

export const heroSrc = '/images/hero-banner.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** Preload 2560w on desktop for sharper retina rendering. */
export const heroPreloadSrc = '/images/hero-banner-2560w.webp';

/** Intrinsic dimensions for 4K hero (matches hero-banner.webp). */
export const heroWidth = 3840;
export const heroHeight = 1365;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
