<<<<<<< HEAD
function findBuilding(){

let input = document.getElementById("search").value.toLowerCase();

let result = buildings.find(
b => b.name.toLowerCase().includes(input)
);

if(result){

map.setCenter({
lat:result.lat,
lng:result.lng
});

new google.maps.Marker({
position:{lat:result.lat,lng:result.lng},
map:map,
title:result.name
});

}
else{
alert("Building not found");
}
=======
function searchBuilding(){

let building = document.getElementById("searchInput").value;

if(building === ""){
alert("Enter building name");
return;
}

window.location.href = "map.html?building=" + building;
>>>>>>> d37a5be8cfed0ca7350b1d1f8b385f9e6b8b40ab

}