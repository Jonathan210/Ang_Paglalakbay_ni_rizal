/* ════════════════════════════════════════════════════════════
   ANG PAGLALAKBAY NI RIZAL — main.js
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */
const journey = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg/640px-Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg",
    place: "Calamba, Laguna", country: "Pilipinas", year: "Hunyo 19, 1861", ph: true,
    desc: "Ipinanganak dito si Jose Rizal. Ang kanyang buong pangalan ay José Protasio Rizal Mercado y Alonso Realonda. Ang Calamba ay isang bayan sa baybayin ng Lawa ng Bay, at dito lumaki si Rizal sa isang maliwanag at masayang pamilya."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jose_Rizal_statue_in_Binan_laguna.JPG/640px-Jose_Rizal_statue_in_Binan_laguna.JPG",
    place: "Biñan, Laguna", country: "Pilipinas", year: "1869–1871", ph: true,
    desc: "Sa edad na walo, ipinadala si Rizal sa Biñan upang matuto ng Espanyol at Latin sa ilalim ng guro na si Maestro Justiniano Cruz. Dito napatunayan ng batang Rizal ang kanyang kahusayan sa pag-aaral."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg",
    place: "Maynila", country: "Pilipinas", year: "1872–1882", ph: true,
    desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila kung saan natapos niya ang kursong Bachelor of Arts nang may pinakamataas na karangalan. Dito niya naranasan ang diskriminasyon na nagpalakas ng kanyang pagnanais na lumaban."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg/640px-Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg",
    place: "Madrid, España", country: "España", year: "1882–1885", ph: false,
    desc: "Patago na naglakbay si Rizal patungong Europa upang ituloy ang kanyang pag-aaral. Nag-aral siya ng medisina at pilosopiya at nagsilbing bahagi ng Kilusang Propaganda."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Paris_-_Eiffelturm_und_Marsfeld2.jpg/640px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
    place: "Paris, France", country: "France", year: "1885–1886", ph: false,
    desc: "Sa Paris, nagsanay si Rizal bilang isang espesyalista sa mata sa ilalim ng kilalang doktor na si Dr. Louis de Wecker. Layunin niyang matutunang gamutin ang sakit sa mata ng kanyang ina."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wilhelmsfeld_Odenwald_01.jpg/640px-Wilhelmsfeld_Odenwald_01.jpg",
    place: "Wilhelmsfeld, Alemanya", country: "Alemanya", year: "1886", ph: false,
    desc: "Namalagi si Rizal sa tahanan ng pastor na si Karl Ullmer. Dito siya naging bahagi ng lokal na pamayanan at nagsimulang sulatin ang kanyang nobelang 'Noli Me Tangere'."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Heidelberg_Old_Bridge_2013.jpg/640px-Heidelberg_Old_Bridge_2013.jpg",
    place: "Heidelberg, Alemanya", country: "Alemanya", year: "1886", ph: false,
    desc: "Nag-aral si Rizal sa University of Heidelberg. Dito niya pinagyaman ang kanyang kaalaman sa opthalmolohiya at isinulat ang ilang tanyag na tula."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Noli_Me_Tangere_1st_edition_cover.jpg/400px-Noli_Me_Tangere_1st_edition_cover.jpg",
    place: "Berlin, Alemanya", country: "Alemanya", year: "1886–1887", ph: false,
    desc: "Sa Berlin, nailathala ni Rizal ang 'Noli Me Tangere' noong 1887. Ang nobelang ito ay nagbunyag ng kasamaan ng kolonyalismong Espanyol."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Asakusa_Sensoji_2006.jpg/640px-Asakusa_Sensoji_2006.jpg",
    place: "Japan", country: "Japan", year: "1888", ph: false,
    desc: "Nabighani si Rizal sa kultura ng Japan. Nakilala niya ang isang babaeng Hapones na si Seiko Usui (O-Sei-San) na naging malapit sa kanya."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hongkong_Victoria_Harbour.jpg/640px-Hongkong_Victoria_Harbour.jpg",
    place: "Hong Kong", country: "Hong Kong", year: "1888", ph: false,
    desc: "Bumalik si Rizal mula sa Europa at nagtayo ng klinika sa Hong Kong. Dito pansamantalang nanirahan ang kanyang pamilya."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/640px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
    place: "London, England", country: "UK", year: "1888–1889", ph: false,
    desc: "Nananaliksik si Rizal sa British Museum tungkol sa kasaysayan ng Pilipinas. Pinag-aralan niya ang 'Sucesos de las Islas Filipinas' ni Morga."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BrusselsGrandPlace.jpg/640px-BrusselsGrandPlace.jpg",
    place: "Brussels, Belgium", country: "Belgium", year: "1889–1891", ph: false,
    desc: "Lumipat si Rizal sa Brussels at nagsimulang sulatin ang 'El Filibusterismo'. Nanatili siya rito upang makatipid sa gastos sa Europa."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/El_Fil_cover.jpg/400px-El_Fil_cover.jpg",
    place: "Ghent, Belgium", country: "Belgium", year: "1891", ph: false,
    desc: "Sa Ghent nailathala ang 'El Filibusterismo' noong Setyembre 1891 sa tulong ni Valentin Ventura. Mas mapanghimagsik ito kaysa Noli."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG/640px-Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG",
    place: "Dapitan, Zamboanga", country: "Pilipinas", year: "1892–1896", ph: true,
    desc: "Ipinatapon si Rizal sa Dapitan. Sa kabila nito, ginawa niyang progresibo ang lugar: nagtayo ng paaralan, ospital, at sistema ng tubig."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fort_Santiago_Manila.jpg/640px-Fort_Santiago_Manila.jpg",
    place: "Maynila (Fort Santiago)", country: "Pilipinas", year: "1896", ph: true,
    desc: "Inakusahan si Rizal bilang tagapagtaguyod ng rebolusyon. Ipinakulong siya sa Fort Santiago bago ang kanyang huling paglilitis."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rizal_Monument_Luneta.jpg/640px-Rizal_Monument_Luneta.jpg",
    place: "Luneta, Maynila", country: "Pilipinas", year: "Disyembre 30, 1896", ph: true,
    desc: "Binaril si Jose Rizal sa Bagumbayan. Ang kanyang kamatayan ang naging mitsa ng malawakang Rebolusyong Pilipino laban sa Espanya."
  }
];

const bioData = [
  {
    title: "Maagang Buhay", year: "1861", place: "Calamba, Laguna",
    cat: "TALAMBUHAY", tag: "MAAGANG BUHAY",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jose_rizal_01.jpg/400px-Jose_rizal_01.jpg",
    desc: "Ipinanganak si Jose Protasio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861 sa Calamba, Laguna. Siya ay ang ikapito sa labing-isang anak nina Francisco Engracio Rizal Mercado at Teodora Morales Alonso Realonda. Ang ina niya ang naging kanyang unang guro, nagturo sa kanya ng pagbasa at pagsulat. Sa edad na tatlo, alam na niya ang alpabeto; sa limang taon, kayang magbasa at magsulat."
  },
  {
    title: "Pamilya", year: "Mercado-Alonso", place: "Calamba",
    cat: "TALAMBUHAY", tag: "PAMILYA",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rizal_family.jpg/640px-Rizal_family.jpg",
    desc: "Ang pamilya Mercado-Alonso ay isa sa mga iginagalang na angkan sa Calamba, Laguna. Ang ama ni Rizal na si Francisco Mercado ay nagmula sa isang pamilyang Tsino-Pilipino, habang ang kanyang ina na si Teodora Alonso ay nagmula sa isang kilalang pamilya sa Manila. Sila ay may labing-isang anak, at si Jose ay ikapito."
  },
  {
    title: "Edukasyon", year: "1872–1882", place: "Maynila",
    cat: "TALAMBUHAY", tag: "EDUKASYON",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg",
    desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila (1872–1877) kung saan nagtapos siya nang may pinakamataas na karangalan. Nagpatuloy siya sa University of Santo Tomas (1877–1882). Patago siyang naglakbay sa España noong 1882 para ituloy ang pag-aaral sa Universidad Central de Madrid. Nagtapos siya bilang Licentiate in Medicine at may doctorate in philosophy and letters."
  },
  {
    title: "Buhay-Pag-ibig", year: "1877–1896", place: "Iba't ibang Lugar",
    cat: "TALAMBUHAY", tag: "PAG-IBIG",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Josephine_Bracken.jpg/400px-Josephine_Bracken.jpg",
    desc: "Segunda Katigbak (1877) — ang unang pag-ibig ni Rizal sa Biñan. Leonor Rivera (1879–1890) — ang pinakamatagal na pag-ibig; inspirasyon ng karakter na si Maria Clara. Josephine Bracken (1895–1896) — ang huling pag-ibig, isang Irish-Filipino na naging katabi niya sa Dapitan, at kasal nila bago ang kanyang pagbitay."
  }
];

/* ────────────────────────────────────────────────────────────
   GRAIN
   ──────────────────────────────────────────────────────────── */
function initGrain() {
  const c = document.getElementById('grain-canvas');
  const x = c.getContext('2d');
  const resize = () => { c.width = innerWidth; c.height = innerHeight; };
  const draw = () => {
    const img = x.createImageData(c.width, c.height);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    requestAnimationFrame(draw);
  };
  resize();
  addEventListener('resize', resize);
  draw();
}

/* ────────────────────────────────────────────────────────────
   LOADER
   ──────────────────────────────────────────────────────────── */
function initLoader() {
  const ldr = document.getElementById('loader');
  const step = document.getElementById('loader-step');
  const year = document.getElementById('loader-year');
  const sub = document.getElementById('loader-sub');

  const steps = [
    { s: 'Unang Yugto · Calamba', y: '1861' },
    { s: 'Noli Me Tangere · Berlin', y: '1887' },
    { s: 'El Filibusterismo · Ghent', y: '1891' },
    { s: 'Bagumbayan · Pagtatapos', y: '1896', gold: true }
  ];

  let i = 0;
  const show = (idx) => {
    step.classList.remove('show');
    year.style.opacity = '0';
    setTimeout(() => {
      step.textContent = steps[idx].s;
      year.textContent = steps[idx].y;
      year.className = steps[idx].gold ? 'gold' : '';
      step.classList.add('show');
      year.style.opacity = '1';
    }, 250);
  };

  show(0);
  sub.classList.add('show');

  const iv = setInterval(() => {
    i++;
    if (i >= steps.length) {
      clearInterval(iv);
      setTimeout(() => {
        ldr.classList.add('out');
        document.querySelector('.page').style.visibility = 'visible';
      }, 800);
    } else {
      show(i);
    }
  }, 1050);
}

/* ────────────────────────────────────────────────────────────
   CUSTOM CURSOR
   ──────────────────────────────────────────────────────────── */
function initCursor() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch');
    return;
  }

  const dot  = document.createElement('div'); dot.id = 'cur';
  const ring = document.createElement('div'); ring.id = 'cur-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  const INTERACTIVE = 'a,button,.card,.bio-card,[onclick],.tl-item,.fn-wrap,input';

  document.addEventListener('mousemove', e => {
    dot.style.left = ring.style.left = e.clientX + 'px';
    dot.style.top = ring.style.top = e.clientY + 'px';
    dot.classList.remove('gone');
    ring.classList.remove('gone');
  });
  document.addEventListener('mouseleave', () => {
    dot.classList.add('gone'); ring.classList.add('gone');
  });
  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.add('big'); ring.classList.add('big');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.remove('big'); ring.classList.remove('big');
    }
  });
}

/* ────────────────────────────────────────────────────────────
   SCROLL BADGE
   ──────────────────────────────────────────────────────────── */
function initScrollBadge() {
  const badge = document.getElementById('scroll-badge');
  if (!badge) return;

  let timer = null;
  let heroGone = false;

  const hide = () => badge.classList.add('gone');
  const show = () => { if (!heroGone) badge.classList.remove('gone'); };

  addEventListener('scroll', () => {
    hide();
    clearTimeout(timer);
    timer = setTimeout(show, 2800);
  }, { passive: true });

  setTimeout(show, 7000);

  const hero = document.getElementById('hero');
  if (hero) {
    new IntersectionObserver(entries => {
      entries.forEach(en => {
        heroGone = !en.isIntersecting;
        if (heroGone) hide();
      });
    }, { threshold: 0 }).observe(hero);
  }
}

/* ────────────────────────────────────────────────────────────
   CHAPTER SCROLL (desktop horizontal sticky)
   ──────────────────────────────────────────────────────────── */
function initChapters() {
  const track = document.getElementById('ch-track');
  const prog = document.getElementById('ch-progress');
  const sec = document.getElementById('chapters');
  const dots = document.querySelectorAll('.ch-dot');
  if (!track || !sec) return;

  const isDesktop = () => window.innerWidth > 800;

  const update = () => {
    if (!isDesktop()) {
      track.style.transform = '';
      if (prog) prog.style.width = '0%';
      dots.forEach((d, i) => d.classList.toggle('active', i === 0));
      return;
    }
    const rect = sec.getBoundingClientRect();
    const total = sec.offsetHeight - innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const p = Math.min(1, scrolled / total);

    track.style.transform = `translateX(-${p * 2 * innerWidth}px)`;
    if (prog) prog.style.width = (p * 100) + '%';

    // Update indicator dots
    const idx = Math.min(dots.length - 1, Math.floor(p * dots.length));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  };

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

/* ────────────────────────────────────────────────────────────
   TIMELINE RENDER
   ──────────────────────────────────────────────────────────── */
function buildTimeline() {
  const track = document.getElementById('tl-track');
  if (!track) return;

  const icons = ['🏡', '🏫', '🎓', '🏛️', '🗼', '🌿', '🎓', '📖', '⛩️', '🌊', '📚', '🏙️', '📘', '⛺', '🏰', '🌅'];

  track.innerHTML = journey.map((item, i) => `
    <div class="tl-item${item.ph ? ' ph' : ''}" data-index="${i}">
      <div class="tl-node">${icons[i] || '·'}</div>
      <span class="tl-year">${item.year}</span>
      <span class="tl-place">${item.place}</span>
      <span class="tl-tag">${item.ph ? 'Pilipinas' : 'Ibayong-dagat'}</span>
    </div>
  `).join('');

  // Click to open modal
  track.querySelectorAll('.tl-item').forEach(el => {
    el.addEventListener('click', () => openJourneyModal(+el.dataset.index));
  });

  // Drag-scroll
  initDragScroll(document.querySelector('.tl-scroller'));

  // Reveal on scroll
  const tlObserver = new IntersectionObserver(entries => {
    entries.forEach((en, k) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add('vis'), k * 60);
        tlObserver.unobserve(en.target);
      }
    });
  }, { threshold: .1 });

  track.querySelectorAll('.tl-item').forEach(el => tlObserver.observe(el));
}

/* Drag-to-scroll for timeline */
function initDragScroll(el) {
  if (!el) return;
  let isDown = false, isDragging = false, startX, scrollLeft;
  el.addEventListener('mousedown', e => {
    isDown = true; isDragging = false;
    el.style.userSelect = 'none';
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  ['mouseleave','mouseup'].forEach(ev => el.addEventListener(ev, () => {
    isDown = false; el.style.userSelect = '';
    setTimeout(() => isDragging = false, 50);
  }));
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) isDragging = true;
    el.scrollLeft = scrollLeft - walk;
  });
  el.addEventListener('click', e => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

/* ────────────────────────────────────────────────────────────
   CARD GRID
   ──────────────────────────────────────────────────────────── */
let activeFilter = 'all';

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((en, i) => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('vis'), i * 70);
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: .08 });

function observeCards() {
  document.querySelectorAll('.card, .bio-card').forEach(el => {
    el.classList.remove('vis');
    revealObserver.observe(el);
  });
}

const ctaSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
  <line x1="1" y1="5" x2="9" y2="5" stroke="#c9a84c" stroke-width="1"/>
  <polyline points="6,2 9,5 6,8" fill="none" stroke="#c9a84c" stroke-width="1"/>
</svg>`;

function renderCards(data) {
  const grid = document.getElementById('card-grid');
  const count = document.getElementById('result-count');
  if (!grid) return;

  if (!data.length) {
    grid.innerHTML = '<div class="empty-state"><p>Walang nahanap na destinasyon</p></div>';
    if (count) count.textContent = '';
    return;
  }

  grid.innerHTML = data.map(item => {
    const idx = journey.indexOf(item);
    const preview = item.desc.length > 95 ? item.desc.slice(0, 95) + '…' : item.desc;
    return `
      <div class="card${item.ph ? ' ph' : ''}" onclick="openJourneyModal(${idx})">
        <div class="card-img-wrap">
          <img class="card-img" src="${item.image}" alt="${item.place}" loading="lazy">
          <div class="card-fade"></div>
          <span class="card-badge">${item.ph ? 'Pilipinas' : 'Ibayong-dagat'}</span>
        </div>
        <div class="card-body">
          <span class="card-year">${item.year}</span>
          <h2 class="card-title">${item.place}</h2>
          <div class="card-rule"></div>
          <p class="card-desc">${preview}</p>
          <span class="card-cta">${ctaSvg}Magbasa Nang Higit Pa</span>
        </div>
      </div>`;
  }).join('');

  if (count) count.textContent = `Naka-display: ${data.length} destinasyon`;
  observeCards();
}

function getPool() {
  if (activeFilter === 'ph') return journey.filter(i => i.ph);
  if (activeFilter === 'abroad') return journey.filter(i => !i.ph);
  return journey;
}

function setBtn(id) {
  document.querySelectorAll('.dest-btn').forEach(b => b.classList.remove('on'));
  const el = document.getElementById(id);
  if (el) el.classList.add('on');
}

window.filterPH = function () {
  activeFilter = 'ph';
  document.getElementById('search').value = '';
  renderCards(journey.filter(i => i.ph));
  setBtn('btn-ph');
};
window.filterAbroad = function () {
  activeFilter = 'abroad';
  document.getElementById('search').value = '';
  renderCards(journey.filter(i => !i.ph));
  setBtn('btn-abroad');
};
window.showAll = function () {
  activeFilter = 'all';
  document.getElementById('search').value = '';
  renderCards(journey);
  setBtn('btn-all');
};
window.searchData = function() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const pool = getPool();
  renderCards(!q ? pool : pool.filter(item =>
    item.place.toLowerCase().includes(q)  ||
    item.country.toLowerCase().includes(q) ||
    item.year.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  ));
};

/* ────────────────────────────────────────────────────────────
   MODAL
   ──────────────────────────────────────────────────────────── */
function setModal({ img, eyebrow, place, cat, title, year, desc }) {
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-eyebrow-sm').textContent = eyebrow;
  document.getElementById('modal-place').textContent = place;
  document.getElementById('modal-cat').textContent = cat;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-year').textContent = year;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.openJourneyModal = function (i) {
  const it = journey[i];
  setModal({
    img: it.image,
    eyebrow: 'DESTINASYON',
    place: it.place,
    cat: it.ph ? 'PILIPINAS' : 'IBAYONG-DAGAT',
    title: it.country,
    year: it.year,
    desc: it.desc
  });
};
window.openBioModal = function (i) {
  const it = bioData[i];
  setModal({ img: it.img, eyebrow: it.tag, place: it.place, cat: it.cat, title: it.title, year: it.year, desc: it.desc });
};
window.closeModal = function () {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
};

/* ────────────────────────────────────────────────────────────
   SCROLL UTILITIES
   ──────────────────────────────────────────────────────────── */
function initScrollUtils() {
  const pBar = document.getElementById('progress-bar');
  const bTop = document.getElementById('back-top');

  addEventListener('scroll', () => {
    const st = scrollY;
    const dh = document.documentElement.scrollHeight - innerHeight;
    if (pBar) pBar.style.width = dh > 0 ? `${(st / dh) * 100}%` : '0%';
    if (bTop) bTop.classList.toggle('vis', st > 500);
  }, { passive: true });
}

/* ────────────────────────────────────────────────────────────
   MUSIC PLAYER
   ──────────────────────────────────────────────────────────── */
function initMusic() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('music-btn');
  const bars = document.getElementById('music-bars');
  if (!audio || !btn) return;

  let playing = false;
  const playSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><polygon points="3,1 12,6.5 3,12"/></svg>`;
  const pauseSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><rect x="2" y="1" width="4" height="11" rx="1"/><rect x="7" y="1" width="4" height="11" rx="1"/></svg>`;

  btn.addEventListener('click', () => {
    playing ? audio.pause() : audio.play().catch(() => { });
    playing = !playing;
    if (bars) bars.classList.toggle('on', playing);
    btn.innerHTML = playing ? pauseSvg : playSvg;
  });
}

/* ────────────────────────────────────────────────────────────
   CLOSING — final names reveal
   ──────────────────────────────────────────────────────────── */
function initClosing() {
  const fn = document.getElementById('final-names');
  const hint = document.getElementById('closing-hint');
  if (!fn) return;

  new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) fn.classList.add('vis'); });
  }, { threshold: .3 }).observe(fn);

  if ('ontouchstart' in window && hint) {
    hint.textContent = 'I-tap ang bawat pangalan';
  }
}

/* ────────────────────────────────────────────────────────────
   KEYBOARD
   ──────────────────────────────────────────────────────────── */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeModal();
  });
}

/* ────────────────────────────────────────────────────────────
   BIO REVEAL
   ──────────────────────────────────────────────────────────── */
function initBioReveal() {
  document.querySelectorAll('.bio-card').forEach(el => revealObserver.observe(el));
}

/* ────────────────────────────────────────────────────────────
   BOOT
   ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initGrain();
  initLoader();
  initCursor();
  initScrollBadge();
  initChapters();
  buildTimeline();
  renderCards(journey);
  initScrollUtils();
  initMusic();
  initClosing();
  initKeyboard();
  initBioReveal();
});
