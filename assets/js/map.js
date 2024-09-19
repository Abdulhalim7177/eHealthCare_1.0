var map;

// Function to get the user's coordinates
function getCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            // Display the coordinates
            var coordsText = "This is your exact location: Latitude: " + lat + ", Longitude: " + lon;
            document.getElementById('coordinates-display').textContent = coordsText;

            // Show the "Show Map" button
            document.getElementById('show-map-container').style.display = 'block';

            // Initialize the map
            map = L.map('map').setView([lat, lon], 13);

            // Load and display tile layers on the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 22,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add a marker at the user's location
            L.marker([lat, lon]).addTo(map)
                .bindPopup("You are here: " + lat + ", " + lon)
                .openPopup();
        }, function() {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to show the map
function showMap() {
    document.getElementById('map').style.display = 'block';
    map.invalidateSize(); // Fixes map display issues when shown
}

// Add event listeners to buttons
document.getElementById('get-coordinates').addEventListener('click', getCoordinates);
document.getElementById('show-map').addEventListener('click', showMap);
