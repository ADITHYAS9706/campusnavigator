let map;

<<<<<<< HEAD
const buildings = [

{ name:"Library", lat:12.9720, lng:77.5950 },

{ name:"Computer Lab", lat:12.9718, lng:77.5948 },

{ name:"Canteen", lat:12.9715, lng:77.5952 }

];

function initMap(){

map = new google.maps.Map(
document.getElementById("map"),
{
zoom:18,
center:{lat:12.9716,lng:77.5946}
}
);
=======
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
>>>>>>> d37a5be8cfed0ca7350b1d1f8b385f9e6b8b40ab

}