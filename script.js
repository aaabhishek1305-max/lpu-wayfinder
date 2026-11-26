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
      info: "Academic block", keys: "36" },
    { id: "block-18", name: "Block 18", type: "Academic", icon: "📖", lat: 31.255200, lng: 75.703739, pid: "ChIJiXvvWQBfGjkRIzM1AQnaqqM",
      info: "Humanities block, School of Education", keys: "18 humanities education" },
    { id: "law", name: "School of Law", type: "Academic", icon: "⚖️", lat: 31.254780, lng: 75.701313, pid: "ChIJZ1uwFmhfGjkRnLQmZnREU6U",
      info: "LPU School of Law", keys: "law" },
    { id: "block-30", name: "Block 30", type: "Services", icon: "📝", lat: 31.252714, lng: 75.704784, pid: "ChIJiycKVGZfGjkRBDKjHDVNBiU",
      info: "Division of Admissions", keys: "30 admission fees scholarship" },
    { id: "block-32", name: "Block 32", type: "Services", icon: "🖥️", lat: 31.252012, lng: 75.704588, pid: "ChIJcV7FodzfWKARW-XOLJvbu9I",
      info: "LPU Online", keys: "32 online" },
    { id: "library", name: "Central Library", type: "Study", icon: "📚", lat: 31.251993, lng: 75.703379, pid: "ChIJAVDMXQBfGjkRWp-hJO178y8",
      info: "Books, digital resources and study space", keys: "library books reading" },
    { id: "auditorium", name: "Main Auditorium", type: "Events", icon: "🎭", lat: 31.252054, lng: 75.704112, pid: "ChIJwbIPRGZfGjkR3gWmDbI7Vco",
      info: "Shanti Devi Mittal Auditorium, Block 35", keys: "35 shanti devi mittal auditorium" },
    { id: "unipolis", name: "UniPolis", type: "Events", icon: "🎤", lat: 31.255132, lng: 75.704616, pid: "ChIJPyzUhGdfGjkRYuoOd1iI6kc",
      info: "Baldev Raj Mittal UniPolis, open-air event venue", keys: "unipolis stage fest" },
    { id: "unimall", name: "Uni Mall", type: "Food & Shops", icon: "🛍️", lat: 31.255764, lng: 75.705483, pid: "ChIJy8fLfmdfGjkRBxzPwrDdCkw",
      info: "Shops, banks and eating places", keys: "mall shop bank atm stationery" },
    { id: "foodcourt", name: "Main Food Court", type: "Food & Shops", icon: "🍔", lat: 31.249008, lng: 75.701681, pid: "ChIJWfsGW29fGjkR_h9ugIYraxU",
      info: "Campus food court", keys: "food canteen eat lunch" },
    { id: "hospital", name: "Uni Hospital", type: "Services", icon: "🏥", lat: 31.258068, lng: 75.706779, pid: "ChIJcYQEumBfGjkR0bJtfaigc9M",
      info: "Uni Health Center", keys: "hospital health doctor medical emergency" },
    { id: "postoffice", name: "Post Office", type: "Services", icon: "📮", lat: 31.251812, lng: 75.702084, pid: "ChIJ8amDn2hfGjkRtqdgqs8jFEQ",
      info: "Campus sub post office", keys: "post courier parcel" },
    { id: "sports", name: "Main Sports Field", type: "Sports", icon: "⚽", lat: 31.256826, lng: 75.709428, pid: "ChIJha8J6_9fGjkRGbvNbAu2MJI",
      info: "Playground and sports area", keys: "sports complex ground football playground" },
    { id: "cricket", name: "Cricket Ground", type: "Sports", icon: "🏏", lat: 31.247637, lng: 75.700455, pid: "ChIJdci7gjNfGjkRv_aEFyp3Krs",
      info: "LPU cricket ground", keys: "cricket" },
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
const ICONS = { "Academic": "🎓", "Study": "📚", "Services": "🛎️", "Food & Shops": "🍔", "Events": "🎭", "Sports": "⚽", "Gates": "🚪" };

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
    const q = text.trim().toLowerCase().replace(/^(block|blk)[\s-]*(?=\d)/, "");
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
    if (screen === "home") renderHome();
    if (screen === "explore") renderCards();
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
    const gates = () => GATES.map(g => ({
        id: g.id, name: hasCoords(point(g.id)) ? g.name : `${g.name} (set location)`
    }));

    from.replaceChildren(new Option("📍 My current location", "me"),
        group("Gates", gates()), group("Campus places", PLACES));
    to.replaceChildren(group("Campus places", PLACES), group("Gates", gates()));

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
    document.querySelectorAll(".toggle button").forEach(b => b.classList.toggle("on", b.dataset.view === view));
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
    $("message").textContent = "Gate location saved on this device.";
}

function toggleSaved(id) {
    saved = saved.includes(id) ? saved.filter(s => s !== id) : [...saved, id];
    save("lpu-saved", saved);
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
        return el("button", {
            type: "button",
            onclick: () => { category = type; $("filter").value = ""; renderFilterChips(); location.hash = "#explore"; }
        }, el("b", { textContent: ICONS[type] }), type,
           el("small", { textContent: `${count} ${count === 1 ? "place" : "places"}` }));
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
    $("filterChips").replaceChildren(...["All", "★ Saved", ...Object.keys(ICONS)].map(type =>
        button(type, () => { category = type; renderFilterChips(); renderCards(); }, type === category ? "on" : "")));
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

        return el("article", { className: "card" },
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
    }));

    $("exploreNote").textContent = list.length
        ? `${list.length} ${list.length === 1 ? "place" : "places"}`
        : "Nothing found. Try another word or filter.";
}

function setViewButtons() {
    document.querySelectorAll(".toggle button").forEach(b => b.classList.toggle("on", b.dataset.view === view));
}

/* ---------- events ---------- */
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

document.querySelectorAll(".toggle button").forEach(b =>
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
            $("message").textContent = "Link copied.";
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

$("themeBtn").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    save("lpu-theme", next);
});

/* Rotating block number in the headline */
const blocks = ["34", "18", "30", "36", "32"];
let turn = 0;
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
        turn = (turn + 1) % blocks.length;
        const old = $("rotator");
        old.replaceWith(el("span", { id: "rotator", textContent: blocks[turn] }));
    }, 2500);
}

/* ---------- start ---------- */
document.documentElement.dataset.theme = load("lpu-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
fillSelects();
renderTiles();
renderFilterChips();
window.addEventListener("hashchange", route);
route();
