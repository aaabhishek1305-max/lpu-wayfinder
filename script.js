
const CAMPUS = "Lovely Professional University, Phagwara, Punjab, India";

const locations = {
    "Block 34": `Block 34, ${CAMPUS}`,
    "Block 18": `Block 18, ${CAMPUS}`,
    "Central Library": `Central Library, ${CAMPUS}`,
    "Uni Mall": `Uni Mall, ${CAMPUS}`,
    "Uni Hospital": `Uni Hospital, ${CAMPUS}`,
    "Block 30": `Block 30, ${CAMPUS}`,
    "Sports Complex": `Sports Complex, ${CAMPUS}`,
    "Main Auditorium": `Main Auditorium, ${CAMPUS}`
};

let currentPosition = null;

const search = document.getElementById("search");
const origin = document.getElementById("origin");
const map = document.getElementById("map");
const message = document.getElementById("message");
const mapTitle = document.getElementById("mapTitle");

function selectPlace(place) {
    search.value = place;
    findLocation();
}

function getDestination(value) {
    const found = Object.keys(locations).find(
        name => name.toLowerCase() === value.toLowerCase()
    );

    return found ? locations[found] : `${value}, ${CAMPUS}`;
}

function updateMap(latitude, longitude) {
    map.src =
        `https://www.google.com/maps?q=${latitude},${longitude}&z=19&output=embed`;
}

function openRoute(destination, start) {
    const url = new URL("https://www.google.com/maps/dir/");

    url.searchParams.set("api", "1");
    url.searchParams.set("destination", destination);
    url.searchParams.set("travelmode", "walking");

    if (start) {
        url.searchParams.set("origin", start);
    }

    window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function findLocation() {
    const value = search.value.trim();

    if (!value) {
        message.textContent = "Please enter a destination.";
        return;
    }

    const destination = getDestination(value);

    mapTitle.textContent = "Destination: " + value;

    const selectedOrigin = origin.value;

    if (selectedOrigin === "My Location") {
        message.textContent = "Finding your actual GPS location...";

        if (!navigator.geolocation) {
            message.textContent = "GPS is not supported by your browser.";
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                currentPosition = `${lat},${lng}`;

                // Display actual current position on the map
                updateMap(lat, lng);

                message.textContent =
                    `Your current GPS position: ${lat.toFixed(6)}, ${lng.toFixed(6)}.`;

                openRoute(destination, currentPosition);
            },
            error => {
                message.textContent =
                    "Unable to access GPS. Allow location permission or select a campus gate.";
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        );

    } else {
        const start = `${selectedOrigin}, ${CAMPUS}`;

        map.src =
            "https://www.google.com/maps?q=" +
            encodeURIComponent(destination) +
            "&output=embed";

        message.textContent =
            `Opening directions from ${selectedOrigin} to ${value}.`;

        openRoute(destination, start);
    }
}

search.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        findLocation();
    }
});
