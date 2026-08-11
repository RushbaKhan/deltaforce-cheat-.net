#!/usr/bin/env node
/**
 * Warzone Hacks → Delta Force Cheats rebrand.
 * Run from project root: node scripts/adapt-delta-force.mjs
 */
import { readFile, writeFile, readdir, rm, rename, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['warzone-hacks', 'delta-force-cheats'],
	['warzone-esp', 'delta-force-esp'],
	['warzone-aimbot', 'delta-force-aimbot'],
	['warzone-wallhack', 'delta-force-wallhack'],
	['warzone-radar-hack', 'delta-force-radar'],
	['undetected-warzone-cheats', 'undetected-delta-force-cheats'],
	['ricochet-bypass', 'delta-force-anti-cheat-bypass'],
	['warzone-cheats-2026', 'delta-force-cheats-2026'],
	['warzone-cheat-download', 'delta-force-cheat-download'],
	['warzone-mod-menu', 'delta-force-cheat-menu'],
	['warzone-soft-aim', 'delta-force-aim-assist'],
	['best-warzone-cheats', 'best-delta-force-cheats'],
	['warzone-aimbot-hack', 'delta-force-aimbot-hack'],
	['warzone-esp-hack', 'delta-force-esp-hack'],
	['warzone-unlock-all', 'delta-force-cloud-dma'],
];

const SKIP_DIRS = new Set(['node_modules', '.git', '.astro', 'dist']);

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['warzonehacks.net', 'deltaforcecheat.net'],
	['support@warzonehacks.net', 'support@deltaforcecheat.net'],
	['https://zadeyo.com/go/AMAN?to=%2Fproducts%2Fwarzone', 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Fdelta-force'],
	['/products/warzone', '/products/delta-force'],
	['warzone-esp-hack', 'delta-force-esp-hack'],
	['warzone-aimbot-hack', 'delta-force-aimbot-hack'],
	['undetected-warzone-cheats', 'undetected-delta-force-cheats'],
	['warzone-cheats-2026', 'delta-force-cheats-2026'],
	['warzone-radar-hack', 'delta-force-radar'],
	['warzone-wallhack', 'delta-force-wallhack'],
	['ricochet-bypass', 'delta-force-anti-cheat-bypass'],
	['warzone-cheat-download', 'delta-force-cheat-download'],
	['warzone-mod-menu', 'delta-force-cheat-menu'],
	['warzone-soft-aim', 'delta-force-aim-assist'],
	['best-warzone-cheats', 'best-delta-force-cheats'],
	['warzone-unlock-all', 'delta-force-cloud-dma'],
	['warzone-hacks', 'delta-force-cheats'],
	['warzone-aimbot', 'delta-force-aimbot'],
	['warzone-esp', 'delta-force-esp'],
	["'warzone-esp'", "'delta-force-esp'"],
	["'warzone-aimbot'", "'delta-force-aimbot'"],
	['| warzone-esp', '| delta-force-esp'],
	['| warzone-aimbot', '| delta-force-aimbot'],
	['/images/warzone-', '/images/delta-force-'],
	['warzone-hacks-logo', 'delta-force-cheats-logo'],
	['Warzone Hacks', 'Delta Force Cheats'],
	['Warzone Cheats', 'Delta Force Cheats'],
	['Warzone cheats', 'Delta force cheats'],
	['Warzone cheat', 'Delta Force cheat'],
	['Warzone Intel', 'Delta Force Intel'],
	['warzone hacks', 'delta force cheats'],
	['warzone cheats', 'delta force cheats'],
	['warzone hack', 'delta force cheat'],
	['warzone esp', 'delta force esp'],
	['warzone aimbot', 'delta force aimbot'],
	['Warzone ESP', 'Delta Force ESP'],
	['Warzone Aimbot', 'Delta Force Aimbot'],
	['Warzone', 'Delta Force'],
	['warzone', 'delta-force'],
	['Call of Duty Warzone', 'Delta Force'],
	['call-of-duty-warzone', 'delta-force'],
	['Activision Support', 'Delta Force Support'],
	['support.activision.com', 'www.playdeltaforce.com'],
	['callofduty.com/warzone', 'playdeltaforce.com'],
	['callofduty.com/ricochet', 'playdeltaforce.com'],
	['Battle Royale, Resurgence', 'Hazard Operations and Warfare'],
	['Battle Royale and Resurgence', 'Hazard Operations and Warfare'],
	['BR and Resurgence', 'Hazard Operations and Warfare'],
	['Verdansk, Urzikstan, and Rebirth Island', 'Hazard Operations and Warfare maps'],
	['Resurgence', 'Hazard Operations'],
	['project-name=warzonehacks', 'project-name=deltaforcecheat'],
	['name = "warzonehacks"', 'name = "deltaforcecheat"'],
	['what-are-warzone-hacks', 'what-are-delta-force-cheats'],
	['are-warzone-hacks-undetected-in-2026', 'are-delta-force-cheats-undetected-in-2026'],
	['what-is-a-warzone-wallhack', 'what-is-a-delta-force-wallhack'],
	['does-warzone-hacks-include-radar-hack', 'does-delta-force-cheats-include-radar-hack'],
	['ricochet-anti-cheat-and-warzone-hacks', 'ricochet-anti-cheat-and-delta-force-cheats'],
	['buy-undetected-warzone-cheats-windows-pc', 'buy-undetected-delta-force-cheats-windows-pc'],
	['battle-royale-and-resurgence', 'hazard-operations-and-warfare'],
];

const ZADEYO_TEXT_PATTERNS = [
	/\s*[—–-]\s*checkout (?:via|en|über) Zadeyo\.?/gi,
	/\s*with Zadeyo checkout\.?/gi,
	/\s*via Zadeyo checkout\.?/gi,
	/\s*Checkout via Zadeyo\.?/gi,
	/\s*Zadeyo checkout,?\s*/gi,
	/\s*Zadeyo delivery\.?/gi,
	/\s*and Zadeyo delivery\.?/gi,
	/\|\s*Instant Zadeyo Delivery/gi,
	/Buy on Zadeyo/gi,
	/checkout Zadeyo/gi,
	/vía checkout Zadeyo/gi,
	/Zadeyo order references/gi,
	/processed by Zadeyo checkout/gi,
	/Zadeyo/gi,
];

const TEXT_EXT = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.md', '.txt', '.toml', '.svg',
]);

async function walk(dir, files = []) {
	for (const ent of await readdir(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(ent.name)) continue;
		const full = path.join(dir, ent.name);
		if (ent.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let out = content;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	for (const re of ZADEYO_TEXT_PATTERNS) {
		out = out.replace(re, (match) => {
			if (/Buy on/i.test(match)) return 'Buy Delta Force Cheats';
			if (/Instant Zadeyo/i.test(match)) return '| Instant Digital Delivery';
			if (/processed by/i.test(match)) return 'processed by secure checkout';
			if (/order references/i.test(match)) return 'order references';
			if (/checkout/i.test(match)) return ' instant digital delivery';
			return '';
		});
	}
	return out.replace(/\s{2,}/g, ' ').replace(/ \./g, '.').replace(/ ,/g, ',');
}

async function renamePageDirs() {
	const pagesDir = path.join(ROOT, 'src', 'pages');
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(pagesDir, from);
		const dst = path.join(pagesDir, to);
		try {
			await rename(src, dst);
			console.log(`  renamed pages/${from} → ${to}`);
		} catch {
			/* already renamed */
		}
	}
}

async function renameWarzoneTs() {
	const src = path.join(ROOT, 'src', 'data', 'warzone.ts');
	const dst = path.join(ROOT, 'src', 'data', 'delta-force.ts');
	try {
		let content = await readFile(src, 'utf8');
		content = content
			.replace('deltaForceImages', 'deltaForceImages')
			.replace(/Warzone hacks/g, 'Delta Force cheats')
			.replace(/warzone-/g, 'delta-force-');
		await writeFile(dst, content, 'utf8');
		await rm(src, { force: true });
		console.log('  warzone.ts → delta-force.ts');
	} catch {
		/* ok */
	}
}

async function patchImports() {
	const files = await walk(ROOT);
	for (const file of files) {
		if (!TEXT_EXT.has(path.extname(file))) continue;
		let content = await readFile(file, 'utf8');
		const next = content
			.replace(/from ['"]\.\/warzone['"]/g, "from './delta-force'")
			.replace(/from ['"]\.\.\/data\/warzone['"]/g, "from '../data/delta-force'")
			.replace(/from ['"]\.\.\/\.\.\/data\/warzone['"]/g, "from '../../data/delta-force'")
			.replace(/deltaForceImages/g, 'deltaForceImages');
		if (next !== content) await writeFile(file, next, 'utf8');
	}
}

async function replaceAllText() {
	const files = await walk(ROOT);
	let count = 0;
	for (const file of files) {
		if (!TEXT_EXT.has(path.extname(file))) continue;
		if (file.includes('adapt-delta-force.mjs')) continue;
		const raw = await readFile(file, 'utf8');
		const next = applyReplacements(raw);
		if (next !== raw) {
			await writeFile(file, next, 'utf8');
			count++;
		}
	}
	console.log(`  updated ${count} text files`);
}

async function fixGenerateI18nValidation() {
	const file = path.join(ROOT, 'scripts', 'generate-i18n-content.mjs');
	let content = await readFile(file, 'utf8');
	content = content
		.replace(
			"!p.heroImage?.startsWith('/images/warzone') && !p.heroImage?.startsWith('/images/call-of-duty-warzone')",
			"!p.heroImage?.startsWith('/images/delta-force') && !p.heroImage?.startsWith('/images/hero-banner')",
		)
		.replace(/'warzone-esp', 'warzone-aimbot'/g, "'delta-force-esp', 'delta-force-aimbot'");
	await writeFile(file, content, 'utf8');
}

async function fixConstants() {
	const file = path.join(ROOT, 'scripts', 'i18n-data', 'constants.mjs');
	let content = await readFile(file, 'utf8');
	content = content
		.replace(/'warzone-esp', 'warzone-aimbot'/g, "'delta-force-esp', 'delta-force-aimbot'")
		.replace(/'warzone-esp'/g, "'delta-force-esp'")
		.replace(/'warzone-aimbot'/g, "'delta-force-aimbot'")
		.replace(/\/images\/warzone-/g, '/images/delta-force-')
		.replace(
			"activision: '<a href=\"https://www.callofduty.com/warzone\"",
			"activision: '<a href=\"https://www.playdeltaforce.com\"",
		)
		.replace(
			"warzone: '<a href=\"https://www.callofduty.com/warzone\"",
			"warzone: '<a href=\"https://www.playdeltaforce.com\"",
		)
		.replace('Call of Duty Warzone', 'Delta Force')
		.replace(
			"status: '<a href=\"https://support.activision.com/\"",
			"status: '<a href=\"https://www.playdeltaforce.com\"",
		)
		.replace('Activision Support', 'Delta Force')
		.replace('Buy Warzone Hacks', 'Buy Delta Force Cheats');
	await writeFile(file, content, 'utf8');
}

async function main() {
	console.log('Delta Force rebrand…');
	await renamePageDirs();
	await renameWarzoneTs();
	await replaceAllText();
	await patchImports();
	await fixGenerateI18nValidation();
	await fixConstants();
	console.log('Done. Run: npm run generate:i18n && npm run sync:brand');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
