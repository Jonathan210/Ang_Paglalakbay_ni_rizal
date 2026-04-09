// ── INTERSECTION OBSERVER (scroll-reveal) ──
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function observeCards() {
    document.querySelectorAll('.card, .bio-card').forEach(el => {
        el.classList.remove('visible');
        revealObserver.observe(el);
    });
}

// ── DATA ──
const journey = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg/640px-Rizal_Shrine_Outdoor_%28Calamba%2C_Laguna%29.jpg",
        place: "Calamba, Laguna",
        country: "Pilipinas",
        year: "Hunyo 19, 1861",
        desc: "Ipinanganak dito si Jose Rizal. Ang kanyang buong pangalan ay José Protasio Rizal Mercado y Alonso Realonda. Ang Calamba ay isang bayan sa baybayin ng Lawa ng Bay, at dito lumaki si Rizal sa isang maliwanag at masayang pamilya.",
        ph: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jose_Rizal_statue_in_Binan_laguna.JPG/640px-Jose_Rizal_statue_in_Binan_laguna.JPG",
        place: "Biñan, Laguna",
        country: "Pilipinas",
        year: "1869–1871",
        desc: "Sa edad na walo, ipinadala si Rizal sa Biñan upang matuto ng Espanyol at Latin sa ilalim ng guro na si Maestro Justiniano Cruz. Dito napatunayan ng batang Rizal ang kanyang kahusayan sa pag-aaral.",
        ph: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg",
        place: "Maynila",
        country: "Pilipinas",
        year: "1872–1882",
        desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila kung saan natapos niya ang kursong Bachelor of Arts nang may pinakamataas na karangalan. Dito niya naranasan ang diskriminasyon na nagpalakas ng kanyang pagnanais na lumaban.",
        ph: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg/640px-Puerta_del_Sol_-_Sol_%28Madrid%29_13.jpg",
        place: "Madrid, España",
        country: "España",
        year: "1882–1885",
        desc: "Patago na naglakbay si Rizal patungong Europa upang ituloy ang kanyang pag-aaral. Nag-aral siya ng medisina at pilosopiya at nagsilbing bahagi ng Kilusang Propaganda.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Paris_-_Eiffelturm_und_Marsfeld2.jpg/640px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
        place: "Paris, France",
        country: "France",
        year: "1885–1886",
        desc: "Sa Paris, nagsanay si Rizal bilang isang espesyalista sa mata sa ilalim ng kilalang doktor na si Dr. Louis de Wecker. Layunin niyang matutunang gamutin ang sakit sa mata ng kanyang ina.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Wilhelmsfeld_Odenwald_01.jpg/640px-Wilhelmsfeld_Odenwald_01.jpg",
        place: "Wilhelmsfeld, Alemanya",
        country: "Alemanya",
        year: "1886",
        desc: "Namalagi si Rizal sa tahanan ng pastor na si Karl Ullmer. Dito siya naging bahagi ng lokal na pamayanan at nagsimulang sulatin ang kanyang nobelang 'Noli Me Tangere'.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Heidelberg_Old_Bridge_2013.jpg/640px-Heidelberg_Old_Bridge_2013.jpg",
        place: "Heidelberg, Alemanya",
        country: "Alemanya",
        year: "1886",
        desc: "Nag-aral si Rizal sa University of Heidelberg. Dito niya pinagyaman ang kanyang kaalaman sa opthalmolohiya at isinulat ang ilang tanyag na tula.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Noli_Me_Tangere_1st_edition_cover.jpg/400px-Noli_Me_Tangere_1st_edition_cover.jpg",
        place: "Berlin, Alemanya",
        country: "Alemanya",
        year: "1886–1887",
        desc: "Sa Berlin, nailathala ni Rizal ang 'Noli Me Tangere' noong 1887. Ang nobelang ito ay nagbunyag ng kasamaan ng kolonyalismong Espanyol.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Asakusa_Sensoji_2006.jpg/640px-Asakusa_Sensoji_2006.jpg",
        place: "Japan",
        country: "Japan",
        year: "1888",
        desc: "Nabighani si Rizal sa kultura ng Japan. Nakilala niya ang isang babaeng Hapones na si Seiko Usui (O-Sei-San) na naging malapit sa kanya.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hongkong_Victoria_Harbour.jpg/640px-Hongkong_Victoria_Harbour.jpg",
        place: "Hong Kong",
        country: "Hong Kong",
        year: "1888",
        desc: "Bumalik si Rizal mula sa Europa at nagtayo ng klinika sa Hong Kong. Dito pansamantalang nanirahan ang kanyang pamilya.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/British_Museum_Reading_Room_Panorama_Feb_2006.jpg/640px-British_Museum_Reading_Room_Panorama_Feb_2006.jpg",
        place: "London, England",
        country: "UK",
        year: "1888–1889",
        desc: "Nananaliksik si Rizal sa British Museum tungkol sa kasaysayan ng Pilipinas. Pinag-aralan niya ang 'Sucesos de las Islas Filipinas' ni Morga.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BrusselsGrandPlace.jpg/640px-BrusselsGrandPlace.jpg",
        place: "Brussels, Belgium",
        country: "Belgium",
        year: "1889–1891",
        desc: "Lumipat si Rizal sa Brussels at nagsimulang sulatin ang 'El Filibusterismo'. Nanatili siya rito upang makatipid sa gastos sa Europa.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/El_Fil_cover.jpg/400px-El_Fil_cover.jpg",
        place: "Ghent, Belgium",
        country: "Belgium",
        year: "1891",
        desc: "Sa Ghent nailathala ang 'El Filibusterismo' noong Setyembre 1891 sa tulong ni Valentin Ventura. Mas mapanghimagsik ito kaysa Noli.",
        ph: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG/640px-Jose_Rizal_Shrine%2C_Dapitan%2C_Zamboanga_del_Norte.JPG",
        place: "Dapitan, Zamboanga",
        country: "Pilipinas",
        year: "1892–1896",
        desc: "Ipinatapon si Rizal sa Dapitan. Sa kabila nito, ginawa niyang progresibo ang lugar: nagtayo ng paaralan, ospital, at sistema ng tubig.",
        ph: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fort_Santiago_Manila.jpg/640px-Fort_Santiago_Manila.jpg",
        place: "Maynila (Fort Santiago)",
        country: "Pilipinas",
        year: "1896",
        desc: "Inakusahan si Rizal bilang tagapagtaguyod ng rebolusyon. Ipinakulong siya sa Fort Santiago bago ang kanyang huling paglilitis.",
        ph: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rizal_Monument_Luneta.jpg/640px-Rizal_Monument_Luneta.jpg",
        place: "Luneta, Maynila",
        country: "Pilipinas",
        year: "Disyembre 30, 1896",
        desc: "Binaril si Jose Rizal sa Bagumbayan. Ang kanyang kamatayan ang naging mitsa ng malawakang Rebolusyong Pilipino laban sa Espanya.",
        ph: true
    }
];

const bioData = [
    {
        title: "Maagang Buhay",
        year: "1861",
        place: "Calamba, Laguna",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jose_rizal_01.jpg/400px-Jose_rizal_01.jpg",
        desc: "Ipinanganak si Jose Protasio Rizal Mercado y Alonso Realonda noong Hunyo 19, 1861 sa Calamba, Laguna. Siya ay ang ikapito sa labing-isang anak nina Francisco Engracio Rizal Mercado y Alejandro at Teodora Morales Alonzo Realonda y Quintos. Lumaki siya sa isang mayamang pamilya na nagmamay-ari ng lupain at nag-aaral sa mga pribadong paaralan. Sa murang edad, nagpakita na siya ng kahusayan sa pag-aaral at sining. Ang kanyang ina ang naging kanyang unang guro at nagturo sa kanya ng pagbasa at pagsulat. Sa edad na tatlo, alam na niya ang alpabeto, at sa limang taon, kayang magbasa at magsulat. Nagsimula siyang mag-aral sa Biñan, Laguna at nagpatuloy sa kanyang pag-aaral sa Ateneo Municipal de Manila kung saan nagtapos siya na may karangalan. Ang kanyang maagang buhay ay puno ng mga karanasan na naghubog sa kanyang pagkatao at naging pundasyon ng kanyang pagiging pambansang bayani."
    },
    
    {
        title: "Pamilya",
        year: "Mercado-Alonso",
        place: "Calamba",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rizal_family.jpg/640px-Rizal_family.jpg",
        desc: "Ang pamilya Mercado-Alonso ay isa sa mga iginagalang na pamilya sa Calamba, Laguna. Si Francisco Engracio Rizal Mercado y Alejandro (1818-1898), ang ama, ay isang magsasaka at negosyante. Si Teodora Morales Alonzo Realonda y Quintos (1827-1911), ang ina, ay isang edukadang babae at nagsilbing unang guro ni Rizal. Sila ay may 11 na anak, kabilang si Rizal na ikapito. Ang mga kapatid niya ay sina Saturnina, Paciano, Narcisa, Olympia, Lucia, Maria, Josefa, Trinidad, Soledad, at Concepcion na namatay noong sanggol pa."
    },
    {
        title: "Edukasyon",
        year: "1872-1884",
        place: "Manila & Europe",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ateneo_Municipal_de_Manila_1880.jpg/640px-Ateneo_Municipal_de_Manila_1880.jpg",
        desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila (1872-1877) kung saan nakuha niya ang Bachelor of Arts na may pinakamataas na karangalan. Pagkatapos ay pumasok siya sa University of Santo Tomas (1877-1882) upang mag-aral ng Pilosopiya at Literatura, at sa ibang pagkakataon, Medisina. Noong 1882, nagtungo siya sa Europa at nag-aral sa Universidad Central de Madrid kung saan nakuha niya ang Licentiate in Medicine. Nag-aral din siya sa Unibersidad ng Paris at Unibersidad ng Heidelberg, kung saan nakuha niya ang degree sa Oftalmolohiya. Sa kanyang panahon sa Europa, naging poliglot siya at natutong magsalita ng 22 wika."
    },
    {
        title: "Buhay-Pag-ibig",
        year: "1877-1896",
        place: "Global",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Josephine_Bracken.jpg/400px-Josephine_Bracken.jpg",
        desc: "Leonor Valenzuela (1877-1880) - Isang probinsyana mula sa Pagsanjan, Laguna. Nagpadala si Rizal ng mga liham na nakasulat sa invisible ink.\n\nLeonor Rivera (1880-1890) - Ang \"pinakamahabang pag-ibig\" ni Rizal at inspirasyon ni Maria Clara sa Noli Me Tangere. Pinakasalan siya ni Henry Kipping.\n\nConsuelo Ortiga (1882-1883) - Anak ng gobernador ng Madrid. Hindi ito itinuloy ni Rizal dahil sa kanyang kaibigan na si Eduardo de Lete.\n\nO-Sei San (1888) - Isang Haponesa na nagturo sa kanya ng wikang Hapon. Inalok siya nitong pakasalan ngunit tumanggi si Rizal.\n\nGertrude Beckett (1888-1889) - Anak ng kanyang landlord sa London. Naging malapit sila ngunit umalis si Rizal para sa kanyang misyon.\n\nNelly Boustead (1891) - Isang Inglesa na may dugong Pilipino. Naging kompetensya siya ni Antonio Luna.\n\nSuzanne Jacoby (1890) - Naging malapit siya kay Rizal sa Brussels ngunit umalis ito nang umalis si Rizal.\n\nJosephine Bracken (1895-1896) - Ang huling pag-ibig ni Rizal. Isang Irish na naging kanyang kasama sa Dapitan. Ikinasal sila sa civil bago siya bitay."
    }
];

// ── FUNCTIONS ──
let activeFilter = 'all'; // tracks current nav filter

function renderTimeline(data) {
    const container = document.getElementById('timeline');
    if (data.length === 0) {
        container.innerHTML = `<div class="empty-state">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <p>Walang nahanap na destinasyon</p>
                </div>`;
        document.getElementById('resultCount').textContent = 'Walang resulta';
        return;
    }
    container.innerHTML = data.map((item) => {
        const originalIndex = journey.indexOf(item);
        return `
                <div class="card ${item.ph ? 'ph' : ''}" onclick="openTimelineModal(${originalIndex})">
                    <div class="card-img-wrap">
                        <img class="card-img" src="${item.image}" alt="${item.place}" loading="lazy">
                        <div class="card-img-overlay"></div>
                        <span class="card-flag--img">${item.ph ? 'Pilipinas' : 'Ibayong-dagat'}</span>
                    </div>
                    <div class="card-body">
                        <span class="year">${item.year}</span>
                        <h2>${item.place}</h2>
                        <div class="card-divider"></div>
                        <p style="font-size: 15px;">${item.desc.substring(0, 85)}…</p>
                        <span class="card-arrow">Magbasa Nang Higit Pa →</span>
                    </div>
                </div>
            `}).join('');
    document.getElementById('resultCount').textContent = `Naka-display: ${data.length} na destinasyon`;
    observeCards();
}

function openTimelineModal(index) {
    const item = journey[index];
    document.getElementById('modalImg').src = item.image;
    document.getElementById('modalPlace').textContent = item.place;
    document.getElementById('modalEyebrow').textContent = item.ph ? 'PILIPINAS' : 'IBAYONG-DAGAT';
    document.getElementById('modalEyebrowSmall').textContent = 'DESTINASYON';
    document.getElementById('modalTitle').textContent = item.country;
    document.getElementById('modalYear').textContent = item.year;
    document.getElementById('modalDesc').textContent = item.desc;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openBioModal(index) {
    const item = bioData[index];
    document.getElementById('modalImg').src = item.img;
    document.getElementById('modalPlace').textContent = item.place;
    document.getElementById('modalEyebrow').textContent = "TALAMBUHAY";
    document.getElementById('modalEyebrowSmall').textContent = item.eyebrow;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalYear').textContent = item.year;
    document.getElementById('modalDesc').textContent = item.desc;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function searchData() {
    const query = document.getElementById('search').value.toLowerCase().trim();
    let pool = journey;
    if (activeFilter === 'ph') pool = journey.filter(i => i.ph);
    if (activeFilter === 'abroad') pool = journey.filter(i => !i.ph);
    if (!query) { renderTimeline(pool); return; }
    const filtered = pool.filter(i =>
        i.place.toLowerCase().includes(query) ||
        i.country.toLowerCase().includes(query) ||
        i.year.includes(query) ||
        i.desc.toLowerCase().includes(query)
    );
    renderTimeline(filtered);
}

function filterPH() {
    activeFilter = 'ph';
    document.getElementById('search').value = '';
    renderTimeline(journey.filter(i => i.ph));
    updateNav('btn-ph');
}

function filterAbroad() {
    activeFilter = 'abroad';
    document.getElementById('search').value = '';
    renderTimeline(journey.filter(i => !i.ph));
    updateNav('btn-abroad');
}

function showAll() {
    activeFilter = 'all';
    document.getElementById('search').value = '';
    renderTimeline(journey);
    updateNav('btn-all');
}

function updateNav(id) {
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ── CURSOR (event delegation — works for dynamically rendered cards) ──
const outer = document.getElementById('cursorOuter');
const inner = document.getElementById('cursorInner');

const isTouch = window.matchMedia('(hover: none)').matches;
if (!isTouch) {
    document.addEventListener('mousemove', e => {
        outer.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
        inner.style.transform = `translate3d(${e.clientX - 12.5}px, ${e.clientY - 12.5}px, 0)`;
    });

    document.addEventListener('mouseover', e => {
        if (e.target.closest('a, button, input, .card, .bio-card, label, select, textarea')) {
            outer.classList.add('cursor-hover');
            inner.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', e => {
        if (e.target.closest('a, button, input, .card, .bio-card, label, select, textarea')) {
            outer.classList.remove('cursor-hover');
            inner.classList.remove('cursor-hover');
        }
    });
}

// ── MUSIC PLAYER ──
const audio = document.getElementById('bgMusic');
const btn = document.getElementById('musicToggleBtn');
const bars = document.getElementById('musicBars');
let playing = false;

const playIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="3,1 13,7 3,13"/></svg>`;
const pauseIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="1" width="4" height="12" rx="1"/><rect x="8" y="1" width="4" height="12" rx="1"/></svg>`;

btn.addEventListener('click', () => {
    if (playing) {
        audio.pause();
        bars.classList.remove('active');
        btn.innerHTML = playIcon;
    } else {
        audio.play().catch(() => { }); // gracefully handle autoplay policy
        bars.classList.add('active');
        btn.innerHTML = pauseIcon;
    }
    playing = !playing;
});

// ── SCROLL PROGRESS + BACK TO TOP ──
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
    backToTop.classList.toggle('visible', scrollTop > 400);
}, { passive: true });

// ── KEYBOARD SUPPORT ──
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ── OBSERVE BIO CARDS ON LOAD ──
document.querySelectorAll('.bio-card').forEach(el => revealObserver.observe(el));

// Initialize
renderTimeline(journey);
