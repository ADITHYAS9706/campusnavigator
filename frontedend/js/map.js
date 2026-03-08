let map;

function initMap(){
    const bounds = {
north: 13.972,
south: 13.969,
east: 75.568,
west: 75.564
};

map = new google.maps.Map(document.getElementById("map"),{
center: { lat: 13.9705, lng: 75.5663 },
zoom: 17,
restriction: {
latLngBounds: bounds,
strictBounds: true
}
});

fetch("http://localhost:5000/buildings")
.then(res=>res.json())
.then(data=>{

data.forEach(building => {

new google.maps.Marker({
position:{lat:building.lat,lng:building.lng},
map:map,
title:building.name
});

});

});

}