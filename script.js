// GRAIN
(() => { const c = document.getElementById('grain-canvas'), x = c.getContext('2d'); const r = () => { c.width = innerWidth; c.height = innerHeight; }; const d = () => { const w = c.width, h = c.height, img = x.createImageData(w, h); for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; } x.putImageData(img, 0, 0); }; const l = () => { d(); requestAnimationFrame(l); }; r(); addEventListener('resize', r); l(); })();

// LOADER
(() => {
    const ldr = document.getElementById('loader'), step = document.getElementById('loader-step'), year = document.getElementById('loader-year'), sub = document.getElementById('loader-sub');
    const steps = [{ s: 'Unang Yugto · Calamba', y: '1861' }, { s: 'Noli Me Tangere · Berlin', y: '1887' }, { s: 'El Filibusterismo · Ghent', y: '1891' }, { s: 'Bagumbayan · Pagtatapos', y: '1896', gold: true }];
    let i = 0;
    const show = i => { step.classList.remove('show'); year.style.opacity = '0'; setTimeout(() => { step.textContent = steps[i].s; year.textContent = steps[i].y; year.className = steps[i].gold ? 'gold' : ''; step.classList.add('show'); year.style.opacity = '1'; }, 250); };
    show(0); sub.classList.add('show');
    const iv = setInterval(() => { i++; if (i >= steps.length) { clearInterval(iv); setTimeout(() => { ldr.classList.add('out'); document.querySelector('.page').style.visibility = 'visible'; }, 800); } else show(i); }, 1050);
})();

// CURSOR
(() => {
    if ('ontouchstart' in window) { document.body.classList.add('touch'); return; }
    const dot = document.createElement('div'); dot.id = 'cur'; document.body.appendChild(dot);
    const ring = document.createElement('div'); ring.id = 'cur-ring'; document.body.appendChild(ring);
    document.addEventListener('mousemove', e => { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px'; dot.classList.remove('gone'); ring.classList.remove('gone'); });
    document.addEventListener('mouseleave', () => { dot.classList.add('gone'); ring.classList.add('gone'); });
    document.addEventListener('mouseover', e => { if (e.target.closest('a,button,.card,.bio-card,[onclick]')) { dot.classList.add('big'); ring.classList.add('big'); } });
    document.addEventListener('mouseout', e => { if (e.target.closest('a,button,.card,.bio-card,[onclick]')) { dot.classList.remove('big'); ring.classList.remove('big'); } });
})();

// SCROLL BADGE
(() => {
    const b = document.getElementById('scroll-badge'); let t = null, gone = false;
    const hide = () => b.classList.add('gone'), show = () => { if (!gone) b.classList.remove('gone'); };
    addEventListener('scroll', () => { hide(); clearTimeout(t); t = setTimeout(show, 2800); }, { passive: true });
    setTimeout(show, 7000);
    new IntersectionObserver(e => { e.forEach(en => { gone = !en.isIntersecting; if (gone) hide(); }); }, { threshold: 0 }).observe(document.getElementById('hero'));
})();

// CHAPTER SCROLL
(() => {
    const track = document.getElementById('ch-track'), prog = document.getElementById('ch-progress'), sec = document.getElementById('chapters');
    const update = () => { const rect = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight, scrolled = Math.max(0, -rect.top), p = Math.min(1, scrolled / total); track.style.transform = `translateX(-${p * 2 * innerWidth}px)`; prog.style.width = (p * 100) + '%'; };
    addEventListener('scroll', update, { passive: true }); update();
})();

// REVEAL
const io = new IntersectionObserver(entries => { entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('vis'), i * 70); io.unobserve(e.target); } }); }, { threshold: .08 });
function observe() { document.querySelectorAll('.card,.bio-card').forEach(el => { el.classList.remove('vis'); io.observe(el); }); }

// DATA
const journey = [
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg/640px-Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg", place: "Calamba, Laguna", country: "Pilipinas", year: "Hunyo 19, 1861", desc: "Ipinanganak dito si Jose Rizal. Ang kanyang buong pangalan ay José Protasio Rizal Mercado y Alonso Realonda. Ang Calamba ay isang bayan sa baybayin ng Lawa ng Bay, at dito lumaki si Rizal sa isang maliwanag at masayang pamilya.", ph: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jose_Rizal_statue_in_Binan_laguna.JPG/640px-Jose_Rizal_statue_in_Binan_laguna.JPG", place: "Biñan, Laguna", country: "Pilipinas", year: "1869–1871", desc: "Sa edad na walo, ipinadala si Rizal sa Biñan upang matuto ng Espanyol at Latin sa ilalim ng guro na si Maestro Justiniano Cruz. Dito napatunayan ng batang Rizal ang kanyang kahusayan sa pag-aaral.", ph: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg", place: "Maynila", country: "Pilipinas", year: "1872–1882", desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila kung saan natapos niya ang kursong Bachelor of Arts nang may pinakamataas na karangalan. Dito niya naranasan ang diskriminasyon na nagpalakas ng kanyang pagnanais na lumaban.", ph: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg/640px-Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg", place: "Madrid, España", country: "España", year: "1882–1885", desc: "Patago na naglakbay si Rizal patungong Europa upang ituloy ang kanyang pag-aaral. Nag-aral siya ng medisina at pilosopiya at nagsilbing bahagi ng Kilusang Propaganda.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Paris_-_Eiffelturm_und_Marsfeld2.jpg/640px-Paris_-_Eiffelturm_und_Marsfeld2.jpg", place: "Paris, France", country: "France", year: "1885–1886", desc: "Sa Paris, nagsanay si Rizal bilang isang espesyalista sa mata sa ilalim ng kilalang doktor na si Dr. Louis de Wecker. Layunin niyang matutunang gamutin ang sakit sa mata ng kanyang ina.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wilhelmsfeld_Odenwald_01.jpg/640px-Wilhelmsfeld_Odenwald_01.jpg", place: "Wilhelmsfeld, Alemanya", country: "Alemanya", year: "1886", desc: "Namalagi si Rizal sa tahanan ng pastor na si Karl Ullmer. Dito siya naging bahagi ng lokal na pamayanan at nagsimulang sulatin ang kanyang nobelang 'Noli Me Tangere'.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Heidelberg_Old_Bridge_2013.jpg/640px-Heidelberg_Old_Bridge_2013.jpg", place: "Heidelberg, Alemanya", country: "Alemanya", year: "1886", desc: "Nag-aral si Rizal sa University of Heidelberg. Dito niya pinagyaman ang kanyang kaalaman sa opthalmolohiya at isinulat ang ilang tanyag na tula.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Noli_Me_Tangere_1st_edition_cover.jpg/400px-Noli_Me_Tangere_1st_edition_cover.jpg", place: "Berlin, Alemanya", country: "Alemanya", year: "1886–1887", desc: "Sa Berlin, nailathala ni Rizal ang 'Noli Me Tangere' noong 1887. Ang nobelang ito ay nagbunyag ng kasamaan ng kolonyalismong Espanyol.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Asakusa_Sensoji_2006.jpg/640px-Asakusa_Sensoji_2006.jpg", place: "Japan", country: "Japan", year: "1888", desc: "Nabighani si Rizal sa kultura ng Japan. Nakilala niya ang isang babaeng Hapones na si Seiko Usui (O-Sei-San) na naging malapit sa kanya.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hongkong_Victoria_Harbour.jpg/640px-Hongkong_Victoria_Harbour.jpg", place: "Hong Kong", country: "Hong Kong", year: "1888", desc: "Bumalik si Rizal mula sa Europa at nagtayo ng klinika sa Hong Kong. Dito pansamantalang nanirahan ang kanyang pamilya.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/640px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg", place: "London, England", country: "UK", year: "1888–1889", desc: "Nananaliksik si Rizal sa British Museum tungkol sa kasaysayan ng Pilipinas. Pinag-aralan niya ang 'Sucesos de las Islas Filipinas' ni Morga.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BrusselsGrandPlace.jpg/640px-BrusselsGrandPlace.jpg", place: "Brussels, Belgium", country: "Belgium", year: "1889–1891", desc: "Lumipat si Rizal sa Brussels at nagsimulang sulatin ang 'El Filibusterismo'. Nanatili siya rito upang makatipid sa gastos sa Europa.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/El_Fil_cover.jpg/400px-El_Fil_cover.jpg", place: "Ghent, Belgium", country: "Belgium", year: "1891", desc: "Sa Ghent nailathala ang 'El Filibusterismo' noong Setyembre 1891 sa tulong ni Valentin Ventura. Mas mapanghimagsik ito kaysa Noli.", ph: false },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG/640px-Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG", place: "Dapitan, Zamboanga", country: "Pilipinas", year: "1892–1896", desc: "Ipinatapon si Rizal sa Dapitan. Sa kabila nito, ginawa niyang progresibo ang lugar: nagtayo ng paaralan, ospital, at sistema ng tubig.", ph: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fort_Santiago_Manila.jpg/640px-Fort_Santiago_Manila.jpg", place: "Maynila (Fort Santiago)", country: "Pilipinas", year: "1896", desc: "Inakusahan si Rizal bilang tagapagtaguyod ng rebolusyon. Ipinakulong siya sa Fort Santiago bago ang kanyang huling paglilitis.", ph: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rizal_Monument_Luneta.jpg/640px-Rizal_Monument_Luneta.jpg", place: "Luneta, Maynila", country: "Pilipinas", year: "Disyembre 30, 1896", desc: "Binaril si Jose Rizal sa Bagumbayan. Ang kanyang kamatayan ang naging mitsa ng malawakang Rebolusyong Pilipino laban sa Espanya.", ph: true }
];
const bioData = [
    { title: "Maagang Buhay", year: "1861", place: "Calamba, Laguna", cat: "TALAMBUHAY", tag: "MAAGANG BUHAY", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jose_rizal_01.jpg/400px-Jose_rizal_01.jpg", desc: "Ipinanganak si Jose Protasio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861 sa Calamba, Laguna. Siya ay ang ikapito sa labing-isang anak nina Francisco Engracio Rizal Mercado at Teodora Morales Alonso Realonda. Ang ina niya ang naging kanyang unang guro, nagturo sa kanya ng pagbasa at pagsulat. Sa edad na tatlo, alam na niya ang alpabeto; sa limang taon, kayang magbasa at magsulat." },
    { title: "Pamilya", year: "Mercado-Alonso", place: "Calamba", cat: "TALAMBUHAY", tag: "PAMILYA", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rizal_family.jpg/640px-Rizal_family.jpg", desc: "Ang pamilya Mercado-Alonso ay isa sa mga iginagalang na angkan sa Calamba, Laguna. Ang ama ni Rizal na si Francisco Mercado ay nagmula sa isang pamilyang Tsino-Pilipino, habang ang kanyang ina na si Teodora Alonso ay nagmula sa isang kilalang pamilya sa Manila. Sila ay may labing-isang anak, at si Jose ay ikapito." },
    { title: "Edukasyon", year: "1872–1882", place: "Maynila", cat: "TALAMBUHAY", tag: "EDUKASYON", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg", desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila (1872–1877) kung saan nagtapos siya nang may pinakamataas na karangalan. Nagpatuloy siya sa University of Santo Tomas (1877–1882). Patago siyang naglakbay sa España noong 1882 para ituloy ang pag-aaral sa Universidad Central de Madrid. Nagtapos siya bilang Licentiate in Medicine at may doctorate in philosophy and letters." },
    { title: "Buhay-Pag-ibig", year: "1877–1896", place: "Iba't ibang Lugar", cat: "TALAMBUHAY", tag: "PAG-IBIG", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Josephine_Bracken.jpg/400px-Josephine_Bracken.jpg", desc: "Segunda Katigbak (1877) — ang unang pag-ibig ni Rizal sa Biñan. Leonor Rivera (1879–1890) — ang pinakamatagal na pag-ibig; inspirasyon ng karakter na si Maria Clara. Josephine Bracken (1895–1896) — ang huling pag-ibig, isang Irish-Filipino na naging katabi niya sa Dapitan, at kasal nila bago ang kanyang pagbitay." }
];

// RENDER
let activeFilter = 'all';
function renderCards(data) {
    const grid = document.getElementById('card-grid');
    if (!data.length) { grid.innerHTML = '<div class="empty-state"><p>Walang nahanap na destinasyon</p></div>'; document.getElementById('result-count').textContent = ''; return; }
    const ctaSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="5" x2="9" y2="5" stroke="#c9a84c" stroke-width="1"/><polyline points="6,2 9,5 6,8" fill="none" stroke="#c9a84c" stroke-width="1"/></svg>`;
    grid.innerHTML = data.map(item => {
        const idx = journey.indexOf(item);
        const preview = item.desc.length > 95 ? item.desc.substring(0, 95) + '…' : item.desc;
        return `<div class="card${item.ph ? ' ph' : ''}" onclick="openJourneyModal(${idx})">
      <div class="card-img-wrap"><img class="card-img" src="${item.image}" alt="${item.place}" loading="lazy"><div class="card-fade"></div><span class="card-badge">${item.ph ? 'Pilipinas' : 'Ibayong-dagat'}</span></div>
      <div class="card-body"><span class="card-year">${item.year}</span><h2 class="card-title">${item.place}</h2><div class="card-rule"></div><p class="card-desc">${preview}</p><span class="card-cta">${ctaSvg}Magbasa Nang Higit Pa</span></div>
    </div>`;
    }).join('');
    document.getElementById('result-count').textContent = `Naka-display: ${data.length} destinasyon`;
    observe();
}

function openJourneyModal(i) {
    const it = journey[i];
    document.getElementById('modal-img').src = it.image;
    document.getElementById('modal-place').textContent = it.place;
    document.getElementById('modal-eyebrow-sm').textContent = 'DESTINASYON';
    document.getElementById('modal-cat').textContent = it.ph ? 'PILIPINAS' : 'IBAYONG-DAGAT';
    document.getElementById('modal-title').textContent = it.country;
    document.getElementById('modal-year').textContent = it.year;
    document.getElementById('modal-desc').textContent = it.desc;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function openBioModal(i) {
    const it = bioData[i];
    document.getElementById('modal-img').src = it.img;
    document.getElementById('modal-place').textContent = it.place;
    document.getElementById('modal-eyebrow-sm').textContent = it.tag;
    document.getElementById('modal-cat').textContent = it.cat;
    document.getElementById('modal-title').textContent = it.title;
    document.getElementById('modal-year').textContent = it.year;
    document.getElementById('modal-desc').textContent = it.desc;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); document.body.style.overflow = ''; }
function searchData() { const q = document.getElementById('search').value.toLowerCase().trim(); let pool = journey; if (activeFilter === 'ph') pool = journey.filter(i => i.ph); if (activeFilter === 'abroad') pool = journey.filter(i => !i.ph); renderCards(!q ? pool : pool.filter(i => i.place.toLowerCase().includes(q) || i.country.toLowerCase().includes(q) || i.year.includes(q) || i.desc.toLowerCase().includes(q))); }
function filterPH() { activeFilter = 'ph'; document.getElementById('search').value = ''; renderCards(journey.filter(i => i.ph)); setBtn('btn-ph'); }
function filterAbroad() { activeFilter = 'abroad'; document.getElementById('search').value = ''; renderCards(journey.filter(i => !i.ph)); setBtn('btn-abroad'); }
function showAll() { activeFilter = 'all'; document.getElementById('search').value = ''; renderCards(journey); setBtn('btn-all'); }
function setBtn(id) { document.querySelectorAll('.dest-btn').forEach(b => b.classList.remove('on')); document.getElementById(id).classList.add('on'); }

// SCROLL UTILS
const pBar = document.getElementById('progress-bar'), bTop = document.getElementById('back-top');
addEventListener('scroll', () => { const st = scrollY, dh = document.documentElement.scrollHeight - innerHeight; pBar.style.width = dh > 0 ? `${(st / dh) * 100}%` : '0%'; bTop.classList.toggle('vis', st > 500); }, { passive: true });

// MUSIC
const audio = document.getElementById('bg-audio'), musicBtn = document.getElementById('music-btn'), bars = document.getElementById('music-bars');
let playing = false;
const playSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><polygon points="3,1 12,6.5 3,12"/></svg>`;
const pauseSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><rect x="2" y="1" width="4" height="11" rx="1"/><rect x="7" y="1" width="4" height="11" rx="1"/></svg>`;
musicBtn.addEventListener('click', () => { playing ? audio.pause() : audio.play().catch(() => { }); playing = !playing; bars.classList.toggle('on', playing); musicBtn.innerHTML = playing ? pauseSvg : playSvg; });

// FINAL NAMES
const fn = document.getElementById('final-names');
new IntersectionObserver(e => { e.forEach(en => { if (en.isIntersecting) fn.classList.add('vis'); }); }, { threshold: .3 }).observe(fn);
if ('ontouchstart' in window) { const h = document.getElementById('closing-hint'); if (h) h.textContent = 'I-tap ang bawat pangalan'; }

// BIO OBSERVE
document.querySelectorAll('.bio-card').forEach(el => io.observe(el));

// KEYBOARD
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// INIT
renderCards(journey);
