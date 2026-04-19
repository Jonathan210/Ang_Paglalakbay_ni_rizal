/* ════════════════════════════════════════════════════════════
   ANG PAGLALAKBAY NI RIZAL — main.js
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */
const journey = [
  {
    image: "assets/rizal_pictures/Rizal Shrine exterior.jpg",
    place: "Calamba, Laguna", country: "Pilipinas", year: "Hunyo 19, 1861", ph: true,
    desc: "Ipinanganak dito si Jose Rizal. Ang kanyang buong pangalan ay José Protasio Rizal Mercado y Alonso Realonda. Ang Calamba ay isang bayan sa baybayin ng Lawa ng Bay, at dito lumaki si Rizal sa isang maliwanag at masayang pamilya."
  },
  {
    image: "assets/rizal_pictures/Biñan Church (San Isidro Labrador) facade.jpg",
    place: "Biñan, Laguna", country: "Pilipinas", year: "1869–1871", ph: true,
    desc: "Sa edad na walo, ipinadala si Rizal sa Biñan upang matuto ng Espanyol at Latin sa ilalim ng guro na si Maestro Justiniano Cruz. Dito napatunayan ng batang Rizal ang kanyang kahusayan sa pag-aaral."
  },
  {
    image: "assets/rizal_pictures/Ateneo de Manila facade (1887 photo).jpg",
    place: "Maynila", country: "Pilipinas", year: "1872–1882", ph: true,
    desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila kung saan natapos niya ang kursong Bachelor of Arts nang may pinakamataas na karangalan. Dito niya naranasan ang diskriminasyon na nagpalakas ng kanyang pagnanais na lumaban."
  },
  {
    image: "assets/rizal_pictures/Madrid Retiro Park.jpg",
    place: "Madrid, España", country: "España", year: "1882–1885", ph: false,
    desc: "Patago na naglakbay si Rizal patungong Europa upang ituloy ang kanyang pag-aaral. Nag-aral siya ng medisina at pilosopiya at nagsilbing bahagi ng Kilusang Propaganda."
  },
  {
    image: "assets/rizal_pictures/Paris Eiffel Tower & Champ de Mars.jpg",
    place: "Paris, France", country: "France", year: "1885–1886", ph: false,
    desc: "Sa Paris, nagsanay si Rizal bilang isang espesyalista sa mata sa ilalim ng kilalang doktor na si Dr. Louis de Wecker. Layunin niyang matutunang gamutin ang sakit sa mata ng kanyang ina."
  },
  {
    image: "assets/rizal_pictures/Wilhelmsfeld Village center.jpg",
    place: "Wilhelmsfeld, Alemanya", country: "Alemanya", year: "1886", ph: false,
    desc: "Namalagi si Rizal sa tahanan ng pastor na si Karl Ullmer. Dito siya naging bahagi ng lokal na pamayanan at nagsimulang sulatin ang kanyang nobelang 'Noli Me Tangere'."
  },
  {
    image: "assets/rizal_pictures/Heidelberg Castle over the Neckar.jpg",
    place: "Heidelberg, Alemanya", country: "Alemanya", year: "1886", ph: false,
    desc: "Nag-aral si Rizal sa University of Heidelberg. Dito niya pinagyaman ang kanyang kaalaman sa opthalmolohiya at isinulat ang ilang tanyag na tula."
  },
  {
    image: "assets/rizal_pictures/BerlinBrandenburg Gate.jpg",
    place: "Berlin, Alemanya", country: "Alemanya", year: "1886–1887", ph: false,
    desc: "Sa Berlin, nailathala ni Rizal ang 'Noli Me Tangere' noong 1887. Ang nobelang ito ay nagbunyag ng kasamaan ng kolonyalismong Espanyol."
  },
  {
    image: "assets/rizal_pictures/Japan Meiji Shrine aerial.jpg",
    place: "Japan", country: "Japan", year: "1888", ph: false,
    desc: "Nabighani si Rizal sa kultura ng Japan. Nakilala niya ang isang babaeng Hapones na si Seiko Usui (O-Sei-San) na naging malapit sa kanya."
  },
  {
    image: "assets/rizal_pictures/Hong KongVictoria Harbour night skyline.jpg",
    place: "Hong Kong", country: "Hong Kong", year: "1888", ph: false,
    desc: "Bumalik si Rizal mula sa Europa at nagtayo ng klinika sa Hong Kong. Dito pansamantalang nanirahan ang kanyang pamilya."
  },
  {
    image: "assets/rizal_pictures/London British Museum Great Court.jpg",
    place: "London, England", country: "UK", year: "1888–1889", ph: false,
    desc: "Nananaliksik si Rizal sa British Museum tungkol sa kasaysayan ng Pilipinas. Pinag-aralan niya ang 'Sucesos de las Islas Filipinas' ni Morga."
  },
  {
    image: "assets/rizal_pictures/Brussels Grand Place.jpg",
    place: "Brussels, Belgium", country: "Belgium", year: "1889–1891", ph: false,
    desc: "Lumipat si Rizal sa Brussels at nagsimulang sulatin ang 'El Filibusterismo'. Nanatili siya rito upang makatipid sa gastos sa Europa."
  },
  {
    image: "assets/rizal_pictures/Ghent Graslei canal.jpg",
    place: "Ghent, Belgium", country: "Belgium", year: "1891", ph: false,
    desc: "Sa Ghent nailathala ang 'El Filibusterismo' noong Setyembre 1891 sa tulong ni Valentin Ventura. Mas mapanghimagsik ito kaysa Noli."
  },
  {
    image: "assets/rizal_pictures/Dapitan Rizal Shrine Dapitan (2023).jpg",
    place: "Dapitan, Zamboanga", country: "Pilipinas", year: "1892–1896", ph: true,
    desc: "Ipinatapon si Rizal sa Dapitan. Sa kabila nito, ginawa niyang progresibo ang lugar: nagtayo ng paaralan, ospital, at sistema ng tubig."
  },
  {
    image: "assets/rizal_pictures/Fort Santiago Intramuros gate.jpg",
    place: "Maynila (Fort Santiago)", country: "Pilipinas", year: "1896", ph: true,
    desc: "Inakusahan si Rizal bilang tagapagtaguyod ng rebolusyon. Ipinakulong siya sa Fort Santiago bago ang kanyang huling paglilitis."
  },
  {
    image: "assets/rizal_pictures/Luneta Rizal Monument.jpg",
    place: "Luneta, Maynila", country: "Pilipinas", year: "Disyembre 30, 1896", ph: true,
    desc: "Binaril si Jose Rizal sa Bagumbayan. Ang kanyang kamatayan ang naging mitsa ng malawakang Rebolusyong Pilipino laban sa Espanya."
  }
];

const bioData = [
  {
    title: "Maagang Buhay", year: "1861", place: "Calamba, Laguna",
    cat: "TALAMBUHAY", tag: "MAAGANG BUHAY",
    img: "assets/rizal_pictures/Bio_Maagang BuhayRizal age 7 (1868 photo).jpg",
    desc: "Ipinanganak si Jose Protasio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861 sa Calamba, Laguna. Siya ay ang ikapito sa labing-isang anak nina Francisco Engracio Rizal Mercado at Teodora Morales Alonso Realonda. Ang ina niya ang naging kanyang unang guro, nagturo sa kanya ng pagbasa at pagsulat. Sa edad na tatlo, alam na niya ang alpabeto; sa limang taon, kayang magbasa at magsulat."
  },
  {
    title: "Pamilya", year: "Mercado-Alonso", place: "Calamba",
    cat: "TALAMBUHAY", tag: "PAMILYA",
    img: "assets/rizal_pictures/Bio_PamilyaRizal Shrine Calamba.jpeg",
    desc: "Ang pamilya Mercado-Alonso ay isa sa mga iginagalang na angkan sa Calamba, Laguna. Ang ama ni Rizal na si Francisco Mercado ay nagmula sa isang pamilyang Tsino-Pilipino, habang ang kanyang ina na si Teodora Alonso ay nagmula sa isang kilalang pamilya sa Manila. Sila ay may labing-isang anak, at si Jose ay ikapito."
  },
  {
    title: "Edukasyon", year: "1872–1882", place: "Maynila",
    cat: "TALAMBUHAY", tag: "EDUKASYON",
    img: "assets/rizal_pictures/Bio_EdukasyonAteneo de Manila facade.jpg",
    desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila (1872–1877) kung saan nagtapos siya nang may pinakamataas na karangalan. Nagpatuloy siya sa University of Santo Tomas (1877–1882). Patago siyang naglakbay sa España noong 1882 para ituloy ang pag-aaral sa Universidad Central de Madrid. Nagtapos siya bilang Licentiate in Medicine at may doctorate in philosophy and letters."
  },
  {
    title: "Buhay-Pag-ibig", year: "1877–1896", place: "Iba't ibang Lugar",
    cat: "TALAMBUHAY", tag: "PAG-IBIG",
    img: "assets/rizal_pictures/Bio_Buhay-Pag-ibigJosephine Bracken portrait.jpg",
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

  const dot = document.createElement('div'); dot.id = 'cur';
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
   CHAPTER SNAP SLIDESHOW (desktop horizontal sticky)
   ──────────────────────────────────────────────────────────── */
function initChapters() {
  const track = document.getElementById('ch-track');
  const prog = document.getElementById('ch-progress');
  const sec = document.getElementById('chapters');
  const dots = document.querySelectorAll('.ch-dot');
  const panels = document.querySelectorAll('.ch-panel');
  if (!track || !sec || !panels.length) return;

  const PANEL_COUNT = panels.length;          // 3
  const isDesktop = () => window.innerWidth > 800;

  /* ── current (possibly fractional) slide index ── */
  let currentSlide = 0;

  /* ── Snap to an integer slide with CSS transition ── */
  const goTo = (idx) => {
    idx = Math.max(0, Math.min(PANEL_COUNT - 1, idx));
    currentSlide = idx;

    /* Slide the track with a smooth ease */
    track.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
    track.style.transform = `translateX(-${idx * innerWidth}px)`;

    /* Progress bar */
    if (prog) prog.style.width = ((idx / (PANEL_COUNT - 1)) * 100) + '%';

    /* Active dot */
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));

    /* Panel entrance: fade-slide content in */
    panels.forEach((p, i) => {
      p.classList.toggle('ch-active', i === idx);
      p.classList.toggle('ch-past', i < idx);
      p.classList.toggle('ch-next', i > idx);
    });
  };

  /* ── Map scroll position inside #chapters → snapped slide ── */
  const updateFromScroll = () => {
    if (!isDesktop()) {
      track.style.transition = '';
      track.style.transform = '';
      if (prog) prog.style.width = '0%';
      dots.forEach((d, i) => d.classList.toggle('active', i === 0));
      return;
    }

    const rect = sec.getBoundingClientRect();
    const total = sec.offsetHeight - innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const p = Math.min(1, scrolled / total);

    /* Map 0-1 → snapped slide index (0, 1, 2) */
    const raw = p * PANEL_COUNT;
    const snapped = Math.min(PANEL_COUNT - 1, Math.floor(raw));

    if (snapped !== currentSlide) goTo(snapped);
  };

  /* ── Keyboard navigation while #chapters is in viewport ── */
  let inView = false;
  const viewObs = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
  }, { threshold: 0.4 });
  viewObs.observe(sec);

  document.addEventListener('keydown', e => {
    if (!inView || !isDesktop()) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentSlide < PANEL_COUNT - 1) {
        /* Nudge scroll so next panel's zone is reached */
        const targetP = (currentSlide + 1) / PANEL_COUNT + 0.01;
        const targetScroll = sec.offsetTop + targetP * (sec.offsetHeight - innerHeight);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentSlide > 0) {
        const targetP = (currentSlide - 1) / PANEL_COUNT + 0.01;
        const targetScroll = sec.offsetTop + targetP * (sec.offsetHeight - innerHeight);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  });

  /* ── Dot click navigation ── */
  dots.forEach((dot, i) => {
    dot.style.cursor = 'pointer';
    dot.addEventListener('click', () => {
      const targetP = i / PANEL_COUNT + 0.01;
      const targetScroll = sec.offsetTop + targetP * (sec.offsetHeight - innerHeight);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });

  addEventListener('scroll', updateFromScroll, { passive: true });
  addEventListener('resize', () => {
    track.style.transition = '';
    goTo(currentSlide);
  });

  /* initial */
  goTo(0);
  updateFromScroll();
}

/* ────────────────────────────────────────────────────────────
   TIMELINE RENDER
   ──────────────────────────────────────────────────────────── */
function buildTimeline() {
  const track = document.getElementById('tl-track');
  if (!track) return;

  const icons = ['🏡', '🏫', '🎓', '🏛️', '🗼', '🌿', '🎓', '📖', '⛩️', '🌊', '📚', '🏙️', '📘', '⛺', '🏰', '🌅'];

  const ctaArrow = `<svg width="8" height="8" viewBox="0 0 10 10" fill="none"><line x1="1" y1="5" x2="9" y2="5" stroke="#c9a84c" stroke-width="1.2"/><polyline points="6,2 9,5 6,8" fill="none" stroke="#c9a84c" stroke-width="1.2"/></svg>`;

  track.innerHTML = journey.map((item, i) => `
    <div class="tl-item${item.ph ? ' ph' : ''}" data-index="${i}">
      <div class="tl-node">${icons[i] || '·'}</div>
      <div class="tl-card-body">
        <span class="tl-index">${String(i + 1).padStart(2, '0')} / ${journey.length}</span>
        <span class="tl-year">${item.year}</span>
        <span class="tl-place">${item.place}</span>
        <span class="tl-tag">${item.ph ? 'Pilipinas' : 'Ibayong-dagat'}</span>
        <span class="tl-cta">${ctaArrow} Tingnan</span>
      </div>
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
  ['mouseleave', 'mouseup'].forEach(ev => el.addEventListener(ev, () => {
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
          <img class="card-img" src="${encodeURI(item.image)}" alt="${item.place}" loading="lazy">
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
window.searchData = function () {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const pool = getPool();
  renderCards(!q ? pool : pool.filter(item =>
    item.place.toLowerCase().includes(q) ||
    item.country.toLowerCase().includes(q) ||
    item.year.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  ));
};

/* ────────────────────────────────────────────────────────────
   MODAL
   ──────────────────────────────────────────────────────────── */
function setModal({ img, eyebrow, place, cat, title, year, desc }) {
  document.getElementById('modal-img').src = encodeURI(img);
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

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  addEventListener('scroll', () => {
    const st = scrollY;
    const dh = document.documentElement.scrollHeight - innerHeight;
    if (pBar) pBar.style.width = dh > 0 ? `${(st / dh) * 100}%` : '0%';
    if (bTop) bTop.classList.toggle('vis', st > 500);
  }, { passive: true });
}

/* ────────────────────────────────────────────────────────────
   SCROLL POSITION RESTORE
   ──────────────────────────────────────────────────────────── */
function restoreScrollPosition() {
  // Ensure we start at the top right away
  window.scrollTo(0, 0);

  // Also enforce the top-reset after the loader is hidden
  const ldr = document.getElementById('loader');
  if (!ldr) return;
  const obs = new MutationObserver(() => {
    if (ldr.classList.contains('out')) {
      obs.disconnect();
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 10);
    }
  });
  obs.observe(ldr, { attributes: true, attributeFilter: ['class'] });
}

/* ────────────────────────────────────────────────────────────
   MUSIC PLAYER
   ──────────────────────────────────────────────────────────── */
function initMusic() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('music-btn');
  const bars = document.getElementById('music-bars');
  if (!audio || !btn) return;

  // Set volume to 50%
  audio.volume = 0.3;

  let playing = false;
  const playSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><polygon points="3,1 12,6.5 3,12"/></svg>`;
  const pauseSvg = `<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><rect x="2" y="1" width="4" height="11" rx="1"/><rect x="7" y="1" width="4" height="11" rx="1"/></svg>`;

  function startPlaying() {
    audio.play().then(() => {
      playing = true;
      if (bars) bars.classList.add('on');
      btn.innerHTML = pauseSvg;
    }).catch(() => {
      // Autoplay blocked — wait for first user interaction
      const unlockAutoplay = () => {
        audio.play().then(() => {
          playing = true;
          if (bars) bars.classList.add('on');
          btn.innerHTML = pauseSvg;
        }).catch(() => { });
        document.removeEventListener('click', unlockAutoplay);
        document.removeEventListener('keydown', unlockAutoplay);
        document.removeEventListener('touchstart', unlockAutoplay);
      };
      document.addEventListener('click', unlockAutoplay, { once: true });
      document.addEventListener('keydown', unlockAutoplay, { once: true });
      document.addEventListener('touchstart', unlockAutoplay, { once: true });
    });
  }

  btn.addEventListener('click', () => {
    if (playing) {
      audio.pause();
      playing = false;
      if (bars) bars.classList.remove('on');
      btn.innerHTML = playSvg;
    } else {
      audio.play().catch(() => { });
      playing = true;
      if (bars) bars.classList.add('on');
      btn.innerHTML = pauseSvg;
    }
  });

  // Auto-play after the loader finishes
  const ldrAutoplay = new MutationObserver(() => {
    const ldr = document.getElementById('loader');
    if (ldr && ldr.classList.contains('out')) {
      ldrAutoplay.disconnect();
      startPlaying();
    }
  });
  const ldrEl = document.getElementById('loader');
  if (ldrEl) ldrAutoplay.observe(ldrEl, { attributes: true, attributeFilter: ['class'] });
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
  restoreScrollPosition();
});
/* ════════════════════════════════════════════════════════════
   SOUND EFFECTS ENGINE (Web Audio API — no external files)
   ════════════════════════════════════════════════════════════ */

const SFX = (() => {
  let ctx = null;
  let enabled = true;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // Generic tone builder
  function tone({ freq = 440, type = 'sine', attack = 0.01, sustain = 0.05, release = 0.18,
    vol = 0.18, startTime = 0, freqEnd = null, filter = null } = {}) {
    if (!enabled) return;
    const c = getCtx();
    const t = c.currentTime + startTime;

    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, t + attack + sustain + release);

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + attack);
    gain.gain.setValueAtTime(vol, t + attack + sustain);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + sustain + release);

    if (filter) {
      const bq = c.createBiquadFilter();
      bq.type = filter.type || 'lowpass';
      bq.frequency.value = filter.freq || 2000;
      bq.Q.value = filter.Q || 1;
      osc.connect(bq); bq.connect(gain);
    } else {
      osc.connect(gain);
    }

    gain.connect(c.destination);
    osc.start(t);
    osc.stop(t + attack + sustain + release + 0.05);
  }

  return {
    // ── UI click — soft, antique bell-like ──
    click() {
      tone({ freq: 880, type: 'sine', attack: 0.005, sustain: 0.01, release: 0.28, vol: 0.12 });
      tone({ freq: 1320, type: 'sine', attack: 0.005, sustain: 0.005, release: 0.2, vol: 0.05, startTime: 0.005 });
    },

    // ── Modal open — elegant chime up ──
    modalOpen() {
      [0, 0.08, 0.16].forEach((t, i) => {
        tone({ freq: [523, 659, 784][i], type: 'sine', attack: 0.01, sustain: 0.04, release: 0.5, vol: 0.10, startTime: t });
      });
    },

    // ── Modal close — chime down ──
    modalClose() {
      [0, 0.07].forEach((t, i) => {
        tone({ freq: [659, 523][i], type: 'sine', attack: 0.01, sustain: 0.02, release: 0.35, vol: 0.08, startTime: t });
      });
    },

    // ── Card hover — very subtle tick ──
    hover() {
      tone({ freq: 1200, type: 'sine', attack: 0.003, sustain: 0.003, release: 0.08, vol: 0.05 });
    },

    // ── Filter/nav button — short pluck ──
    button() {
      tone({ freq: 440, type: 'triangle', attack: 0.005, sustain: 0.01, release: 0.22, vol: 0.10 });
      tone({ freq: 880, type: 'sine', attack: 0.005, sustain: 0.005, release: 0.15, vol: 0.04, startTime: 0.003 });
    },

    // ── Loader complete — triumphant rise ──
    loaderDone() {
      const notes = [523, 659, 784, 1047];
      notes.forEach((f, i) => {
        tone({ freq: f, type: 'sine', attack: 0.02, sustain: 0.08, release: 0.6, vol: 0.12, startTime: i * 0.12 });
      });
    },

    // ── Timeline item hover — subtle shimmer ──
    tlHover() {
      tone({ freq: 1046, type: 'sine', attack: 0.004, sustain: 0.003, release: 0.12, vol: 0.06 });
    },

    // ── Back-to-top — whoosh ──
    whoosh() {
      tone({ freq: 200, freqEnd: 600, type: 'sine', attack: 0.01, sustain: 0.05, release: 0.25, vol: 0.10 });
    },

    // ── Scroll milestone ping ──
    milestone() {
      tone({ freq: 783, type: 'sine', attack: 0.01, sustain: 0.03, release: 0.5, vol: 0.08 });
    },

    setEnabled(v) { enabled = v; },
    isEnabled() { return enabled; }
  };
})();

/* ────────────────────────────────────────────────────────────
   SOUND INDICATOR FLASH
   ──────────────────────────────────────────────────────────── */
function flashSoundIndicator(emoji) {
  const el = document.getElementById('sound-indicator');
  if (!el) return;
  el.textContent = emoji;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 500);
}

/* ────────────────────────────────────────────────────────────
   PATCH EXISTING INTERACTIONS WITH SOUND
   ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // ── Cards & bio-cards: hover + click ──
  document.addEventListener('mouseover', e => {
    const card = e.target.closest('.card, .bio-card, .tl-item');
    if (card && !card._hovered) { card._hovered = true; SFX.hover(); }
  });
  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card, .bio-card, .tl-item');
    if (card) card._hovered = false;
  });

  // ── Nav links ──
  document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => SFX.click());
  });

  // ── Filter buttons ──
  document.querySelectorAll('.dest-btn').forEach(el => {
    el.addEventListener('click', () => SFX.button());
  });

  // ── Back to top ──
  const bTop = document.getElementById('back-top');
  if (bTop) bTop.addEventListener('click', () => SFX.whoosh());

  // ── Patch modal open/close with sounds ──
  const _origSetModal = window.openJourneyModal;
  window.openJourneyModal = function (i) {
    SFX.modalOpen();
    _origSetModal(i);
  };
  const _origBioModal = window.openBioModal;
  window.openBioModal = function (i) {
    SFX.modalOpen();
    _origBioModal(i);
  };
  const _origClose = window.closeModal;
  window.closeModal = function () {
    SFX.modalClose();
    _origClose();
  };

  // ── Scroll milestones ──
  let lastMilestone = 0;
  window.addEventListener('scroll', () => {
    const p = scrollY / (document.documentElement.scrollHeight - innerHeight);
    const m = Math.floor(p * 4);
    if (m > lastMilestone && m <= 3) { lastMilestone = m; SFX.milestone(); }
  }, { passive: true });

  // ── Sound toggle on music btn — also toggle sfx ──
  const musicBtn = document.getElementById('music-btn');
  if (musicBtn) {
    const orig = musicBtn.onclick;
    musicBtn.addEventListener('click', () => SFX.button(), true);
  }

  // ── Loader done sound (patched in after loader finishes) ──
  const _ldrObs = new MutationObserver(() => {
    const ldr = document.getElementById('loader');
    if (ldr && ldr.classList.contains('out')) {
      SFX.loaderDone();
      _ldrObs.disconnect();
    }
  });
  const ldr = document.getElementById('loader');
  if (ldr) _ldrObs.observe(ldr, { attributes: true, attributeFilter: ['class'] });

  // ── Search input ──
  const searchEl = document.getElementById('search');
  if (searchEl) {
    let debounce;
    searchEl.addEventListener('keyup', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => SFX.click(), 150);
    });
  }
});
