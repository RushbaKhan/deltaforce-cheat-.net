/**
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

	if (host === `www.${CANONICAL_HOST}` || LEGACY_HOSTS.has(host)) {
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
