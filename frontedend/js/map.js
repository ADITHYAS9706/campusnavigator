let map;

const campus = {
lat:13.961961,
lng:75.509455
};

function initMap(){

map = new google.maps.Map(
document.getElementById("map"),
{
zoom:18,
center:campus,
mapTypeId:"satellite"
}
);

// campus marker
new google.maps.Marker({
position:campus,
map:map,
title:"Campus"
});

// restrict map to campus area
map.setOptions({
restriction:{
latLngBounds:{
north:13.963673,
south:13.964295,
east:75.512621,
west:75.506350
},
strictBounds:false
}
});

}