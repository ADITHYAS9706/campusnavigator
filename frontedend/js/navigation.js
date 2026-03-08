let directionsService;
let directionsRenderer;

function initNavigation(){

directionsService = new google.maps.DirectionsService();

directionsRenderer = new google.maps.DirectionsRenderer({
map:map
});

}


function startNavigation(){

if(!selectedLocation){
alert("Search building first");
return;
}

navigateTo(selectedLocation);

}

function navigateTo(destination){

navigator.geolocation.getCurrentPosition(function(position){

const origin = {

lat:position.coords.latitude,
lng:position.coords.longitude

};

directionsService.route({

origin:origin,

destination:{
lat:destination.lat,
lng:destination.lng
},

travelMode:google.maps.TravelMode.WALKING

},

function(result,status){

if(status==="OK"){
directionsRenderer.setDirections(result);
}

});

});

}