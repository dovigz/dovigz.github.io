

var map;
var mapLat = 39.50;
var mapLng = -98.35;
var mapDefaultZoom = 5.5;
var ordercount = 0;





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

function add_map_point(lat, lng, date) {

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
    console.log(date);

  }, 3000);


}


const delay = ms => new Promise(res => setTimeout(res, ms));
const request = async () => {
  const response = await fetch("./etsy2020orders.json");
  const orders = await response.json();
  initialize_map();
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

    add_map_point(lat, long, date, ordercount);
  });
};


request();

// .then(r => {
//   if (!r.ok) {
//     throw new Error(`${r.status} ${r.statusText}`);
//   }
//   return r.json();
// })

// .then(orders => {



//   orders.forEach(order => {

// ordercount++;




//     lat = (order.latitude);
//     long = (order.longitude);
//     date = (order.date);
//     orderNumber = (order.order);
//     id = (order.name);
//     street = (order.street);
//     city = (order.city);
//     state = (order.state);
//     zip = (order.zip);
//     country = (order.country);
//     total = (order.total);


//    add_map_point(lat, long, date, ordercount);
//   });



  // });

