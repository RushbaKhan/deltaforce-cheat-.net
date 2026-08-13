#!/usr/bin/env node
/** Final pass: fix remaining Tarkov references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['deltaForceImages', 'deltaForceImages'],
	["from '../data/delta-force'", "from '../data/delta-force'"],
	["from './delta-force'", "from './delta-force'"],
	['/undetected-delta-force-cheats/', '/undetected-delta-force-cheats/'],
	['/delta-force-wallhack/', '/delta-force-wallhack/'],
	['/delta-force-radar/', '/delta-force-radar/'],
	['/delta-force-anti-cheat-bypass/', '/delta-force-anti-cheat-bypass/'],
	['/delta-force-cheats-2026/', '/delta-force-cheats-2026/'],
	['/delta-force-aimbot/', '/delta-force-aimbot/'],
	['/delta-force-esp/', '/delta-force-esp/'],
	['/delta-force-cheats/', '/delta-force-esp/'],
	['Tarkov Cheats', 'Tarkov Cheats'],
	['Tarkov cheats', 'Tarkov cheats'],
	['Tarkov wallhack', 'Escape from Tarkov wallhack'],
	['Tarkov radar', 'Escape from Tarkov radar'],
	['Tarkov Aimbot', 'Escape from Tarkov Aimbot'],
	['Tarkov ESP', 'Escape from Tarkov ESP'],
	['Escape from Tarkov', 'Escape from Tarkov'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['deltaforcecheat.net', 'deltaforcecheat.net'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
