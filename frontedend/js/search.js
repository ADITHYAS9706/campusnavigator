let selectedLocation = null;
let searchMarkers = [];

function findBuilding(){

let input = document
.getElementById("search")
.value
.toLowerCase()
.trim();

let selected = document
.getElementById("destination")
.value
.toLowerCase()
.trim();

// use typed input OR dropdown
let searchValue = input || selected;

let result = locations.find(
b => b.name.toLowerCase().includes(searchValue)
);

if(result){

selectedLocation = result;

// remove old markers
searchMarkers.forEach(marker => marker.setMap(null));
searchMarkers = [];

let location;

// if building has multiple coordinates
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

// if building has single coordinate
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

navigateTo(result);

}

else{
alert("Building not found");
}

}