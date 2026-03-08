let map;

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

}