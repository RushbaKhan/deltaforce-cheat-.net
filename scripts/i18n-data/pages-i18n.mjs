import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Delta Force Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Delta Force indetectables para Delta Force en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Ricochet anti-cheat. Entrega digital instantánea.', h1: 'Delta Force Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Delta Force en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Ricochet anti-cheat tras cada parche.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galería Delta Force Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Delta Force Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Hazard Operations.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Delta Force Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Delta Force indétectables pour Delta Force sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Ricochet anti-cheat. Livraison numérique instantanée.', h1: 'Delta Force Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Delta Force sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Ricochet anti-cheat après chaque patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Delta Force Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Delta Force Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et Hazard Operations.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Delta Force Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Delta Force Cheats für Delta Force auf PC. ESP Wallhack, Radar Hack und Aimbot mit Ricochet anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Delta Force: ESP Wallhack, Radar und Aimbot mit Ricochet anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Delta Force Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Delta Force Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Hazard Operations zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Delta Force Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Delta Force indetectáveis para Delta Force no PC. ESP wallhack, radar hack e Aimbot com manutenção Ricochet anti-cheat. Entrega digital instantánea.', h1: 'Delta Force Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Delta Force no Windows PC: ESP wallhack, radar e Aimbot com manutenção Ricochet anti-cheat após cada patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Delta Force Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Delta Force Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e Hazard Operations.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Delta Force Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Delta Force indetectable per Delta Force su PC. ESP wallhack, radar hack e Aimbot con manutenzione Ricochet anti-cheat. Consegna digitale istantanea.', h1: 'Delta Force Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Delta Force su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Ricochet anti-cheat dopo ogni patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galleria Delta Force Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Delta Force Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Hazard Operations.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Delta Force Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats voor Delta Force op PC. ESP wallhack, radar hack en Aimbot met Ricochet anti-cheat-onderhoud. Directe digitale levering.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Delta Force: ESP wallhack, radar en Aimbot met Ricochet anti-cheat-onderhoud na elke patch.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Delta Force Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Delta Force Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Hazard Operations.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Delta Force Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Delta Force dla Delta Force na PC. ESP wallhack, radar hack i Aimbot z konserwacją Ricochet anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Delta Force na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Ricochet anti-cheat po każdym patchu.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeria Delta Force Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Delta Force Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Hazard Operations.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Delta Force Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Delta Force для Delta Force на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Ricochet anti-cheat. Мгновенная цифровая доставка.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Delta Force на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Ricochet anti-cheat после патчей.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Delta Force Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Delta Force Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Hazard Operations.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Delta Force Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Delta Force için undetected hileler. ESP wallhack, radar hack ve Aimbot — Ricochet anti-cheat bakımı. Anında dijital teslimat.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Delta Force Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Ricochet anti-cheat bakımı dahil.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Delta Force Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Delta Force Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Hazard Operations\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Delta Force Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Delta Force undetected لـ Delta Force على PC. ESP wallhack ورadar hack وAimbot مع صيانة Ricochet anti-cheat. تسليم رقمي فوري.', h1: 'Delta Force Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Delta Force على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'معرض Delta Force Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Delta Force Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وHazard Operations.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Delta Force Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Delta Force向けundetectedチート。ESP wallhack、radar hack、Aimbot、Ricochet anti-cheatメンテナンス。即時デジタル配信。', h1: 'Delta Force Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Delta Force Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Ricochet anti-cheatメンテナンス付き。', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Delta Force Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDelta Force Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとHazard Operationsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Delta Force Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Delta Force undetected 치트. ESP wallhack, radar hack, Aimbot, Ricochet anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Delta Force Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Ricochet anti-cheat 유지보수 포함.', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Delta Force Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Delta Force Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Hazard Operations에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Delta Force Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Delta Force undetected作弊。ESP wallhack、radar hack、Aimbot、Ricochet anti-cheat维护。即时数字交付。', h1: 'Delta Force Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Delta Force Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Ricochet anti-cheat维护。', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Delta Force Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Delta Force Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Hazard Operations中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Delta Force Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Delta Force undetected cheats. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. Instant digital delivery.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Delta Force Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Ricochet maintenance सहित.', imageAlt: 'Warzone hacks hero ESP aimbot wallhack', gallery: 'Delta Force Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Delta Force Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Hazard Operations में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Delta Force Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Delta Force undetected untuk Delta Force di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Ricochet anti-cheat. Pengiriman digital instan.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Delta Force di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galeri Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Delta Force Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Hazard Operations.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Delta Force Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Delta Force undetected สำหรับ Delta Force บน PC. ESP wallhack, radar hack, Aimbot, Ricochet maintenance. จัดส่งดิจิทัลทันที.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Delta Force บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Ricochet maintenance', imageAlt: 'Warzone ESP player tags hack', gallery: 'แกลเลอรี Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Delta Force Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Hazard Operations', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Delta Force Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Delta Force undetected cho Delta Force trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Ricochet anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Delta Force trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Thư viện Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Delta Force Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Hazard Operations.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Delta Force Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Delta Force для Delta Force на PC. ESP wallhack, radar hack, Aimbot, обслуговування Ricochet anti-cheat. Мгновенная цифровая доставка.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Delta Force на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Галерея Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Delta Force Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Hazard Operations.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Delta Force Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Warzone cheaty pro Delta Force na PC. ESP wallhack, radar hack, Aimbot, údržba Ricochet anti-cheat. Okamžité digitální doručení.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Delta Force na Windows PC: ESP wallhack, radar, Aimbot s údržbou Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Delta Force Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Hazard Operations.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Delta Force Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Delta Force undetected pentru Delta Force pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Ricochet anti-cheat. Livrare digitală instantă.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Delta Force pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Ricochet anti-cheat.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Galerie Delta Force Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Delta Force Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Hazard Operations.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Delta Force Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Warzone cheats för Delta Force på PC. ESP wallhack, radar hack, Aimbot, Ricochet anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Delta Force Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Delta Force på Windows PC: ESP wallhack, radar, Aimbot med Ricochet anti-cheat-underhåll.', imageAlt: 'Warzone ESP player tags hack', gallery: 'Delta Force Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Delta Force Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Hazard Operations.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'delta-force-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'delta-force-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'EAC Maintenance Log', focus: 'Ricochet patch status and rebuild notes', altKeyword: 'updates Ricochet maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after Ricochet anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	'ricochet': { suffix: 'Patch Maintenance', focus: 'how Ricochet updates are handled for Delta Force hacks', altKeyword: 'Ricochet bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Warzone cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Delta Force hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Warzone cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Delta Force', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Warzone Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Warzone Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Delta Force. ${p.delivery}. Ricochet maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `Warzone ${meta.altKeyword}`,
		galleryTitle: `Delta Force Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for BR and Hazard Operations.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'delta-force-esp': { en: 'Delta Force ESP', es: 'Delta Force ESP', fr: 'Delta Force ESP', de: 'Delta Force ESP', pt: 'Delta Force ESP', it: 'Delta Force ESP', nl: 'Delta Force ESP', pl: 'Delta Force ESP', ru: 'Delta Force ESP', tr: 'Delta Force ESP', ar: 'Delta Force ESP', ja: 'Delta Force ESP', ko: 'Delta Force ESP', zh: 'Delta Force ESP', hi: 'Delta Force ESP', id: 'Delta Force ESP', th: 'Delta Force ESP', vi: 'Delta Force ESP', uk: 'Delta Force ESP', cs: 'Delta Force ESP', ro: 'Delta Force ESP', sv: 'Delta Force ESP' },
	'delta-force-aimbot': { en: 'Delta Force Aimbot', es: 'Delta Force Aimbot', fr: 'Delta Force Aimbot', de: 'Delta Force Aimbot', pt: 'Delta Force Aimbot', it: 'Delta Force Aimbot', nl: 'Delta Force Aimbot', pl: 'Delta Force Aimbot', ru: 'Delta Force Aimbot', tr: 'Delta Force Aimbot', ar: 'Delta Force Aimbot', ja: 'Delta Force Aimbot', ko: 'Delta Force Aimbot', zh: 'Delta Force Aimbot', hi: 'Delta Force Aimbot', id: 'Delta Force Aimbot', th: 'Delta Force Aimbot', vi: 'Delta Force Aimbot', uk: 'Delta Force Aimbot', cs: 'Delta Force Aimbot', ro: 'Delta Force Aimbot', sv: 'Delta Force Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Delta Force Wallhack', es: 'Delta Force Wallhack', fr: 'Delta Force Wallhack', de: 'Delta Force Wallhack', pt: 'Delta Force Wallhack', it: 'Delta Force Wallhack', nl: 'Delta Force Wallhack', pl: 'Delta Force Wallhack', ru: 'Delta Force Wallhack', tr: 'Delta Force Wallhack', ar: 'Delta Force Wallhack', ja: 'Delta Force Wallhack', ko: 'Delta Force Wallhack', zh: 'Delta Force Wallhack', hi: 'Delta Force Wallhack', id: 'Delta Force Wallhack', th: 'Delta Force Wallhack', vi: 'Delta Force Wallhack', uk: 'Delta Force Wallhack', cs: 'Delta Force Wallhack', ro: 'Delta Force Wallhack', sv: 'Delta Force Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'ricochet': { en: 'Ricochet Bypass', es: 'Bypass Ricochet anti-cheat', fr: 'Bypass Ricochet anti-cheat', de: 'Ricochet Bypass', pt: 'Bypass Ricochet anti-cheat', it: 'Bypass Ricochet anti-cheat', nl: 'Ricochet Bypass', pl: 'Bypass Ricochet anti-cheat', ru: 'Bypass Ricochet anti-cheat', tr: 'Ricochet bypass', ar: 'Bypass Ricochet anti-cheat', ja: 'Ricochet Bypass', ko: 'Ricochet Bypass', zh: 'Ricochet Bypass', hi: 'Ricochet Bypass', id: 'Bypass Ricochet anti-cheat', th: 'Ricochet Bypass', vi: 'Bypass Ricochet anti-cheat', uk: 'Bypass Ricochet anti-cheat', cs: 'Ricochet Bypass', ro: 'Bypass Ricochet anti-cheat', sv: 'Ricochet Bypass' },
	'cheats-2026': { en: 'Delta Force Cheats 2026', es: 'Delta Force Cheats 2026', fr: 'Delta Force Cheats 2026', de: 'Delta Force Cheats 2026', pt: 'Delta Force Cheats 2026', it: 'Delta Force Cheats 2026', nl: 'Delta Force Cheats 2026', pl: 'Delta Force Cheats 2026', ru: 'Delta Force Cheats 2026', tr: 'Delta Force Cheats 2026', ar: 'Delta Force Cheats 2026', ja: 'Delta Force Cheats 2026', ko: 'Delta Force Cheats 2026', zh: 'Delta Force Cheats 2026', hi: 'Delta Force Cheats 2026', id: 'Delta Force Cheats 2026', th: 'Delta Force Cheats 2026', vi: 'Delta Force Cheats 2026', uk: 'Delta Force Cheats 2026', cs: 'Delta Force Cheats 2026', ro: 'Delta Force Cheats 2026', sv: 'Delta Force Cheats 2026' },
	hacks: { en: 'Warzone Hacks', es: 'Warzone Hacks', fr: 'Warzone Hacks', de: 'Warzone Hacks', pt: 'Warzone Hacks', it: 'Warzone Hacks', nl: 'Warzone Hacks', pl: 'Warzone Hacks', ru: 'Warzone Hacks', tr: 'Warzone Hacks', ar: 'Warzone Hacks', ja: 'Warzone Hacks', ko: 'Warzone Hacks', zh: 'Warzone Hacks', hi: 'Warzone Hacks', id: 'Warzone Hacks', th: 'Warzone Hacks', vi: 'Warzone Hacks', uk: 'Warzone Hacks', cs: 'Warzone Hacks', ro: 'Warzone Hacks', sv: 'Warzone Hacks' },
	'cheat-download': { en: 'Delta Force Cheat Download', es: 'Descarga Delta Force Cheats', fr: 'Téléchargement Delta Force Cheats', de: 'Delta Force Cheat Download', pt: 'Download Delta Force Cheats', it: 'Download Delta Force Cheats', nl: 'Delta Force Cheat Download', pl: 'Pobieranie Delta Force Cheats', ru: 'Скачать Delta Force Cheats', tr: 'Delta Force Hile İndir', ar: 'Delta Force Cheat Download', ja: 'Delta Force Cheat Download', ko: 'Delta Force Cheat Download', zh: 'Delta Force Cheat Download', hi: 'Delta Force Cheat Download', id: 'Delta Force Cheat Download', th: 'Delta Force Cheat Download', vi: 'Delta Force Cheat Download', uk: 'Завантаження Delta Force Cheats', cs: 'Delta Force Cheat Download', ro: 'Descărcare Delta Force Cheats', sv: 'Delta Force Cheat Download' },
	'mod-menu': { en: 'Delta Force Mod Menu', es: 'Delta Force Mod Menu', fr: 'Delta Force Mod Menu', de: 'Delta Force Mod Menu', pt: 'Delta Force Mod Menu', it: 'Delta Force Mod Menu', nl: 'Delta Force Mod Menu', pl: 'Delta Force Mod Menu', ru: 'Delta Force Mod Menu', tr: 'Delta Force Mod Menu', ar: 'Delta Force Mod Menu', ja: 'Delta Force Mod Menu', ko: 'Delta Force Mod Menu', zh: 'Delta Force Mod Menu', hi: 'Delta Force Mod Menu', id: 'Delta Force Mod Menu', th: 'Delta Force Mod Menu', vi: 'Delta Force Mod Menu', uk: 'Delta Force Mod Menu', cs: 'Delta Force Mod Menu', ro: 'Delta Force Mod Menu', sv: 'Delta Force Mod Menu' },
	'soft-aim': { en: 'Delta Force Soft Aim', es: 'Delta Force Soft Aim', fr: 'Delta Force Soft Aim', de: 'Delta Force Soft Aim', pt: 'Delta Force Soft Aim', it: 'Delta Force Soft Aim', nl: 'Delta Force Soft Aim', pl: 'Delta Force Soft Aim', ru: 'Delta Force Soft Aim', tr: 'Delta Force Soft Aim', ar: 'Delta Force Soft Aim', ja: 'Delta Force Soft Aim', ko: 'Delta Force Soft Aim', zh: 'Delta Force Soft Aim', hi: 'Delta Force Soft Aim', id: 'Delta Force Soft Aim', th: 'Delta Force Soft Aim', vi: 'Delta Force Soft Aim', uk: 'Delta Force Soft Aim', cs: 'Delta Force Soft Aim', ro: 'Delta Force Soft Aim', sv: 'Delta Force Soft Aim' },
	'best-cheats': { en: 'Best Delta Force Cheats', es: 'Mejores Delta Force Cheats', fr: 'Meilleures Delta Force Cheats', de: 'Beste Delta Force Cheats', pt: 'Melhores Delta Force Cheats', it: 'Migliori Delta Force Cheats', nl: 'Beste Delta Force Cheats', pl: 'Najlepsze Delta Force Cheats', ru: 'Лучшие Delta Force Cheats', tr: 'En İyi Delta Force Hileleri', ar: 'Best Delta Force Cheats', ja: 'Best Delta Force Cheats', ko: 'Best Delta Force Cheats', zh: 'Best Delta Force Cheats', hi: 'Best Delta Force Cheats', id: 'Best Delta Force Cheats', th: 'Best Delta Force Cheats', vi: 'Best Delta Force Cheats', uk: 'Найкращі Delta Force Cheats', cs: 'Nejlepší Delta Force Cheats', ro: 'Cele mai bune Delta Force Cheats', sv: 'Bästa Delta Force Cheats' },
	'aimbot-hack': { en: 'Delta Force Aimbot Hack', es: 'Delta Force Aimbot Hack', fr: 'Delta Force Aimbot Hack', de: 'Delta Force Aimbot Hack', pt: 'Delta Force Aimbot Hack', it: 'Delta Force Aimbot Hack', nl: 'Delta Force Aimbot Hack', pl: 'Delta Force Aimbot Hack', ru: 'Delta Force Aimbot Hack', tr: 'Delta Force Aimbot Hack', ar: 'Delta Force Aimbot Hack', ja: 'Delta Force Aimbot Hack', ko: 'Delta Force Aimbot Hack', zh: 'Delta Force Aimbot Hack', hi: 'Delta Force Aimbot Hack', id: 'Delta Force Aimbot Hack', th: 'Delta Force Aimbot Hack', vi: 'Delta Force Aimbot Hack', uk: 'Delta Force Aimbot Hack', cs: 'Delta Force Aimbot Hack', ro: 'Delta Force Aimbot Hack', sv: 'Delta Force Aimbot Hack' },
	'esp-hack': { en: 'Delta Force ESP Hack', es: 'Delta Force ESP Hack', fr: 'Delta Force ESP Hack', de: 'Delta Force ESP Hack', pt: 'Delta Force ESP Hack', it: 'Delta Force ESP Hack', nl: 'Delta Force ESP Hack', pl: 'Delta Force ESP Hack', ru: 'Delta Force ESP Hack', tr: 'Delta Force ESP Hack', ar: 'Delta Force ESP Hack', ja: 'Delta Force ESP Hack', ko: 'Delta Force ESP Hack', zh: 'Delta Force ESP Hack', hi: 'Delta Force ESP Hack', id: 'Delta Force ESP Hack', th: 'Delta Force ESP Hack', vi: 'Delta Force ESP Hack', uk: 'Delta Force ESP Hack', cs: 'Delta Force ESP Hack', ro: 'Delta Force ESP Hack', sv: 'Delta Force ESP Hack' },
	'unlock-all': { en: 'Delta Force Unlock All', es: 'Delta Force Unlock All', fr: 'Delta Force Unlock All', de: 'Delta Force Unlock All', pt: 'Delta Force Unlock All', it: 'Delta Force Unlock All', nl: 'Delta Force Unlock All', pl: 'Delta Force Unlock All', ru: 'Delta Force Unlock All', tr: 'Delta Force Unlock All', ar: 'Delta Force Unlock All', ja: 'Delta Force Unlock All', ko: 'Delta Force Unlock All', zh: 'Delta Force Unlock All', hi: 'Delta Force Unlock All', id: 'Delta Force Unlock All', th: 'Delta Force Unlock All', vi: 'Delta Force Unlock All', uk: 'Delta Force Unlock All', cs: 'Delta Force Unlock All', ro: 'Delta Force Unlock All', sv: 'Delta Force Unlock All' },
};

const CTA2_HREF = {
	'delta-force-esp': '/delta-force-wallhack/',
	'delta-force-aimbot': '/delta-force-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-delta-force-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/delta-force-anti-cheat-bypass/',
	wallhack: '/delta-force-esp/',
	radar: '/delta-force-esp/',
	'ricochet': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-delta-force-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/delta-force-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/delta-force-aimbot/',
	'esp-hack': '/delta-force-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Delta Force Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Delta Force Cheats — ESP, aimbot, and wallhack on ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for deltaforcecheat.net and Delta Force licenses.`),
		imageAlt: `Warzone hacks ${kind} policy`,
		galleryTitle: `Delta Force Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by secure checkout — not stored on deltaforcecheat.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@deltaforcecheat.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
