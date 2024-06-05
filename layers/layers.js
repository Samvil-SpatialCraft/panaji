var wms_layers = [];


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
jsonSource_Trees_2.addFeatures(features_Trees_2);
var lyr_Trees_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_2, 
                style: style_Trees_2,
                popuplayertitle: "Trees",
                interactive: true,
                    title: '<img src="styles/legend/Trees_2.png" /> Trees'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Trees_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Trees_2];
lyr_Trees_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Location': 'Location', 'Serial_Number_of_the_tree': 'Serial_Number_of_the_tree', 'Photo_of_the_tree': 'Photo_of_the_tree', 'Date_of_the_photo': 'Date_of_the_photo', 'Record_your_current_location': 'Record_your_current_location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', '_Record_your_current_location_altitude': '_Record_your_current_location_altitude', '_Record_your_current_location_precision': '_Record_your_current_location_precision', 'Planted_On': 'Planted_On', 'Tree_Height': 'Tree_Height', 'Presence_of_tree_guard': 'Presence_of_tree_guard', 'Name_of_the_tree_guardian': 'Name_of_the_tree_guardian', 'Phone_number_of_the_tree_guardian': 'Phone_number_of_the_tree_guardian', 'Remarks_Observations': 'Remarks_Observations', '_uuid': '_uuid', 'Guard': 'Guard', 'Photo': 'Photo', });
lyr_Trees_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Serial_Number_of_the_tree': 'Range', 'Photo_of_the_tree': 'TextEdit', 'Date_of_the_photo': 'DateTime', 'Record_your_current_location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', '_Record_your_current_location_altitude': 'TextEdit', '_Record_your_current_location_precision': 'TextEdit', 'Planted_On': 'DateTime', 'Tree_Height': 'TextEdit', 'Presence_of_tree_guard': 'Range', 'Name_of_the_tree_guardian': 'TextEdit', 'Phone_number_of_the_tree_guardian': 'TextEdit', 'Remarks_Observations': 'TextEdit', '_uuid': 'TextEdit', 'Guard': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Trees_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Location': 'hidden field', 'Serial_Number_of_the_tree': 'hidden field', 'Photo_of_the_tree': 'hidden field', 'Date_of_the_photo': 'hidden field', 'Record_your_current_location': 'hidden field', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', '_Record_your_current_location_altitude': 'hidden field', '_Record_your_current_location_precision': 'hidden field', 'Planted_On': 'inline label - visible with data', 'Tree_Height': 'inline label - visible with data', 'Presence_of_tree_guard': 'hidden field', 'Name_of_the_tree_guardian': 'hidden field', 'Phone_number_of_the_tree_guardian': 'hidden field', 'Remarks_Observations': 'hidden field', '_uuid': 'hidden field', 'Guard': 'inline label - visible with data', 'Photo': 'inline label - visible with data', });
lyr_Trees_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});