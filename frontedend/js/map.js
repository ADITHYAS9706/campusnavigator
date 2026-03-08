let map;
let geocoder;

const campus = {
  lat: 13.961961,
  lng: 75.509455
};

function initMap() {

  // Create map
  map = new google.maps.Map(document.getElementById("map"), {
    center: campus,
    zoom: 18,
    mapTypeId: "satellite"
  });

  // Initialize geocoder
  geocoder = new google.maps.Geocoder();

  // Campus marker
  new google.maps.Marker({
    position: campus,
    map: map,
    title: "Campus"
  });

  // Restrict map to campus area
  map.setOptions({
    restriction: {
      latLngBounds: {
        north: 13.963673,
        south: 13.960295,
        east: 75.512621,
        west: 75.506350
      },
      strictBounds: false
    }
  });

  // Load buildings from backend
  fetch("http://localhost:5000/buildings")
    .then(res => res.json())
    .then(data => {

      data.forEach(building => {

        new google.maps.Marker({
          position: {
            lat: building.lat,
            lng: building.lng
          },
          map: map,
          title: building.name
        });

      });

    });

}


// 🔎 Search place anywhere
function searchPlace() {

  const place = document.getElementById("placeInput").value;

  if (!place) {
    alert("Enter a place");
    return;
  }

  geocoder.geocode({ address: place }, function(results, status) {

    if (status === "OK") {

      map.setCenter(results[0].geometry.location);

      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

    } else {
      alert("Place not found");
    }

  });

}


// 🏫 Search building inside campus
function findBuilding() {

  const buildingName = document.getElementById("search").value.toLowerCase();

  fetch("http://localhost:5000/buildings")
    .then(res => res.json())
    .then(data => {

      const building = data.find(b =>
        b.name.toLowerCase() === buildingName
      );

      if (building) {

        const location = {
          lat: building.lat,
          lng: building.lng
        };

        map.setCenter(location);

        new google.maps.Marker({
          position: location,
          map: map,
          title: building.name
        });

      } else {
        alert("Building not found");
      }

    });

}


// 🧭 Navigation to location
function navigateTo(destination) {

  map.setCenter(destination);

  new google.maps.Marker({
    position: destination,
    map: map,
    title: "Destination"
  });

}