let map;

let locations = [

{
name:"Computer Science Department",
lat:13.961371,
lng:75.508862
},

{
name:"Mechanical Department",
lat:13.961615,
lng:75.508412
},

{
name:"Library",
lat:13.961750,
lng:75.508773
},


{
name:"Canteen",
coords:[
{lat:13.962486,lng:75.507440},
{lat:13.960952,lng:75.509145}
]
},

{
name:"Admin Block",
lat:13.961966,
lng:75.509273
},


{
name:"Cricket ground",
lat:13.963279,
lng:75.508415
},

{
name:"Basketball ground",
lat:13.962437,
lng:75.507788
},

{
name:"Football ground",
lat:13.961971,
lng:75.510177
},

{
name:"Boys hostel",
coords:[
{lat:13.962289, lng:75.507163},
{lat:13.962841, lng:75.507580}
]
},

{
name:"PES Polytecnic",
lat:13.963765,
lng:75.507781
},

{
name:"PES Bank",
lat:13.964087,
lng:75.508062
},

{
name:"Gate two",
lat:13.963201,
lng:75.509723
},

{
name:"Gate one",
lat:13.961499,
lng:75.512393
},

{
name:"New Building",
lat:13.961771,
lng:75.507687
},

{
name:"Old Building",
lat:13.961514,
lng:75.508586
},

{
name:"Bus bay",
lat:13.960864,
lng:75.508195
},

{
name:"Parking",
lat:13.962555,
lng:75.509690
},

{
name:"Prerana Conventional Hall",
lat:13.960840,
lng:75.509462
},

{
name:"PES Public School",
lat:13.961326,
lng:75.511267
},

{
name:"Public School Ground",
lat:13.961934,
lng:75.511415
},

{
name:"Enventure Engineering LLP",
lat:13.960456,
lng:75.509082
},

{
name:"Girls hostel",
coords:[
{lat:13.960401, lng:75.510369},
{lat:13.960769, lng:75.510485}
]
},

{
name:"PES Headquarters",
lat:13.961079,
lng:75.510654
},

{
name:"PES Institute of Advanced Management Studies",
lat:13.960407,
lng:75.511701
},

{
name:"PES Instittute of Technology and Management",
lat:13.962166,
lng:75.509033
},

{
name:"PES PUC",
lat:13.961456,
lng:75.511305
},

{
name:"GYM",
lat:13.961091,
lng:75.509365
}


];


const campus = {
lat:13.961946,
lng:75.509359
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

// restrict map to campus area
map.setOptions({
restriction:{
latLngBounds:{
north:13.964546,
south:13.959533,
east:75.513234,
west:75.506249
},
strictBounds:false
}
});

}

initNavigation();
