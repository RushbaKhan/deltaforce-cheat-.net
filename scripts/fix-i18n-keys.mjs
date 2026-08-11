#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand'); const UI_REPLACEMENTS = [ ['Delta Force Cheats', 'Delta Force Cheats'], ['Delta force cheats', 'Delta force cheats'], ['Delta Force Cheats', 'Delta Force Cheats'], ['Call of Duty: Delta Force', 'Call of Duty: Delta Force'], ['Call of Duty Delta Force', 'Call of Duty: Delta Force'], ['Call of Duty', 'Call of Duty: Delta Force'], ['Delta Force PC', 'Call of Duty: Delta Force PC'], ['for Delta Force', 'for Call of Duty: Delta Force'], ['Delta Force ', 'Call of Duty: Delta Force '], ['delta-force ', 'delta-force '], ['Ricochet maintenance', 'Ricochet maintenance'], ['Ricochet anti-cheat', 'Ricochet anti-cheat'], ['Ricochet', 'Ricochet anti-cheat'], ['operatorEsp', 'playerEsp'], ['gulagFight', 'rebootFight'], ['alMazrah', 'battleRoyaleIsland'], ['operators', 'players'], ['operator', 'player'], ['Operators', 'Players'], ['Operator', 'Player'], ['Al Mazrah', 'Verdansk'], ['Verdansk', 'Verdansk'], ['Hazard Operations', 'Hazard Operations'], ['gulag', 'gulag'], ['delta-forcescheats.net', 'delta-forcescheats.net'], ['Trucos Delta Force', 'Trucos Call of Duty: Delta Force'], ['Triches Delta Force', 'Triches Call of Duty: Delta Force'], ['Cheats Delta Force', 'Cheats Call of Duty: Delta Force'],
]; function apply(content) { let r = content; for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b); return r;
} // Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) { let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8'); content = apply(content); await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content); console.log('Fixed', file);
} // Fix pages-en ricochet key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tricochet: \{/, "\t'ricochet': {");
pagesEn = pagesEn.replace(/Call of Duty: Delta Force Delta Force/g, 'Call of Duty: Delta Force');
pagesEn = pagesEn.replace(/for Call of Duty: Delta Force Delta Force/g, 'for Call of Duty: Delta Force');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn); // Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'ricochet'/g, "'ricochet'");
pagesI18n = pagesI18n.replace(/ricochet:/g, "'ricochet':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n); // Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen); console.log('Fixed i18n keys.');
