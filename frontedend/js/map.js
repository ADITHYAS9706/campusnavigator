let map;

function initMap(){

map = new google.maps.Map(document.getElementById("map"),{
center:{lat:12.9716,lng:77.5946},
zoom:16
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