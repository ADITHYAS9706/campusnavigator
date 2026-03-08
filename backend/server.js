const express = require("express");
const cors = require("cors");

const buildingRoutes = require("./routes/buildings");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/buildings", buildingRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});