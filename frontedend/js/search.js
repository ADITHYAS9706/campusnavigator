function searchBuilding(){

let building = document.getElementById("searchInput").value;

if(building === ""){
alert("Enter building name");
return;
}

window.location.href = "map.html?building=" + building;

}