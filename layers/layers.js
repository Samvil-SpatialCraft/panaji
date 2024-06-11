var wms_layers = [];
// Create a link element
var link = document.createElement("link");




        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Trees_2 = new ol.format.GeoJSON();
var features_Trees_2 = format_Trees_2.readFeatures(json_Trees_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_2 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_Trees_2.on('addfeature', function() {
    var totalFeatures = jsonSource_Trees_2.getFeatures().length;
    
    document.getElementById('notrees').innerText =totalFeatures;
});

jsonSource_Trees_2.addFeatures(features_Trees_2);

var lyr_Trees_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_2, 
                style: style_Trees_2,
                popuplayertitle: "Trees",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/tree.svg" class="icon" /> Trees'

            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Trees_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Trees_2];
lyr_Trees_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'English_Name_Konkani_Name_Scientific_Name_': 'English_Name_Konkani_Name_Scientific_Name_', 'English_Name': 'English Name', 'Konkani_Name': 'Konkani Name', 'Botanical_Name': 'Botanical Name', 'Location': 'Location', 'Serial_Number_of_the_tree': 'Serial_Number_of_the_tree', 'Photo_of_the_tree': 'Photo_of_the_tree', 'Date_of_the_photo': 'Date_of_the_photo', 'Record_your_current_location': 'Record_your_current_location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', '_Record_your_current_location_altitude': '_Record_your_current_location_altitude', '_Record_your_current_location_precision': '_Record_your_current_location_precision', 'Date_of_Plantation': 'Date_of_Plantation', 'Tree_height_of_the_tree_at_time_of_plantation_in_meters_': 'Tree_height_of_the_tree_at_time_of_plantation_in_meters_', 'Presence_of_tree_guard': 'Presence_of_tree_guard', 'Name_of_the_tree_guardian': 'Name_of_the_tree_guardian', 'Phone_number_of_the_tree_guardian': 'Phone_number_of_the_tree_guardian', 'Remarks_Observations': 'Remarks_Observations', '_uuid': '_uuid', 'Tree_height_m__at_time_of_plantation': 'Tree height(m) at time of plantation', 'Planted_on': 'Planted on', 'Tree_Guard': 'Tree Guard', 'Photo': 'Photo', });
lyr_Trees_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'English_Name_Konkani_Name_Scientific_Name_': 'TextEdit', 'English_Name': 'TextEdit', 'Konkani_Name': 'TextEdit', 'Botanical_Name': 'TextEdit', 'Location': 'TextEdit', 'Serial_Number_of_the_tree': 'Range', 'Photo_of_the_tree': 'TextEdit', 'Date_of_the_photo': 'DateTime', 'Record_your_current_location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', '_Record_your_current_location_altitude': 'TextEdit', '_Record_your_current_location_precision': 'TextEdit', 'Date_of_Plantation': 'DateTime', 'Tree_height_of_the_tree_at_time_of_plantation_in_meters_': 'TextEdit', 'Presence_of_tree_guard': 'Range', 'Name_of_the_tree_guardian': 'TextEdit', 'Phone_number_of_the_tree_guardian': 'TextEdit', 'Remarks_Observations': 'TextEdit', '_uuid': 'TextEdit', 'Tree_height_m__at_time_of_plantation': 'TextEdit', 'Planted_on': 'TextEdit', 'Tree_Guard': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Trees_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'English_Name_Konkani_Name_Scientific_Name_': 'hidden field', 'English_Name': 'inline label - visible with data', 'Konkani_Name': 'inline label - visible with data', 'Botanical_Name': 'inline label - visible with data', 'Location': 'hidden field', 'Serial_Number_of_the_tree': 'hidden field', 'Photo_of_the_tree': 'hidden field', 'Date_of_the_photo': 'hidden field', 'Record_your_current_location': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', '_Record_your_current_location_altitude': 'hidden field', '_Record_your_current_location_precision': 'hidden field', 'Date_of_Plantation': 'hidden field', 'Tree_height_of_the_tree_at_time_of_plantation_in_meters_': 'hidden field', 'Presence_of_tree_guard': 'hidden field', 'Name_of_the_tree_guardian': 'hidden field', 'Phone_number_of_the_tree_guardian': 'hidden field', 'Remarks_Observations': 'hidden field', '_uuid': 'hidden field', 'Tree_height_m__at_time_of_plantation': 'inline label - visible with data', 'Planted_on': 'inline label - visible with data', 'Tree_Guard': 'inline label - visible with data', 'Photo': 'inline label - visible with data', });
lyr_Trees_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

 // Extract and prepare data
 var fieldCounts = {};
 features_Trees_2.forEach(function(feature) {
     var fieldValue = feature.get('English_Name_Konkani_Name_Scientific_Name_');
     if (fieldValue) {
         if (fieldCounts[fieldValue]) {
             fieldCounts[fieldValue]++;
         } else {
             fieldCounts[fieldValue] = 1;
         }
     }
 });

 // Prepare the data for Chart.js
 var labels = Object.keys(fieldCounts);
var data = Object.values(fieldCounts);

var ctx = document.getElementById('myPieChart').getContext('2d');
var isMobileView = window.matchMedia("(max-width: 600px)").matches;

var options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true,
            position: 'nearest',
            callbacks: {
                label: function(context) {
                    var label = context.label || '';
                    return label;
                }
            },
            bodyFont: {
                size: isMobileView ? 7 : 10 // Set font size based on view
            }
        }
    }
};

if (isMobileView) {
    // Mobile view
    options.responsive = true;
    options.maintainAspectRatio = true;
} else {
    // Desktop view
    options.responsive = false;
    options.maintainAspectRatio = false;
}

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#66FF66'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#66FF66'
            ]
        }]
    },
    options: options
});
