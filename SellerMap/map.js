

var map;
var mapLat = 37.50;
var mapLng = -98.35;
var mapDefaultZoom = 5.5;
var speed = 20;
var grandTotal = 0;
var ord = [];
var cit = [];
var st = [];
var con = [];
var idid = [];
var dt = [];
var cit5 = [];
var st5 = [];
var con3 = [];
var speed ;
document.getElementById("date").classList.add("hidden");
document.getElementById("city").classList.add("hidden");
document.getElementById("state").classList.add("hidden");




initialize_map();
setSpeed();


function setSpeed() {
  var slider = document.getElementById("myRange");


slider.onchange = function() {
  
   speed = this.value;
  output.innerHTML = speed;

  
};


document.getElementById("run").addEventListener("click", function (){
  runMap(speed * 10);
});

}






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


function runMap(speed) {
  document.getElementById("speed").classList.add("hidden");

  document.getElementById("date").classList.remove("hidden");
document.getElementById("city").classList.remove("hidden");
document.getElementById("state").classList.remove("hidden");



function add_map_point(lat, lng, date, ordercount, totalX, city, state, country, id) {
  
ord.push(ordercount)

ordercount = ord.reduce(addOrd);

function addOrd(total, num) {
  return total + num;
}
  
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
        src: "./images/" + month +".png"
      })
    })
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  setInterval(function run() {
    map.addLayer(vectorLayer);
    grandTotal = grandTotal + totalX;
    var grandTotalString = grandTotal.toFixed(2);
 
 

 
  


    city = city.toLowerCase();
    state = state.toUpperCase();
    country = country.toLowerCase();
    

    
    
if (!cit.includes(city) && city !==""){
  cit.push(city);
  cit5.push(city);
}
else{
  cit5.push(city);
}


if (!st.includes(state)  && state !==""){
  st.push(state);
  st5.push(state);
}
else{
  st5.push(state);
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




function citiesList(cit5) {
  var a = [], b = [], prev;
  cit5.sort();

  for ( var i = 0; i < cit5.length; i++ ) {
      if ( cit5[i] !== prev ) {
          a.push(cit5[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = cit5[i];
  }
  
  return [a, b];
}

var result = citiesList(cit5);


resultcopy = [...result[1]];
resultcopy.sort(function(a, b){return b-a});
var city1 = resultcopy[0];
var city2 = resultcopy[1];
var city3 = resultcopy[2];
var city4 = resultcopy[3];
var city5 = resultcopy[4];
var city6 = resultcopy[5];
var city7 = resultcopy[6];
var city8 = resultcopy[7];
var city9 = resultcopy[8];
var city10 = resultcopy[9];



city1 = result[1].indexOf(city1);
city2 = result[1].indexOf(city2);
city3 = result[1].indexOf(city3);
city4 = result[1].indexOf(city4);
city5 = result[1].indexOf(city5);
city6 = result[1].indexOf(city6);
city7 = result[1].indexOf(city7);
city8 = result[1].indexOf(city8);
city9 = result[1].indexOf(city9);
city10 = result[1].indexOf(city10);


////////////////////////////////////////////////////////////////////////////////////////////////////////

function statesList(st5) {
  var c = [], d = [], prev;
  st5.sort();

  for ( var i = 0; i < st5.length; i++ ) {
      if ( st5[i] !== prev ) {
          c.push(st5[i]);
          d.push(1);
      } else {
          d[d.length-1]++;
      }
      prev = st5[i];
  }
  
  return [c, d];
}

var stateResult = statesList(st5);


stateResultcopy = [...stateResult[1]];
stateResultcopy.sort(function(a, b){return b-a});


for (var i = 0; i <20; ++i) {

  stateResultcopy[i] = stateResult[1].indexOf(stateResultcopy[i]);
}


var average = Math.floor( ordercount / dt.length);

grandTotalString = numberWithCommas(grandTotalString);
ordercount = numberWithCommas(ordercount);
datesLength = numberWithCommas(dt.length);
idLength = numberWithCommas(idid.length);
citiesLength = numberWithCommas(cit.length);



document.getElementById('date').innerText = "PersonalizeBabyGift, As of " +date + " You made " + ordercount + " Sales in "+ datesLength + " Days, With an average of " + average +
 " Orders a day to " + idLength + " different people, & shipped worldwide to " + citiesLength + " Citys, " +
 (st.length) + " States" + " in " + (con.length) + " Countrys. Your total revenue is  $" + grandTotalString   ;

 
 document.getElementById('city').innerText = "Your top Cities sold to \n\n" + 
 result[1][city1] + " sales to " + result[0][city1] + "\n" + 
 result[1][city2] + " sales to " + result[0][city2] + "\n" +
 result[1][city3] + " sales to " + result[0][city3] + "\n" +
 result[1][city4] + " sales to " + result[0][city4] + "\n" +
 result[1][city5] + " sales to " + result[0][city5] + "\n" + 
 result[1][city6] + " sales to " + result[0][city6] + "\n" +
 result[1][city7] + " sales to " + result[0][city7] + "\n" +
 result[1][city8] + " sales to " + result[0][city8] + "\n" +
 result[1][city9] + " sales to " + result[0][city9] + "\n" + 
 result[1][city10] + " sales to " + result[0][city10];
 
 document.getElementById('state').innerHTML ="";
 document.getElementById('state').innerHTML += "Your top States sold to is"+ "<br>" + "<br>";
for (let i = 0; i < stateResultcopy.length; i++) {
 


  document.getElementById('state').innerHTML += stateResult[1][stateResultcopy[i]] + " sales to " + stateResult[0][stateResultcopy[i]] + "<br>";
  
}




  }, ordercount * speed);


}



const delay = ms => new Promise(res => setTimeout(res, ms));
const request = async () => {
  const response = await fetch("./etsy2020orders.json");
  const orders = await response.json();


 


  orders.forEach(order => {

    ordercount = (order.items);
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



}