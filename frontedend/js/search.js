let selectedLocation = null;
let searchMarkers = [];

function findBuilding(){

// get search text
let input = document
.getElementById("search")
.value
.toLowerCase()
.trim();

// get dropdown selection (if exists)
let dropdown = document.getElementById("destination");

let selected = dropdown ? dropdown.value.toLowerCase().trim() : "";

// use typed input OR dropdown value
let searchValue = input || selected;

// search building
let result = locations.find(
b => b.name.toLowerCase().includes(searchValue)
);

if(result){

selectedLocation = result;

// remove previous markers
searchMarkers.forEach(marker => marker.setMap(null));
searchMarkers = [];

let location;

// building with multiple coordinates
if(result.coords){

location = result.coords[0];

map.panTo(location);
map.setZoom(19);

result.coords.forEach(point => {

let marker = new google.maps.Marker({
position: point,
map: map,
title: result.name
});

searchMarkers.push(marker);

});

}

// building with single coordinate
else{

location = {
lat: result.lat,
lng: result.lng
};

map.panTo(location);
map.setZoom(19);

let marker = new google.maps.Marker({
position: location,
map: map,
title: result.name
});

searchMarkers.push(marker);

}

// call navigation
if(typeof navigateTo === "function"){
navigateTo(result);
}

}
else{

alert("Building not found");

}

}