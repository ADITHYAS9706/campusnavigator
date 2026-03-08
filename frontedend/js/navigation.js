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