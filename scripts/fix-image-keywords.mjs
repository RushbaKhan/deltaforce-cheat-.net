#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'tarkov cheats', espWallhack: 'tarkov cheats wallhack', aimbotCombat: 'tarkov cheats aimbot', squadFight: 'tarkov cheats', playerEsp: 'tarkov cheats esp', headerArt: 'tarkov cheats aimbot', cheatsPackage: 'tarkov cheats radar', rebootFight: 'tarkov cheats aimbot', battleRoyale: 'tarkov cheats', battleRoyaleIsland: 'tarkov cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Tarkov ESP player tags hack'", "imageAlt: 'tarkov cheats esp'"],
	["imageAlt: 'Tarkov ESP radar hack'", "imageAlt: 'tarkov cheats radar'"],
	["imageAlt: 'Tarkov aimbot sniper kill'", "imageAlt: 'tarkov cheats aimbot'"],
	["imageAlt: 'Tarkov aimbot skeleton targeting'", "imageAlt: 'tarkov cheats aimbot'"],
	["imageAlt: 'Tarkov cheats ADS combat'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats setup PC activation'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats updates BattlEye maintenance'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats FAQ ESP aimbot'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats support license help'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Undetected tarkov cheats ESP wallhack'", "imageAlt: 'undetected tarkov cheats'"],
	["imageAlt: 'Tarkov wallhack skeleton ESP'", "imageAlt: 'tarkov cheats wallhack'"],
	["imageAlt: 'BattlEye bypass tarkov ESP aimbot'", "imageAlt: 'tarkov cheats battleye'"],
	["imageAlt: 'Tarkov cheats 2026 ESP aimbot'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats combat aimbot'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheat download ESP aimbot'", "imageAlt: 'tarkov cheats download'"],
	["imageAlt: 'Tarkov mod menu ESP aimbot'", "imageAlt: 'tarkov cheats mod menu'"],
	["imageAlt: 'Tarkov soft aim aimbot settings'", "imageAlt: 'tarkov cheats soft aim'"],
	["imageAlt: 'Best tarkov cheats 2026 ESP'", "imageAlt: 'best tarkov cheats'"],
	["imageAlt: 'Tarkov aimbot hack combat'", "imageAlt: 'tarkov cheats aimbot'"],
	["imageAlt: 'Tarkov ESP hack wallhack'", "imageAlt: 'tarkov cheats esp'"],
	["imageAlt: 'Tarkov unlock all ESP aimbot guide'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats privacy policy'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats refund policy'", "imageAlt: 'tarkov cheats'"],
	["imageAlt: 'Tarkov cheats terms of use'", "imageAlt: 'tarkov cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Tarkov ${meta.altKeyword}`")
	.join("imageAlt: 'tarkov cheats'")
	.split("galleryTitle: `Tarkov Cheats ${topicName}`")
	.join("galleryTitle: 'tarkov cheats'")
	.split("imageAlt: `Tarkov cheats ${kind} policy`")
	.join("imageAlt: 'tarkov cheats'")
	.split("galleryTitle: `Tarkov Cheats ${kind} resources`")
	.join("galleryTitle: 'tarkov cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
