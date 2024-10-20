// Ensure buildings.js is loaded before this script
console.log(buildings); // Check if buildings data is available

// Constants for image size and bounds
const imageHeight = 780 * 2;
const imageWidth = 1300 * 2;
const southWest = [0, 0];
const northEast = [imageWidth, imageHeight];
const imageBounds = [southWest, northEast];

// Get building name from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const buildingNum = urlParams.get('building');
console.log('URL para building:', buildingNum);

// Icon for map markers
const markerIcon = L.icon({
    iconUrl: 'map/marker.png',
    iconSize: [77.6 / 2, 104.1 / 2],
});

//breathing icon for map markers
const breathingIcon = L.divIcon({
    className: 'breathing-icon',
    html: '<img src="map/target.png" alt="Building Marker">',
    iconSize: [38.8, 52.05],
    iconAnchor: [19.4, 52.05]
});

var icon = markerIcon; 
var markers = [];
var lables = [];

// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple,
    maxBounds: imageBounds,
    maxBoundsViscosity: 1.0,

})

// Add image overlay to the map
L.imageOverlay('map/map_buildings.svg', imageBounds).addTo(map);
map.fitBounds(imageBounds);

//directions
directionBounds = [[1432, 1523],[1555, 1681]];
L.imageOverlay('map/direction.svg', directionBounds).addTo(map);

// Default center and zoom level
let initialCenter = [1260, 750];
let initialZoom = 0.3;

// Add markers and tooltips for each building
buildings.forEach(building => {
    
    if (building.markerNum == buildingNum) {
        // alert("1");
        initialCenter = building.coords;
        initialZoom = 1;
        icon = breathingIcon
    }
    else{
        icon = markerIcon
    }
    
    // Only add markers if coordinates are provided
    if (building.coords.length > 0) {
        // Center map on the building specified in the URL
        
        const marker = L.marker(building.coords, { icon: icon, className: 'custom-marker' }).addTo(map);
        markers.push(marker);

        const tooltip = L.tooltip({
            permanent: true,
            direction: 'center',
            className: 'building-label'
        })
        .setContent(building.markerNum)
        .setLatLng(building.coords)
        .addTo(map);
        lables.push(tooltip);

        // Open popup on marker click
        marker.on('click', function() {
            bounceMarker(marker);
            openPopup(building.info);
        });

        marker.on('mouseover', function() {
            marker.setOpacity(0.8);
            // tooltip.
        });

        marker.on('mouseout', function() {
            marker.setOpacity(1.0);
            // tooltip.
        });

    }
});

// map.on('click', function(e) {
//     const { lat, lng } = e.latlng;
//     alert(`coords: [${Math.round(lat)}, ${Math.round(lng)}]`);
// });

map.setView(initialCenter, initialZoom);


// Function to open the custom popup
function openPopup(content) {
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('popup').style.display = 'block';
}

// Function to close the custom popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function bounceMarker(marker) {
    const markerElement = marker.getElement();
    markerElement.classList.add('bounce');
    setTimeout(() => {
        markerElement.classList.remove('bounce');
    }, 500); 
}

function handleSearch() {
    var foundBuilding = false;
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    markers.forEach(marker => {
        marker.setIcon(markerIcon);
    });

    buildings.forEach(building => {
        if(query == building.name.toLowerCase() || building.aliases.includes(query))
        {
            // alert('You searched for building number: ' + building.markerNum + ' :' + building.name);
            foundBuilding = true;
            initialCenter = building.coords;
            initialZoom = 1; 
            map.setView(initialCenter, initialZoom);
            markers[building.markerNum-1].setIcon(breathingIcon);
            target = true;
        }
    });

    if(foundBuilding == false){
        alert('The building you searched for does not exist. Try entering another name.');
    }
}

function unselect(){
    initialCenter = [1260, 750];
    initialZoom = 0.3;
    map.setView(initialCenter, initialZoom);
    markers.forEach(marker => {
        marker.setIcon(markerIcon);
    });
}


// // Function to create and animate butterfly
// function createButterfly(latlng) {
//     const butterfly = document.createElement('div');
//     butterfly.className = 'butterfly';
//     butterfly.style.zIndex = '1000';
//     document.body.appendChild(butterfly);

//     // Convert map coordinates to screen coordinates
//     const point = map.latLngToContainerPoint(latlng);
//     butterfly.style.left = `${point.x}px`;
//     butterfly.style.top = `${point.y}px`;

//     // Remove the butterfly after a certain time
//     setTimeout(() => {
//         butterfly.remove();
//     }, 4000); // Adjust time as needed
// }

// // Listen for map click events
// map.on('click', function(e) {
//     const latlng = e.latlng;
//     createButterfly(latlng);
// });

