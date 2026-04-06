const journey = [
    {
        place: "Calamba, Laguna",
        country: "Pilipinas",
        year: "Hunyo 19, 1861",
        desc: "Ipinanganak dito si Jose Rizal. Ang kanyang buong pangalan ay José Protasio Rizal Mercado y Alonso Realonda. Ang Calamba ay isang bayan sa baybayin ng Lawa ng Bay, at dito lumaki si Rizal sa isang maliwanag at masayang pamilya. Ang kagandahan ng kalikasan ng kanyang bayan ang naging inspirasyon sa marami sa kanyang mga tula at akda.",
        ph: true
    },
    {
        place: "Biñan, Laguna",
        country: "Pilipinas",
        year: "1869–1871",
        desc: "Sa edad na walo, ipinadala si Rizal sa Biñan upang matuto ng Espanyol at Latin sa ilalim ng guro na si Maestro Justiniano Cruz. Dito napatunayan ng batang Rizal ang kanyang kahusayan sa pag-aaral at nagpamalas ng natatanging talino.",
        ph: true
    },
    {
        place: "Maynila",
        country: "Pilipinas",
        year: "1872–1882",
        desc: "Nag-aral si Rizal sa Ateneo Municipal de Manila kung saan natapos niya ang kursong Bachelor of Arts nang may pinakamataas na karangalan. Pagkatapos, pumasok siya sa Universidad de Santo Tomas upang mag-aral ng medisina at pilosopiya. Dito niya naranasan ang diskriminasyon ng mga fraile ng Espanya, na nagpalakas ng kanyang pagnanais na ipaglaban ang karapatan ng mga Pilipino.",
        ph: true
    },
    {
        place: "Madrid, España",
        country: "España",
        year: "1882–1885",
        desc: "Patago na naglakbay si Rizal patungong Europa upang ituloy ang kanyang pag-aaral sa Universidad Central de Madrid. Nag-aral siya ng medisina at pilosopiya at nagsibling bahagi ng Kilusang Propaganda — isang galaw ng mga intelektwal na Pilipino upang ipaglaban ang mga reporma at karapatan ng bansang Pilipinas laban sa pamamahala ng Espanya.",
        ph: false
    },
    {
        place: "Paris, France",
        country: "France",
        year: "1885–1886",
        desc: "Sa Paris, nagsanay si Rizal bilang isang espesyalista sa mata sa ilalim ng kilalang doktor na si Dr. Louis de Wecker. Pangunahing layunin niya ang matuto upang magamot ang sakit sa mata ng kanyang ina na si Doña Teodora Alonso na unti-unting nanlalabo ang paningin.",
        ph: false
    },
    {
        place: "Wilhelmsfeld, Alemanya",
        country: "Alemanya",
        year: "1886",
        desc: "Namalagi si Rizal sa maliit na bayan ng Wilhelmsfeld, kung saan siya tumira sa tahanan ng isang Protestant na pastor na si Karl Ullmer. Dito siya naging bahagi ng lokal na pamayanan at nagsimulang sulatin ang kanyang nobelang 'Noli Me Tangere'.",
        ph: false
    },
    {
        place: "Heidelberg, Alemanya",
        country: "Alemanya",
        year: "1886",
        desc: "Nag-aral si Rizal sa University of Heidelberg — isa sa pinakamatandang unibersidad sa Alemanya. Dito niya pinagyaman ang kanyang kaalaman sa opthalmolohiya. Isinulat din niya ang tanyag na tulang 'Sa Aking Mga Kabata' at nagpatuloy sa pagsusulat ng 'Noli Me Tangere'.",
        ph: false
    },
    {
        place: "Berlin, Alemanya",
        country: "Alemanya",
        year: "1886–1887",
        desc: "Sa Berlin, nailathala ni Rizal ang kanyang unang nobela na 'Noli Me Tangere' noong 1887 sa tulong ng kanyang mga kaibigan. Ang nobelang ito ay nagbunyag ng kasamaan ng kolonyalismong Espanyol at ng kaapihan ng simbahan, at nagdulot ng malaking kaguluhan sa mga awtoridad ng Espanya.",
        ph: false
    },
    {
        place: "Japan",
        country: "Japan",
        year: "Pebrero–Abril 1888",
        desc: "Sa pagbabalik niya mula sa Europa papuntang Hong Kong, tumigil si Rizal sa Japan nang halos anim na linggo. Nabighani siya sa kultura, sining, at lipunan ng Japan. Nakilala niya ang isang babaeng Hapones na si Seiko Usui (O-Sei-San) na naging malapit sa kanya.",
        ph: false
    },
    {
        place: "Hong Kong",
        country: "Hong Kong",
        year: "1888",
        desc: "Bumalik si Rizal mula sa Europa at nagtayo ng klinika sa Hong Kong kung saan nag-aral at nagpagamot ang maraming Pilipino. Nakatira rin dito ang kanyang pamilya nang pansamantala. Binalak niyang magtayo ng isang kolonyang Pilipino sa Borneo ngunit hindi natuloy ang plano.",
        ph: false
    },
    {
        place: "London, England",
        country: "United Kingdom",
        year: "1888–1889",
        desc: "Nanatili si Rizal sa London at nananaliksik sa British Museum tungkol sa kasaysayan ng Pilipinas. Dito niya binasa at pinag-anotasyan ang librong 'Sucesos de las Islas Filipinas' ni Antonio Morga upang patunayan na ang mga Pilipino ay may maunlad at mayamang kulturang bago pa dumating ang mga Espanyol.",
        ph: false
    },
    {
        place: "Brussels, Belgium",
        country: "Belgium",
        year: "1889–1891",
        desc: "Lumipat si Rizal sa Brussels at nagsimulang sulatin ang ikalawang nobela na 'El Filibusterismo'. Nanatili siya rito upang makatipid sa gastos ng pamumuhay kumpara sa Paris, at patuloy na nakiisa sa mga Pilipinong propagandistang nasa Europa.",
        ph: false
    },
    {
        place: "Ghent, Belgium",
        country: "Belgium",
        year: "1891",
        desc: "Sa Ghent nailathala ni Rizal ang 'El Filibusterismo' noong Setyembre 1891 sa pamamagitan ng tulong ng kanyang kaibigan na si Valentin Ventura. Ang nobelang ito ay mas mapanghimagsik kaysa 'Noli Me Tangere' at nagpakita ng desperadong sitwasyon ng bansang Pilipinas.",
        ph: false
    },
    {
        place: "Dapitan, Zamboanga del Norte",
        country: "Pilipinas",
        year: "1892–1896",
        desc: "Ipinatapon si Rizal sa Dapitan ng mga awtoridad ng Espanya matapos niyang itatag ang La Liga Filipina sa Maynila. Sa kabila ng pagkatapon, ginawa niya ang Dapitan na mas maunlad: nagtayo ng paaralan para sa mga kabataan, nagtatag ng ospital, nagdisenyo ng sistema ng tubig, at nag-aral ng siyensya, agrikultura, at sining.",
        ph: true
    },
    {
        place: "Maynila (Bilibid)",
        country: "Pilipinas",
        year: "Nobyembre–Disyembre 1896",
        desc: "Nang sumabog ang Himagsikan ng Katipunan noong Agosto 1896, inakusahan si Rizal bilang pangunahing tagapagtaguyod ng rebolusyon kahit na nasa Dapitan siya. Inilipat siya sa Bilib sa Maynila at sinubukan ng isang huwad na paglilitis ng militar. Bago siya ipapapatay, isinulat niya ang kanyang huling tula na 'Mi Ultimo Adios'.",
        ph: true
    },
    {
        place: "Luneta (Rizal Park), Maynila",
        country: "Pilipinas",
        year: "Disyembre 30, 1896",
        desc: "Binaril si Jose Rizal sa Bagumbayan (ngayon ay Rizal Park) sa harap ng libu-libong tao noong ika-30 ng Disyembre, 1896, sa edad na 35 taon. Ang kanyang kamatayan ay nagsilbing apoy na nagpaalab ng Rebolusyong Pilipino laban sa pananakop ng Espanya. Siya ay kinikilalang pambansang bayani ng Pilipinas.",
        ph: true
    }
];

const timeline = document.getElementById("timeline");
const countEl = document.getElementById("resultCount");

function display(data) {
    timeline.innerHTML = "";

    countEl.innerHTML = `Nagpapakita ng <span>${data.length}</span> sa ${journey.length} destinasyon`;

    data.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "card" + (item.ph ? " ph" : "");

        const label = item.ph ? "🇵🇭 Pilipinas" : "🌍 Ibayong-dagat";

        card.innerHTML = `
      <span class="card-flag">${label}</span>
      <h2>${item.place}</h2>
      <div class="year">${item.year}</div>
      <div class="card-divider"></div>
      <p>${item.desc.length > 140 ? item.desc.slice(0, 140) + "…" : item.desc}</p>
      <span class="card-arrow">Magbasa pa →</span>
    `;

        card.onclick = () => showModal(item);
        timeline.appendChild(card);
    });
}

function showModal(item) {
    const overlay = document.getElementById("modalOverlay");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
    <div class="modal-eyebrow">${item.ph ? "🇵🇭 Pilipinas" : "🌍 Internasyonal"}</div>
    <h2>${item.place}</h2>
    <div class="modal-year">${item.year} &nbsp;·&nbsp; ${item.country}</div>
    <div class="modal-divider"></div>
    <p>${item.desc}</p>
    `;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow = "";
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function setActive(id) {
    document.querySelectorAll(".nav button").forEach(b => b.classList.remove("active"));
    if (id) document.getElementById(id).classList.add("active");
}

function filterPH() { setActive("btn-ph"); display(journey.filter(j => j.ph)); }
function filterAbroad() { setActive("btn-abroad"); display(journey.filter(j => !j.ph)); }
function showAll() { setActive("btn-all"); display(journey); }

function searchData() {
    const q = document.getElementById("search").value.toLowerCase();
    const filtered = journey.filter(j =>
        j.place.toLowerCase().includes(q) ||
        j.year.toLowerCase().includes(q) ||
        j.desc.toLowerCase().includes(q)
    );
    setActive("");
    display(filtered);
}

display(journey);