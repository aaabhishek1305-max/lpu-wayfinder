/* =========================================================
   SETTINGS
   Optional: paste a Google "Maps Embed API" key to use
   Google's official embedded directions. Leave "" to run
   without a key. If you add a key, restrict it to your
   website address in Google Cloud Console.
   ========================================================= */
const MAPS_API_KEY = "";

/* =========================================================
   PLACES
   Coordinates and place IDs come from Google Maps listings
   (checked November 2026). Confirm them on campus.
   To add a place, copy one line and change the values.
   ========================================================= */
const PLACES = [
    { id: "block-34", name: "Block 34", type: "Academic", icon: "💻", lat: 31.251294, lng: 75.704760, pid: "ChIJFX8kYWZfGjkRGmuw3OxZTos",
      info: "School of Computer Science & Engineering", keys: "34 cse computer" },
    { id: "block-36", name: "Block 36", type: "Academic", icon: "🏢", lat: 31.251577, lng: 75.704123, pid: "ChIJnQxL0qJfGjkRUBy-ZEyN1Qc",
      info: "School of Electronics and Electrical Engineering", keys: "36 ece eee electronics electrical seee" },
    { id: "block-18", name: "Block 18", type: "Academic", icon: "📖", lat: 31.255200, lng: 75.703739, pid: "ChIJiXvvWQBfGjkRIzM1AQnaqqM",
      info: "Humanities block, School of Education", keys: "18 humanities education bed teaching" },
    { id: "block-55", name: "Block 55", type: "Academic", icon: "⚙️", lat: 31.247039, lng: 75.703457, pid: "ChIJodiKdGVfGjkROug9lYdMqH4",
      info: "School of Mechanical Engineering", keys: "55 mechanical" },
    { id: "block-56", name: "Block 56", type: "Academic", icon: "🧬", lat: 31.246697, lng: 75.703502, pid: "ChIJ8zsJkBdfGjkRdy6bsbm5CSU",
      info: "School of Bioengineering and Biosciences", keys: "56 bio biotech biotechnology biosciences microbiology" },
    { id: "block-57", name: "Block 57", type: "Academic", icon: "🌾", lat: 31.246222, lng: 75.703632, pid: "ChIJCaQ5a2VfGjkR-X5ORxA_IAw",
      info: "School of Agriculture", keys: "57 agriculture farming" },
    { id: "business", name: "Mittal School of Business", type: "Academic", icon: "💼", lat: 31.254501, lng: 75.705541, pid: "ChIJIxzyDGdfGjkRNH276RGCcz4",
      info: "Business and management", keys: "business management mba bba" },
    { id: "architecture", name: "School of Architecture", type: "Academic", icon: "📐", lat: 31.256872, lng: 75.707250, pid: "ChIJaVSU-l1fGjkRSTd50ZxaMng",
      info: "Architecture, Planning and Design", keys: "architecture design planning barch" },
    { id: "law", name: "School of Law", type: "Academic", icon: "⚖️", lat: 31.254780, lng: 75.701313, pid: "ChIJZ1uwFmhfGjkRnLQmZnREU6U",
      info: "LPU School of Law", keys: "law" },
    { id: "block-30", name: "Block 30", type: "Services", icon: "📝", lat: 31.252714, lng: 75.704784, pid: "ChIJiycKVGZfGjkRBDKjHDVNBiU",
      info: "Division of Admissions", keys: "30 admission fees scholarship" },
    { id: "block-32", name: "Block 32", type: "Services", icon: "🖥️", lat: 31.252012, lng: 75.704588, pid: "ChIJcV7FodzfWKARW-XOLJvbu9I",
      info: "LPU Online and Alumni Association", keys: "32 online distance alumni" },
    { id: "library", name: "Central Library", type: "Study", icon: "📚", lat: 31.251993, lng: 75.703379, pid: "ChIJAVDMXQBfGjkRWp-hJO178y8",
      info: "Books, digital resources and study space", keys: "library books reading" },
    { id: "library-19", name: "Block 19–21 Library", type: "Study", icon: "📗", lat: 31.254534, lng: 75.701294, pid: "ChIJhTxSEuJfGjkRSP3dNfPHmU0",
      info: "Library in the management block", keys: "19 20 21 library management" },
    { id: "auditorium", name: "Main Auditorium", type: "Events", icon: "🎭", lat: 31.252054, lng: 75.704112, pid: "ChIJwbIPRGZfGjkR3gWmDbI7Vco",
      info: "Shanti Devi Mittal Auditorium, Block 35", keys: "35 shanti devi mittal auditorium" },
    { id: "welfare", name: "Student Welfare", type: "Services", icon: "🤝", lat: 31.255143, lng: 75.706071, pid: "ChIJXdymbmdfGjkRd1SDa6BS2H8",
      info: "Division of Student Welfare: clubs and activities", keys: "dsw welfare clubs nss ncc dance music" },
    { id: "international", name: "International Affairs", type: "Services", icon: "🌍", lat: 31.252045, lng: 75.704756, pid: "ChIJd54aXGZfGjkReJGGr1XgEHM",
      info: "Division of International Affairs", keys: "international foreign abroad dia" },
    { id: "icici", name: "ICICI Bank", type: "Services", icon: "🏦", lat: 31.255702, lng: 75.705260, pid: "ChIJo5Ydn2hfGjkRk8OT2o5iRAc",
      info: "Bank branch, Block 15-A", keys: "15 icici bank account" },
    { id: "unipolis", name: "UniPolis", type: "Events", icon: "🎤", lat: 31.255132, lng: 75.704616, pid: "ChIJPyzUhGdfGjkRYuoOd1iI6kc",
      info: "Baldev Raj Mittal UniPolis, open-air event venue", keys: "unipolis stage fest" },
    { id: "unimall", name: "Uni Mall", type: "Food & Shops", icon: "🛍️", lat: 31.255764, lng: 75.705483, pid: "ChIJy8fLfmdfGjkRBxzPwrDdCkw",
      info: "Shops, banks and eating places", keys: "mall shop bank atm sbi stationery wh smith" },
    { id: "foodcourt", name: "Main Food Court", type: "Food & Shops", icon: "🍔", lat: 31.249008, lng: 75.701681, pid: "ChIJWfsGW29fGjkR_h9ugIYraxU",
      info: "Campus food court", keys: "food canteen eat lunch" },
    { id: "sweets", name: "Lovely Sweets", type: "Food & Shops", icon: "🍬", lat: 31.255682, lng: 75.705425, pid: "ChIJX30R7kRfGjkR0DS4HDrRtIM",
      info: "Sweets, snacks and quick meals, Block 15", keys: "15 sweets snacks samosa coffee bakery food" },
    { id: "bh2", name: "Boys Hostel 2", type: "Hostels", icon: "🛏️", lat: 31.249815, lng: 75.700579, pid: "ChIJ_STbNG9fGjkRCz_nE-b6UbE",
      info: "BH-2 residence", keys: "bh-2 bh2 hostel boys" },
    { id: "hospital", name: "Uni Hospital", type: "Services", icon: "🏥", lat: 31.258068, lng: 75.706779, pid: "ChIJcYQEumBfGjkR0bJtfaigc9M",
      info: "Uni Health Center", keys: "hospital health doctor medical emergency" },
    { id: "postoffice", name: "Post Office", type: "Services", icon: "📮", lat: 31.251812, lng: 75.702084, pid: "ChIJ8amDn2hfGjkRtqdgqs8jFEQ",
      info: "Campus sub post office", keys: "post courier parcel" },
    { id: "sports", name: "Main Sports Field", type: "Sports", icon: "⚽", lat: 31.256826, lng: 75.709428, pid: "ChIJha8J6_9fGjkRGbvNbAu2MJI",
      info: "Playground and sports area", keys: "sports ground field football playground track" },
    { id: "cricket", name: "Cricket Ground", type: "Sports", icon: "🏏", lat: 31.247637, lng: 75.700455, pid: "ChIJdci7gjNfGjkRv_aEFyp3Krs",
      info: "LPU cricket ground", keys: "cricket" },
    { id: "sports-centre", name: "Sports Centre", type: "Sports", icon: "🏋️", lat: 31.250867, lng: 75.701805, pid: "ChIJyxrKpWhfGjkRsccIDLY8goI",
      info: "Gym, swimming pool and indoor stadium", keys: "sports complex gym swimming pool indoor stadium" },
    { id: "shooting", name: "Shooting Range", type: "Sports", icon: "🎯", lat: 31.250976, lng: 75.701618, pid: "ChIJuakMGzBfGjkRXJVWNdDEmpM",
      info: "LPU shooting range", keys: "shooting range rifle" },
    { id: "main-parking", name: "Main Gate Parking", type: "Gates", icon: "🅿️", lat: 31.259798, lng: 75.706087, pid: "ChIJaVPjFFxfGjkRI4h6dmebQEg",
      info: "Parking beside the main gate", keys: "main gate parking entrance" }
];

/* Gates: add lat and lng here once you have checked them,
   so every visitor gets them. Example:
   { id: "gate-1a", name: "Main Gate 1-A", lat: 31.0, lng: 75.0 } */
const GATES = [
    { id: "gate-1a", name: "Main Gate 1-A" },
    { id: "gate-1b", name: "Main Gate 1-B" },
    { id: "gate-e1", name: "Eastern Gate 1" },
    { id: "gate-e2", name: "Eastern Gate 2" },
    { id: "gate-west", name: "Western Gate" },
    { id: "gate-bh4", name: "BH-4 Playground Gate" }
];

const CAMPUS = "Lovely Professional University, Phagwara";
const CAMPUS_CENTER = { lat: 31.2540, lng: 75.7045 };
const ICONS = { "Academic": "🎓", "Study": "📚", "Services": "🛎️", "Food & Shops": "🍔", "Events": "🎭", "Sports": "⚽", "Hostels": "🛏️", "Gates": "🚪" };

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const byId = id => PLACES.find(p => p.id === id);

function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
}

function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { /* storage blocked: the site still works */ }
}

function el(tag, props = {}, ...children) {
    const node = Object.assign(document.createElement(tag), props);
    node.append(...children);
    return node;
}

function button(text, onClick, className = "") {
    return el("button", { type: "button", textContent: text, onclick: onClick, className });
}

let saved = load("lpu-saved", []);
let recent = load("lpu-recent", []);
let pins = load("lpu-pins", {});
let me = null;              // visitor's GPS position
let view = "place";
let category = "All";
let sortNear = false;

/* ---------- search ---------- */
function search(text) {
    const q = text.trim().toLowerCase()
        .replace(/[?.!]+$/, "")
        .replace(/^(where\s+is|where's|take\s+me\s+to|go\s+to|navigate\s+to|show\s+me|find)\s+(the\s+)?/, "")
        .replace(/\bbh[\s-]*(?=\d)/, "bh-")
        .replace(/^(block|blk)[\s-]*(number\s*|no\.?\s*)?(?=\d)/, "");
    if (!q) return [];

    // A number must match a whole block number, so "3" does not match everything
    if (/^\d+$/.test(q)) {
        return PLACES.filter(p => p.keys.split(" ").includes(q));
    }

    const score = p => {
        const name = p.name.toLowerCase();
        if (name === q) return 0;
        if (name.startsWith(q)) return 1;
        if (name.includes(q)) return 2;
        if (`${p.keys} ${p.info} ${p.type}`.toLowerCase().includes(q)) return 3;
        return 9;
    };
    return PLACES.filter(p => score(p) < 9).sort((a, b) => score(a) - score(b));
}

/* ---------- location & distance ---------- */
function metres(a, b) {
    const rad = d => d * Math.PI / 180;
    const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 +
        Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
    return 12742000 * Math.asin(Math.sqrt(h));
}

const pretty = m => m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`;

function locate(onSuccess, onFail) {
    if (!navigator.geolocation) {
        onFail("GPS is not supported by your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        pos => {
            me = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
            onSuccess(me);
        },
        err => onFail(err.code === 1
            ? "Location permission is blocked. Allow it in your browser settings, or choose another starting point."
            : "Could not get your location. Try again outdoors."),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
    );
}

/* Returns {name, lat, lng, pid} for a starting point or destination */
function point(id) {
    if (id === "me") return me ? { name: "My location", ...me } : { name: "My location" };
    const gate = GATES.find(g => g.id === id);
    if (gate) return { ...gate, ...pins[id] };
    return byId(id);
}

const coords = p => `${p.lat},${p.lng}`;
const hasCoords = p => p && Number.isFinite(p.lat) && Number.isFinite(p.lng);

/* ---------- Google Maps links (official Maps URLs) ---------- */
function directionsUrl(from, to) {
    const url = new URL("https://www.google.com/maps/dir/");
    url.searchParams.set("api", "1");
    // With no origin, Google Maps starts from the device's own location
    if (from && from !== "me") {
        const start = point(from);
        url.searchParams.set("origin", coords(start));
        if (start.pid) url.searchParams.set("origin_place_id", start.pid);
    }
    url.searchParams.set("destination", coords(to));
    if (to.pid) {
        url.searchParams.set("destination", `${to.name}, ${CAMPUS}`);
        url.searchParams.set("destination_place_id", to.pid);
    }
    url.searchParams.set("travelmode", "walking");
    return url.toString();
}

function embedUrl(from, to) {
    const start = point(from);

    if (view === "route" && hasCoords(start)) {
        if (MAPS_API_KEY) {
            return "https://www.google.com/maps/embed/v1/directions?" + new URLSearchParams({
                key: MAPS_API_KEY, origin: coords(start), destination: coords(to), mode: "walking"
            });
        }
        return "https://maps.google.com/maps?" + new URLSearchParams({
            saddr: coords(start), daddr: coords(to), dirflg: "w", output: "embed"
        });
    }

    return "https://maps.google.com/maps?" + new URLSearchParams({
        q: coords(to), z: "18", t: view === "satellite" ? "k" : "m", output: "embed"
    });
}

function setMap(src) {
    // Reload only when the address changes
    if ($("map").getAttribute("src") !== src) $("map").setAttribute("src", src);
}

/* ---------- screen switching (#home, #navigate/block-34, #explore) ---------- */
function route() {
    const [tab, placeId] = location.hash.slice(1).split("/");
    const screen = ["home", "navigate", "explore"].includes(tab) ? tab : "home";

    document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === screen));
    document.querySelectorAll("nav a").forEach(a => {
        const on = a.dataset.tab === screen;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
    });

    if (screen === "navigate") {
        if (byId(placeId) || GATES.some(g => g.id === placeId)) $("to").value = placeId;
        updateNavigate();
    }
    if (screen === "home") {
        renderHome();
        showBlock(shown);
    }
    if (screen === "explore") renderCards();
    if (screen !== "navigate") stopGuide();
    window.scrollTo(0, 0);
}

function goTo(id) {
    if (byId(id)) {
        recent = [id, ...recent.filter(r => r !== id)].slice(0, 4);
        save("lpu-recent", recent);
    }
    $("homeSearch").value = "";
    $("suggestions").hidden = true;

    const hash = `#navigate/${id}`;
    if (location.hash === hash) route();
    else location.hash = hash;
}

/* ---------- Navigate screen ---------- */
function fillSelects() {
    const from = $("from");
    const to = $("to");
    const keepFrom = from.value || "me";
    const keepTo = to.value || "block-34";

    const group = (label, list) => el("optgroup", { label },
        ...list.map(p => new Option(p.name, p.id)));
    const gates = () => group("Campus gates", GATES.map(g => ({
        id: g.id, name: hasCoords(point(g.id)) ? g.name : `${g.name} (set location)`
    })));
    const places = () => Object.keys(ICONS).map(type => group(
        type === "Gates" ? "Parking" : type, PLACES.filter(p => p.type === type)));

    from.replaceChildren(new Option("📍 My current location", "me"), gates(), ...places());
    to.replaceChildren(...places(), gates());

    from.value = keepFrom;
    to.value = keepTo;
}

function updateNavigate() {
    const fromId = $("from").value;
    const toId = $("to").value;
    const start = point(fromId);
    const end = point(toId);

    const missing = [start, end].find(p => p && p.name !== "My location" && !hasCoords(p));
    $("pinBox").hidden = !missing;
    if (missing) {
        $("pinName").textContent = GATES.find(g => g.id === missing.id).name;
        $("pinBox").dataset.gate = missing.id;
    }

    const endOk = hasCoords(end);
    const startOk = fromId === "me" || hasCoords(start);
    const ready = endOk && startOk && fromId !== toId;

    $("startBtn").classList.toggle("off", !ready);
    if (ready) $("startBtn").href = directionsUrl(fromId, end);
    else $("startBtn").removeAttribute("href");

    $("streetBtn").classList.toggle("off", !endOk);
    if (!endOk) $("streetBtn").removeAttribute("href");
    else {
        $("streetBtn").href = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${coords(end)}`;
    }

    $("saveBtn").textContent = saved.includes(toId) ? "★ Saved" : "☆ Save";
    $("saveBtn").disabled = !byId(toId);
    $("guideBtn").disabled = !endOk;
    // A running guide follows the newly chosen destination
    if (!$("guide").hidden && guideTarget.id !== toId) {
        if (endOk) startGuide();
        else stopGuide();
    }

    $("mapTitle").textContent = end.name;
    $("mapSub").textContent = end.info || "";

    $("estimate").replaceChildren();
    if (ready && hasCoords(start)) {
        const straight = metres(start, end);
        if (straight < 5000) {
            const walk = straight * 1.3;   // paths are longer than a straight line
            $("estimate").append(
                el("div", {}, el("strong", { textContent: "≈ " + pretty(walk) }), el("span", { textContent: "walking distance" })),
                el("div", {}, el("strong", { textContent: `≈ ${Math.max(1, Math.round(walk / 80))} min` }), el("span", { textContent: "on foot" }))
            );
        } else {
            $("estimate").append(el("div", {}, el("strong", { textContent: pretty(straight) }),
                el("span", { textContent: "away in a straight line: you are off campus" })));
        }
    }

    if (fromId === toId) $("message").textContent = "Start and destination are the same.";
    else if (missing) $("message").textContent = "Set the gate location to get a route.";
    else if (view === "route" && !hasCoords(start)) $("message").textContent = "Press “Locate me” to preview the route from where you are.";
    else $("message").textContent = `${start.name} → ${end.name}. Press Start for turn-by-turn directions.`;

    if (endOk) setMap(embedUrl(fromId, end));
    else setMap(`https://maps.google.com/maps?q=${coords(CAMPUS_CENTER)}&z=16&output=embed`);
}

function setView(next) {
    view = next;
    document.querySelectorAll("[data-view]").forEach(b => b.classList.toggle("on", b.dataset.view === view));
    updateNavigate();
}

function useMyLocation() {
    $("message").textContent = "Finding your GPS location...";
    locate(pos => {
        $("from").value = "me";
        setView("route");
        $("message").textContent += ` GPS accuracy: about ${Math.round(pos.accuracy)} m.`;
    }, text => { $("message").textContent = text; });
}

function pinGate(lat, lng) {
    pins[$("pinBox").dataset.gate] = { lat, lng };
    save("lpu-pins", pins);
    fillSelects();
    updateNavigate();
    toast("📍 Gate location saved on this device");
}

function toggleSaved(id) {
    const adding = !saved.includes(id);
    saved = adding ? [...saved, id] : saved.filter(s => s !== id);
    save("lpu-saved", saved);
    toast(adding ? `★ ${byId(id).name} saved` : `${byId(id).name} removed from saved`);
}

/* ---------- Home screen ---------- */
function renderHome() {
    const chips = ids => ids.map(byId).filter(Boolean).map(p => button(`${p.icon} ${p.name}`, () => goTo(p.id)));

    $("recent").replaceChildren(...chips(recent.length ? recent : ["block-34", "library", "unimall", "hospital"]));
    $("savedList").replaceChildren(...chips(saved));
    $("savedWrap").hidden = !saved.some(byId);
}

function renderTiles() {
    $("categoryTiles").replaceChildren(...Object.keys(ICONS).map(type => {
        const count = PLACES.filter(p => p.type === type).length;
        const tile = el("button", {
            type: "button",
            onclick: () => { category = type; $("filter").value = ""; renderFilterChips(); location.hash = "#explore"; }
        }, el("b", { textContent: ICONS[type] }), type,
           el("small", { textContent: `${count} ${count === 1 ? "place" : "places"}` }));
        tile.dataset.type = type;
        return tile;
    }));
}

let selected = -1;

function showSuggestions() {
    const text = $("homeSearch").value;
    const list = $("suggestions");
    selected = -1;
    list.hidden = !text.trim();
    if (list.hidden) return;

    const items = search(text).slice(0, 6).map(p => el("li", { onclick: () => goTo(p.id) },
        el("span", { textContent: `${p.icon} ${p.name}` }), el("small", { textContent: p.info })));

    if (!items.length) {
        items.push(el("li", { onclick: () => searchGoogle(text) },
            el("span", { textContent: `🔎 Search Google Maps for “${text.trim()}”` }),
            el("small", { textContent: "not in our list" })));
    }
    list.replaceChildren(...items);
}

function searchGoogle(text) {
    const clean = text.trim();
    const query = /^\d+$/.test(clean) ? `Block ${clean}` : clean;
    $("suggestions").hidden = true;
    const url = "https://www.google.com/maps/search/?" +
        new URLSearchParams({ api: "1", query: `${query}, ${CAMPUS}` });
    window.open(url, "_blank", "noopener,noreferrer");
}

function submitSearch() {
    const text = $("homeSearch").value.trim();
    if (!text) { $("homeSearch").focus(); return; }
    const [best] = search(text);
    if (best) goTo(best.id);
    else searchGoogle(text);
}

/* ---------- Explore screen ---------- */
function renderFilterChips() {
    $("filterChips").replaceChildren(...["All", "★ Saved", ...Object.keys(ICONS)].map(type => {
        const chip = button(type, () => { category = type; renderFilterChips(); renderCards(); }, type === category ? "on" : "");
        if (ICONS[type]) chip.dataset.type = type;
        return chip;
    }));
}

function renderCards() {
    const text = $("filter").value;
    let list = text.trim() ? search(text) : [...PLACES];

    if (category === "★ Saved") list = list.filter(p => saved.includes(p.id));
    else if (category !== "All") list = list.filter(p => p.type === category);
    if (sortNear && me) list.sort((a, b) => metres(me, a) - metres(me, b));

    $("cards").replaceChildren(...list.map(p => {
        const isSaved = saved.includes(p.id);
        const star = button(isSaved ? "★" : "☆", () => { toggleSaved(p.id); renderCards(); }, "star");
        star.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${p.name}`);

        const card = el("article", { className: "card" },
            el("div", { className: "card-top" }, el("b", { textContent: p.icon }), star),
            el("h3", { textContent: p.name }),
            el("p", { textContent: p.info }),
            el("span", { className: "distance", textContent: me ? `${pretty(metres(me, p))} from you (straight line)` : "" }),
            el("div", { className: "row" },
                button("Show on map", () => { view = "place"; setViewButtons(); goTo(p.id); }, "btn secondary"),
                el("a", {
                    className: "btn secondary", textContent: "Directions ↗",
                    href: directionsUrl("me", p), target: "_blank", rel: "noopener noreferrer"
                })));
        card.dataset.type = p.type;
        return card;
    }));

    $("exploreNote").textContent = list.length
        ? `${list.length} ${list.length === 1 ? "place" : "places"}`
        : "Nothing found. Try another word or filter.";

    $("cards").hidden = layout !== "list";
    $("pinMapWrap").hidden = layout !== "map";
    if (layout === "map") renderPinMap(list);
}

function setViewButtons() {
    document.querySelectorAll("[data-view]").forEach(b => b.classList.toggle("on", b.dataset.view === view));
}

/* ---------- pop-up messages ---------- */
let toastTimer;

function toast(text) {
    $("toast").textContent = text;
    $("toast").classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("toast").classList.remove("show"), 3500);
}

/* ---------- "I need..." shortcuts ---------- */
const NEEDS = [
    { icon: "🏥", label: "A doctor", ids: ["hospital"] },
    { icon: "🍔", label: "Food", ids: ["foodcourt", "unimall", "sweets"] },
    { icon: "📚", label: "To study", ids: ["library", "library-19"] },
    { icon: "📝", label: "Admission help", ids: ["block-30"] },
    { icon: "🏧", label: "Bank or shop", ids: ["icici", "unimall"] },
    { icon: "📮", label: "To send a parcel", ids: ["postoffice"] },
    { icon: "⚽", label: "To play", ids: ["sports-centre", "sports", "cricket"] }
];

function meetNeed(need) {
    const open = (id, note) => { goTo(id); toast(note); };
    const [first] = need.ids;

    if (need.ids.length === 1) {
        open(first, `${need.icon} Showing ${byId(first).name}`);
        return;
    }

    toast("📡 Finding the nearest one...");
    const from = location.hash;
    locate(pos => {
        if (location.hash !== from) return;      // visitor has moved on
        const [best] = need.ids.map(byId).sort((a, b) => metres(pos, a) - metres(pos, b));
        open(best.id, `${need.icon} Nearest: ${best.name}, ${pretty(metres(pos, best))} away`);
    }, () => {
        if (location.hash !== from) return;
        open(first, `Showing ${byId(first).name}. Allow location to get the nearest one.`);
    });
}

function renderNeeds() {
    $("needs").replaceChildren(...NEEDS.map(need => {
        const item = el("button", { type: "button", onclick: () => meetNeed(need) },
            el("b", { textContent: need.icon }), need.label);
        item.dataset.type = byId(need.ids[0]).type;
        return item;
    }));
}

/* ---------- tappable pin map ---------- */
let layout = "list";
let zoom = 1;
let pinned = null;

function renderPinMap(list) {
    const board = $("pinMap");
    const pad = 30;
    const shrink = Math.cos(CAMPUS_CENTER.lat * Math.PI / 180);
    const lats = PLACES.map(p => p.lat);
    const lngs = PLACES.map(p => p.lng);
    const north = Math.max(...lats), south = Math.min(...lats);
    const west = Math.min(...lngs), east = Math.max(...lngs);

    // At normal zoom the whole campus fits on the screen
    const room = $("pinScroll").clientWidth;
    const tallest = Math.min(640, Math.max(420, window.innerHeight * 0.65));
    const scale = zoom * Math.min((tallest - 2 * pad) / (north - south),
        (room - 2 * pad) / ((east - west) * shrink));
    const height = (north - south) * scale + 2 * pad;
    const mapWidth = (east - west) * shrink * scale;
    const width = Math.max(room, mapWidth + 2 * pad);
    const left = (width - mapWidth) / 2;
    const place = p => ({ x: left + (p.lng - west) * shrink * scale, y: pad + (north - p.lat) * scale });

    const space = room < 500 ? 36 : 44;

    // Nudge overlapping pins apart so each one can be tapped
    const dots = list.map(p => ({ p, ...place(p) }));
    for (let pass = 0; pass < 200; pass++) {
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const a = dots[i], b = dots[j];
                const dx = b.x - a.x, dy = b.y - a.y;
                const gap = Math.hypot(dx, dy) || 0.1;
                if (gap >= space) continue;
                const push = (space - gap) / 2 / gap;
                a.x -= dx * push; a.y -= dy * push;
                b.x += dx * push; b.y += dy * push;
            }
        }
        dots.forEach(d => {
            d.x = Math.min(width - 22, Math.max(22, d.x));
            d.y = Math.min(height - 22, Math.max(22, d.y));
        });
    }

    board.style.width = `${width}px`;
    board.style.height = `${height}px`;
    board.replaceChildren(...dots.map(({ p, x, y }) => {
        const number = p.name.match(/^Block (\d+)$/);
        const pin = button(number ? number[1] : p.icon, () => {
            pinned = p.id;
            renderCards();
            $("pinInfo").scrollIntoView({ block: "nearest", behavior: "smooth" });
        },
            p.id === pinned ? "pin on" : "pin");
        pin.style.left = `${x}px`;
        pin.style.top = `${y}px`;
        pin.title = p.name;
        pin.dataset.type = p.type;
        pin.setAttribute("aria-label", p.name);
        return pin;
    }));

    if (me && me.lat <= north && me.lat >= south && me.lng >= west && me.lng <= east) {
        const { x, y } = place(me);
        const dot = el("span", { className: "you", title: "You are here" });
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        board.append(dot);
    }

    const chosen = list.find(p => p.id === pinned);
    $("pinInfo").hidden = !chosen;
    if (!chosen) return;
    $("pinInfo").dataset.type = chosen.type;

    $("pinInfo").replaceChildren(
        el("h3", { textContent: `${chosen.icon} ${chosen.name}` }),
        el("p", { textContent: chosen.info }),
        el("span", { className: "distance", textContent: me ? `${pretty(metres(me, chosen))} from you (straight line)` : "" }),
        el("div", { className: "row" },
            button("Show on map", () => { view = "place"; setViewButtons(); goTo(chosen.id); }, "btn secondary"),
            button(saved.includes(chosen.id) ? "★ Saved" : "☆ Save",
                () => { toggleSaved(chosen.id); renderCards(); }, "btn secondary"),
            el("a", {
                className: "btn secondary", textContent: "Directions ↗",
                href: directionsUrl("me", chosen), target: "_blank", rel: "noopener noreferrer"
            })));
}

/* ---------- live walking guide ---------- */
let watchId = null;
let guideTarget = null;
let startDistance = 0;
let spokenStep = null;
let voiceOn = false;
let wakeLock = null;

const DIRECTIONS = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];

// Compass bearing from a to b, in degrees clockwise from north
function bearing(a, b) {
    const rad = d => d * Math.PI / 180;
    const dLng = rad(b.lng - a.lng);
    const y = Math.sin(dLng) * Math.cos(rad(b.lat));
    const x = Math.cos(rad(a.lat)) * Math.sin(rad(b.lat)) -
        Math.sin(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.cos(dLng);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function speak(text) {
    if (!voiceOn || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function stopWatching() {
    if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    watchId = null;
    wakeLock?.release().catch(() => {});
    wakeLock = null;
}

function stopGuide() {
    stopWatching();
    window.speechSynthesis?.cancel();
    $("guide").hidden = true;
    document.body.classList.remove("guiding");
}

function startGuide() {
    const id = $("to").value;
    const target = point(id);
    if (!hasCoords(target)) return;
    if (!navigator.geolocation) { toast("GPS is not supported by your browser."); return; }

    stopWatching();
    guideTarget = { ...target, id };
    startDistance = 0;
    spokenStep = null;

    $("guide").hidden = false;
    document.body.classList.add("guiding");
    $("guideTitle").textContent = `To ${target.name}`;
    $("guideStop").textContent = "Stop guide";
    $("guideDist").textContent = "Waiting for GPS...";
    $("guideDir").textContent = "";
    $("guideBar").value = 0;
    $("arrow").style.transform = "";

    // Keep the screen awake where the browser allows it
    navigator.wakeLock?.request("screen").then(lock => {
        if (watchId === null) lock.release();
        else wakeLock = lock;
    }).catch(() => {});

    watchId = navigator.geolocation.watchPosition(updateGuide, err => {
        if (err.code === 1) {
            stopWatching();
            $("guideDist").textContent = "Location blocked";
            $("guideDir").textContent = "Allow location in your browser settings, then start again.";
        } else {
            $("guideDir").textContent = "GPS signal is weak. Still trying...";
        }
    }, { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 });
}

function updateGuide(pos) {
    const { latitude: lat, longitude: lng, accuracy, heading, speed } = pos.coords;
    me = { lat, lng, accuracy };

    const left = metres(me, guideTarget);
    startDistance = Math.max(startDistance, left);

    if (left <= 30 && accuracy <= 50) {
        stopWatching();
        $("guideDist").textContent = "🎉 You've arrived!";
        $("guideDir").textContent = `${guideTarget.name} is within about ${Math.round(Math.max(left, accuracy))} m. Look for the entrance.`;
        $("guideBar").value = 100;
        $("guideStop").textContent = "Done";
        navigator.vibrate?.([200, 100, 200]);
        speak(`You have arrived near ${guideTarget.name}`);
        return;
    }

    const toward = bearing(me, guideTarget);
    const compass = DIRECTIONS[Math.round(toward / 45) % 8];
    // While walking, some phones report heading: point the arrow relative to it
    const moving = Number.isFinite(heading) && speed > 0.5;

    $("arrow").style.transform = `rotate(${moving ? toward - heading : toward}deg)`;
    document.querySelector(".north").hidden = moving;
    $("guideDist").textContent = `${pretty(left)} to go`;
    $("guideDir").textContent = (moving ? "Arrow is relative to the way you are walking" : `Head ${compass}`) +
        ` · GPS ±${Math.round(accuracy)} m`;
    $("guideBar").value = startDistance ? 100 * (1 - left / startDistance) : 0;

    const step = Math.ceil(left / 100);
    if (step !== spokenStep && (spokenStep === null || step < spokenStep)) {
        spokenStep = step;
        speak(`${Math.round(left)} metres to ${guideTarget.name}. It is to the ${compass}.`);
    }
}

/* ---------- voice search ---------- */
function setupVoice() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;               // button stays hidden

    const mic = $("micBtn");
    let listening = null;
    mic.hidden = false;

    mic.addEventListener("click", () => {
        if (listening) { listening.stop(); return; }

        const rec = new Recognition();
        rec.lang = "en-IN";
        rec.onresult = e => {
            const text = e.results[0][0].transcript;
            $("homeSearch").value = text;
            const matches = search(text);
            if (matches.length === 1) goTo(matches[0].id);
            else { showSuggestions(); $("homeSearch").focus(); }
        };
        rec.onerror = e => toast(e.error === "not-allowed"
            ? "Microphone is blocked. Allow it to search by voice."
            : "Didn't catch that. Please try again.");
        rec.onend = () => { listening = null; mic.classList.remove("listening"); };

        try {
            rec.start();
            listening = rec;
            mic.classList.add("listening");
            toast("🎤 Listening... say a place, like “Block 34”");
        } catch {
            toast("Voice search could not start.");
        }
    });
}

/* ---------- events ---------- */
$("guideBtn").addEventListener("click", startGuide);
$("guideStop").addEventListener("click", stopGuide);
$("guideSound").addEventListener("click", () => {
    voiceOn = !voiceOn;
    $("guideSound").textContent = voiceOn ? "🔊" : "🔇";
    if (voiceOn) speak(`Voice on. ${$("guideDist").textContent.replace("🎉", "")}`);
    else window.speechSynthesis?.cancel();
});
$("helpBtn").addEventListener("click", () => $("help").showModal());

document.querySelectorAll("[data-layout]").forEach(b => b.addEventListener("click", () => {
    layout = b.dataset.layout;
    document.querySelectorAll("[data-layout]").forEach(x => x.classList.toggle("on", x === b));
    renderCards();
}));
function setZoom(next) {
    const box = $("pinScroll");
    const midX = (box.scrollLeft + box.clientWidth / 2) / box.scrollWidth;
    const midY = (box.scrollTop + box.clientHeight / 2) / box.scrollHeight;
    zoom = Math.min(3, Math.max(1, next));
    renderCards();
    // Keep the same spot in the middle after zooming
    box.scrollLeft = midX * box.scrollWidth - box.clientWidth / 2;
    box.scrollTop = midY * box.scrollHeight - box.clientHeight / 2;
}
$("zoomIn").addEventListener("click", () => setZoom(zoom + 0.5));
$("zoomOut").addEventListener("click", () => setZoom(zoom - 0.5));
window.addEventListener("resize", () => { if (layout === "map" && location.hash === "#explore") renderCards(); });

$("homeSearch").addEventListener("input", showSuggestions);
$("homeSearch").addEventListener("keydown", e => {
    const items = [...$("suggestions").children];
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && items.length) {
        e.preventDefault();
        const step = e.key === "ArrowDown" ? 1 : -1;
        selected = selected < 0 && step < 0 ? items.length - 1 : (selected + step + items.length) % items.length;
        items.forEach((li, i) => li.classList.toggle("sel", i === selected));
    } else if (e.key === "Enter") {
        e.preventDefault();
        if (items[selected] && !$("suggestions").hidden) items[selected].click();
        else submitSearch();
    } else if (e.key === "Escape") {
        $("suggestions").hidden = true;
    }
});
$("homeGo").addEventListener("click", submitSearch);
document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) $("suggestions").hidden = true;
});

$("from").addEventListener("change", updateNavigate);
$("to").addEventListener("change", () => goTo($("to").value));
$("swapBtn").addEventListener("click", () => {
    const from = $("from").value;
    if (from === "me") {
        $("message").textContent = "Choose a place or gate in “From” before swapping.";
        return;
    }
    const to = $("to").value;
    $("from").value = to;
    $("to").value = from;
    history.replaceState(null, "", `#navigate/${from}`);
    updateNavigate();
});

document.querySelectorAll("[data-view]").forEach(b =>
    b.addEventListener("click", () => {
        if (b.dataset.view === "route" && $("from").value === "me" && !me) {
            setView("route");
            useMyLocation();
        } else {
            setView(b.dataset.view);
        }
    }));

$("locateBtn").addEventListener("click", useMyLocation);
$("saveBtn").addEventListener("click", () => { toggleSaved($("to").value); updateNavigate(); });

$("shareBtn").addEventListener("click", async () => {
    const link = `${location.href.split("#")[0]}#navigate/${$("to").value}`;
    try {
        if (navigator.share) await navigator.share({ title: "LPU Wayfinder", url: link });
        else {
            await navigator.clipboard.writeText(link);
            toast("🔗 Link copied");
        }
    } catch (err) {
        if (err.name !== "AbortError") $("message").textContent = "Copy this link: " + link;
    }
});

$("pinGps").addEventListener("click", () => {
    $("message").textContent = "Reading GPS...";
    locate(pos => {
        if (metres(pos, CAMPUS_CENTER) > 3000) {
            $("message").textContent = "You seem to be away from campus, so the gate was not saved.";
        } else {
            pinGate(pos.lat, pos.lng);
        }
    }, text => { $("message").textContent = text; });
});

$("pinSave").addEventListener("click", () => {
    const parts = $("pinCoords").value.split(",").map(s => s.trim());
    const [lat, lng] = parts.map(Number);
    const valid = parts.length === 2 && parts.every(Boolean) &&
        Number.isFinite(lat) && Number.isFinite(lng) && metres({ lat, lng }, CAMPUS_CENTER) <= 3000;

    if (!valid) {
        $("message").textContent = "Enter campus coordinates as: latitude, longitude";
        return;
    }
    $("pinCoords").value = "";
    pinGate(lat, lng);
});

$("filter").addEventListener("input", renderCards);
$("nearBtn").addEventListener("click", () => {
    $("exploreNote").textContent = "Finding your location...";
    locate(() => { sortNear = true; renderCards(); },
        text => { $("exploreNote").textContent = text; });
});

/* ---------- colour themes ---------- */
const THEMES = { teal: "#0b4f4a", indigo: "#28277c", plum: "#591d4d", night: "#0e191f" };

function applyTheme(name) {
    document.documentElement.dataset.theme = name;
    document.querySelector('meta[name="theme-color"]').content = THEMES[name];
    document.querySelectorAll("[data-colour]").forEach(b =>
        b.setAttribute("aria-pressed", String(b.dataset.colour === name)));
}

function closeThemeMenu() {
    $("themeMenu").hidden = true;
    $("themeBtn").setAttribute("aria-expanded", "false");
}

$("themeBtn").addEventListener("click", () => {
    $("themeMenu").hidden = !$("themeMenu").hidden;
    $("themeBtn").setAttribute("aria-expanded", String(!$("themeMenu").hidden));
});

document.querySelectorAll("[data-colour]").forEach(b => b.addEventListener("click", () => {
    const name = b.dataset.colour;
    save("lpu-theme", name);
    // Cross-fade between colours where the browser supports it
    if (document.startViewTransition) document.startViewTransition(() => applyTheme(name));
    else applyTheme(name);
    closeThemeMenu();
}));

document.addEventListener("click", e => {
    if (!e.target.closest(".header-actions")) closeThemeMenu();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeThemeMenu();
});

/* A soft light on the background follows the mouse or finger */
let glowFrame = 0;
function moveGlow(e) {
    if (glowFrame) return;
    glowFrame = requestAnimationFrame(() => {
        glowFrame = 0;
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    });
}
window.addEventListener("pointermove", moveGlow, { passive: true });
window.addEventListener("pointerdown", moveGlow, { passive: true });

/* ---------- block signboard ---------- */
const blockNumber = p => p.name.match(/^Block (\d+)$/)?.[1];
const BLOCKS = PLACES.filter(blockNumber).sort((a, b) => blockNumber(a) - blockNumber(b));
let shown = "block-34";
let autoPlay = null;

function showBlock(id) {
    shown = id;
    const place = byId(id);
    const number = blockNumber(place);
    const isSaved = saved.includes(id);

    // A new element restarts the flip animation
    $("rotator").replaceWith(el("span", { id: "rotator", textContent: number }));

    $("board").replaceChildren(
        el("div", { className: "board-number", textContent: number }),
        el("h3", { textContent: place.name }),
        el("p", { textContent: place.info }),
        el("span", { className: "distance", textContent: me ? `${pretty(metres(me, place))} from you (straight line)` : "" }),
        el("div", { className: "row" },
            button("Take me there", () => goTo(id), "btn signal"),
            button(isSaved ? "★ Saved" : "☆ Save", () => {
                stopAutoPlay();
                toggleSaved(id);
                showBlock(id);
                renderHome();
            }, "btn secondary")));

    [...$("plates").children].forEach(plate =>
        plate.setAttribute("aria-pressed", String(plate.dataset.id === id)));
}

function stopAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = null;
}

function renderPlates() {
    $("plates").replaceChildren(...BLOCKS.map(p => {
        const plate = button(blockNumber(p), () => { stopAutoPlay(); showBlock(p.id); }, "plate");
        plate.dataset.id = p.id;
        plate.setAttribute("aria-label", `${p.name}, ${p.info}`);
        // On small screens the board is above, so bring it into view
        plate.addEventListener("click", () => $("board").scrollIntoView({ block: "nearest", behavior: "smooth" }));
        return plate;
    }));
    showBlock(shown);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoPlay = setInterval(() => {
        if (!$("home").classList.contains("active")) return;
        const next = (BLOCKS.findIndex(p => p.id === shown) + 1) % BLOCKS.length;
        showBlock(BLOCKS[next].id);
    }, 3500);
}

// The sign stops changing as soon as someone starts using the page
["pointerenter", "pointerdown", "focusin"].forEach(type => $("board").addEventListener(type, stopAutoPlay));
$("homeSearch").addEventListener("focus", stopAutoPlay);

/* ---------- start ---------- */
let theme = load("lpu-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "teal");
if (!Object.hasOwn(THEMES, theme)) theme = theme === "dark" ? "night" : "teal";
applyTheme(theme);
renderPlates();
fillSelects();
renderNeeds();
setupVoice();
renderTiles();
renderFilterChips();
window.addEventListener("hashchange", route);
route();
