
const locations = {
    "Block 34": "Block 34, Lovely Professional University, Phagwara",
    "Block 18": "Block 18, Lovely Professional University, Phagwara",
    "Central Library": "Central Library, Lovely Professional University, Phagwara",
    "Uni Mall": "Uni Mall, Lovely Professional University, Phagwara",
    "Uni Hospital": "Uni Hospital, Lovely Professional University, Phagwara",
    "Block 30": "Block 30, Lovely Professional University, Phagwara",
    "Sports Complex": "Sports Complex, Lovely Professional University, Phagwara",
    "Main Auditorium": "Main Auditorium, Lovely Professional University, Phagwara"
};

function selectPlace(place) {
    document.getElementById("search").value = place;
    findLocation();
}

function findLocation() {
    const origin = document.getElementById("origin").value;
    const search = document.getElementById("search").value.trim();

    const destination = locations[search] ||
        (search + ", Lovely Professional University, Phagwara");

    if (!search) {
        alert("Please enter a destination!");
        return;
    }

    const start = origin === "My Location"
        ? "Current Location"
        : origin + ", Lovely Professional University, Phagwara";

    document.getElementById("mapTitle").innerText =
        "Destination: " + search;

    document.getElementById("message").innerText =
        "Opening walking directions to " + search + "...";

    document.getElementById("map").src =
        "https://www.google.com/maps?q=" +
        encodeURIComponent(destination) + "&output=embed";

    const route =
        "https://www.google.com/maps/dir/?api=1" +
        "&origin=" + encodeURIComponent(start) +
        "&destination=" + encodeURIComponent(destination) +
        "&travelmode=walking";

    window.open(route, "_blank");
}

document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        findLocation();
    }
});
