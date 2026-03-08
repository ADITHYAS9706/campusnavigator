const buildings = require("../data/campusLocations.json");

function getBuildings(req,res){

res.json(buildings);

}

module.exports = { getBuildings };