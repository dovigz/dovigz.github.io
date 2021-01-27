

var map;
var mapLat = 37.50;
var mapLng = -98.35;
var mapDefaultZoom = 5.5;
var ordercount = 0;
var grandTotal = 0;
initialize_map();





function initialize_map() {
  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([mapLng, mapLat]),
      zoom: mapDefaultZoom
    })
  });
}

function add_map_point(lat, lng, date, ordercount, totalX) {

  
  var dateObject = new Date(date);

  var month = (dateObject.getMonth()) + 1;


  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
      })]
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        src: "./images/" + month + ".png"
      })
    })
  });



  setInterval(function run() {
    map.addLayer(vectorLayer);
    grandTotal = grandTotal + totalX;
    var n = grandTotal.toFixed(2);
    var res = n.split("");

if(res.length===5){
  res.unshift("0", "0", "0", "0");
}
else if(res.length===6){
  res.unshift("0", "0", "0");
}
else if(res.length===7){
  res.unshift( "0", "0");
}
else if(res.length===8){
  res.unshift("0");
}



console.log(res);

document.getElementById('cents1').innerText = res[8];
document.getElementById('cents10').innerText =res[7];
document.getElementById('dot').innerText = res[6];
document.getElementById('dollar1').innerText =res[5];
document.getElementById('dollar10').innerText = res[4];
document.getElementById('dollar100').innerText =res[3];
document.getElementById('dollar1000').innerText = res[2];
document.getElementById('dollar10000').innerText =res[1];
document.getElementById('dollar100000').innerText =res[0];
document.getElementById('date').innerText = "As of " +date + "Your total revune is  ";
    


  }, ordercount * 30);


}



const delay = ms => new Promise(res => setTimeout(res, ms));
const request = async () => {
  const response = await fetch("./etsy2020orders.json");
  const orders = await response.json();


  console.log(orders);


  orders.forEach(order => {

    ordercount++;
    lat = (order.latitude);
    long = (order.longitude);
    date = (order.date);
    orderNumber = (order.order);
    id = (order.name);
    street = (order.street);
    city = (order.city);
    state = (order.state);
    zip = (order.zip);
    country = (order.country);
    total = (order.total);



    add_map_point(lat, long, date, ordercount, total);
  });
};


request();



