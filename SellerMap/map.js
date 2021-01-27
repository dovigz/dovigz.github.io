

var map;
var mapLat = 37.50;
var mapLng = -98.35;
var mapDefaultZoom = 5.5;
var ordercount = 0;
var grandTotal = 0;
var cit = [];
var st = [];
var con = [];
var idid = [];
var dt = [];
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

function add_map_point(lat, lng, date, ordercount, totalX, city, state, country, id) {

  
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
        src: "./images/12.png"
      })
    })
  });



  setInterval(function run() {
    map.addLayer(vectorLayer);
    grandTotal = grandTotal + totalX;
    var grandTotalString = grandTotal.toFixed(2);

if (!cit.includes(city) && city !==""){
  cit.push(city);
}
if (!st.includes(state)  && state !==""){
  st.push(state);
}
if (!con.includes(country) && country !==""){
  con.push(country);
}
if (!idid.includes(id) && id !==""){
  idid.push(id);
}
if (!dt.includes(date) && date !==""){
  dt.push(date);
}

var average = Math.floor( ordercount / dt.length);

document.getElementById('date').innerText = "PersonalizeBabyGift, As of " +date + " You made " + ordercount + " Orders in "+ dt.length + " Days, With an average of " + average +
 " Orders a day to " + idid.length + " different people, & shipped worldwide to " + (cit.length) + " Citys, " +
 (st.length) + " States" + " in " + (con.length) + " Countrys. Your total revenue is  $" + grandTotalString   ;
    


  }, ordercount * 20);


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



    add_map_point(lat, long, date, ordercount, total, city, state, country, id);
  });
};


request();



