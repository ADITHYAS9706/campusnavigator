
// Room coordinates on the floor map
const rooms = {
  "Entrance": {x:50, y:200},
  "Classroom": {x:300, y:200},
  "Lab": {x:500, y:100},
  "Stairs": {x:300, y:50}
};


// Change building floor image
function changeFloor(){

  const floor = document.getElementById("floorSelect").value;

  document.getElementById("floorMap").src =
  "assets/maps/" + floor + "-floor.png";

}


// Navigate to room
function navigateRoom(){

  const room = document.getElementById("roomInput").value;

  if(!rooms[room]){
    alert("Room not found");
    return;
  }

  drawPath("Entrance", room);

}


// Draw path on canvas
function drawPath(from, to){

  const canvas = document.getElementById("routeCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 700;
  canvas.height = 500;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();

  ctx.moveTo(rooms[from].x, rooms[from].y);
  ctx.lineTo(rooms[to].x, rooms[to].y);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;

  ctx.stroke();
}
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

function changeFloor(){

let floor = document.getElementById("floorSelect").value;

let images = {
ground: "assets/images/image.jpeg",
first: "assets/images/image5.jpeg",
second: "assets/images/image4.jpeg",
third: "assets/images/image3.jpeg",
fourth: "assets/images/image2.jpeg"
};

document.getElementById("floorMap").src = images[floor];

}

function changeFloorNew(){

let floor = document.getElementById("floorSelectNew").value;

let images = {
ground: "assets/images/newgf.jpeg",
first: "assets/images/newff.jpeg",
second: "assets/images/newsf.jpeg",
third: "assets/images/newtf.jpeg"
};

document.getElementById("floorMap").src = images[floor];

}