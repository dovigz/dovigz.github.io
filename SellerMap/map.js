var map;
var mapLat = 39.50;
    var mapLng = -98.35;
var mapDefaultZoom = 3;


   

    
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

    function add_map_point(lat, lng) {
        
        
        
      var vectorLayer = new ol.layer.Vector({
        source:new ol.source.Vector({
          features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            })]
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: "fraction",
            anchorYUnits: "fraction",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
          })
        })
      });

      map.addLayer(vectorLayer); 
    
    }


  
initialize_map(); 

fetch("./etsy2020orders.json")
.then(r => {
  if (!r.ok) {
    throw new Error(`${r.status} ${r.statusText}`);
  }
  return r.json();
})

.then(orders => {
   
        
      
  orders.forEach(order => {
  

 



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


   add_map_point(lat, long);
  });

  
  
  });
  
