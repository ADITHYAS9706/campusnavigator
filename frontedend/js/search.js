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

map.setZoom(18);

new google.maps.Marker({
position:{lat:result.lat,lng:result.lng},
map:map,
title:result.name
});

}
else{
alert("Building not found");
}

}