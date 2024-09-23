//Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {

  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);

  console.log(data.features);
});

function createFeatures(earthquakeData) {

    // Define a function that will run once for each feature, creating a circle marker.
    function pointToLayer(feature, latlng) {
      
      // Define marker style
        let markerOptions = {
            radius: markerSize(feature.properties.mag),  // Set the radius based on magnitude
            fillColor: markerColor(feature.geometry.coordinates[2]),  // Color based on depth
            color: "#000",  // Border color
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };
        return L.circleMarker(latlng, markerOptions);  // Create a circle marker
    }
  
    // Define a function for popups
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>
                       <p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
    }
  
    // Create the GeoJSON layer with pointToLayer and onEachFeature
    let earthquakes = L.geoJSON(earthquakeData, {
      pointToLayer: pointToLayer,
      onEachFeature: onEachFeature
    });
  
    // Send the earthquakes layer to the createMap function.
    createMap(earthquakes);
  }

function createMap(earthquakes) {

  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  let overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [street, earthquakes]
  });

  // Create a layer control, pass it our baseMaps and overlayMaps
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);

  // Add the legend to the map
  let legend = L.control({ position: 'bottomright' });

  legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Depth (km)</h4>';
    div.innerHTML += '<i style="background: #1a9850"></i><span>-10 to 10</span><br>';
    div.innerHTML += '<i style="background: #91cf60"></i><span>10 to 30</span><br>';
    div.innerHTML += '<i style="background: #d9ef8b"></i><span>30 to 50</span><br>';
    div.innerHTML += '<i style="background: #fee08b"></i><span>50 to 70</span><br>';
    div.innerHTML += '<i style="background: #fc8d59"></i><span>70 to 90</span><br>';
    div.innerHTML += '<i style="background: #d73027"></i><span>90+</span><br>';
    div.innerHTML += '<hr><h4>Magnitude</h4>';
    div.innerHTML += '<p>Circle size reflects magnitude</p>';
    return div;
  };
  legend.addTo(myMap);
}

// Helper function to determine marker size based on magnitude
function markerSize(magnitude) {
    return magnitude * 4;  // Adjust the multiplier to control size
  }

// Helper function to determine marker color based on depth
function markerColor(depth) {
    return depth > 90 ? "#d73027" :
        depth > 70 ? "#fc8d59" :
        depth > 50 ? "#fee08b" :
        depth > 30 ? "#d9ef8b" :
        depth > 10 ? "#91cf60" :
                    "#1a9850";
  }