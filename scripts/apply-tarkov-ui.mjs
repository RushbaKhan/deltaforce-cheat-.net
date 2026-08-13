import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const REF = path.resolve(ROOT, '..', 'tarkovcheats-ref');

const COPY = [
	'src/styles/global.css',
	'src/components',
	'src/layouts',
];

const REPLACEMENTS = [
	[/tarkovImages/g, 'deltaForceImages'],
	[/from '\.\.\/data\/tarkov'/g, "from '../data/delta-force'"],
	[/from '\.\/tarkov'/g, "from './delta-force'"],
	[/getLocalizedPath\('tarkov-esp'/g, "getLocalizedPath('delta-force-esp'"],
	[/getLocalizedPath\('tarkov-aimbot'/g, "getLocalizedPath('delta-force-aimbot'"],
	[/\/tarkov-esp\//g, '/delta-force-esp/'],
	[/\/tarkov-aimbot\//g, '/delta-force-aimbot/'],
	[/\/tarkov-radar-hack\//g, '/delta-force-radar/'],
	[/\/undetected-tarkov-cheats\//g, '/undetected-delta-force-cheats/'],
	[/\/tarkov-cheats\//g, '/delta-force-cheats/'],
	[/\/battleye-bypass\//g, '/delta-force-anti-cheat-bypass/'],
	[/alt="tarkov cheats"/g, 'alt={siteConfig.name}'],
	[/heroAlt = 'tarkov cheats'/g, "heroAlt = siteConfig.name"],
];

function walk(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];
	for (const e of entries) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) files.push(...walk(p));
		else files.push(p);
	}
	return files;
}

function patch(content) {
	let out = content;
	for (const [re, rep] of REPLACEMENTS) {
		out = out.replace(re, rep);
	}
	return out;
}

function copyFile(rel) {
	const src = path.join(REF, rel);
	const dest = path.join(ROOT, rel);
	if (!fs.existsSync(src)) {
		console.warn('skip missing', rel);
		return;
	}
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	let content = fs.readFileSync(src, 'utf8');
	content = patch(content);
	fs.writeFileSync(dest, content, 'utf8');
	console.log('copied', rel);
}

for (const item of COPY) {
	const srcPath = path.join(REF, item);
	if (!fs.existsSync(srcPath)) {
		console.warn('missing', item);
		continue;
	}
	if (fs.statSync(srcPath).isDirectory()) {
		for (const file of walk(srcPath)) {
			if (!file.endsWith('.astro') && !file.endsWith('.css')) continue;
			const rel = path.relative(REF, file);
			copyFile(rel);
		}
	} else {
		copyFile(item);
	}
}

console.log('done');
