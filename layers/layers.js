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
lyr_Trees_2.set('fieldAliases', {'English Na': 'English Na', 'Location': 'Location', 'Serial Num': 'Serial Num', 'Photo of t': 'Photo of t', 'Date of th': 'Date of th', '_Record yo': '_Record yo', '_Record _1': '_Record _1', 'Date of Pl': 'Date of Pl', 'Tree heigh': 'Tree heigh', 'Presence o': 'Presence o', 'Name of th': 'Name of th', 'Phone numb': 'Phone numb', 'Remarks/Ob': 'Remarks/Ob', 'Photo': 'Photo', });
lyr_Trees_2.set('fieldImages', {'English Na': 'TextEdit', 'Location': 'TextEdit', 'Serial Num': 'TextEdit', 'Photo of t': 'TextEdit', 'Date of th': 'DateTime', '_Record yo': 'TextEdit', '_Record _1': 'TextEdit', 'Date of Pl': 'DateTime', 'Tree heigh': 'TextEdit', 'Presence o': 'Range', 'Name of th': 'TextEdit', 'Phone numb': 'TextEdit', 'Remarks/Ob': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Trees_2.set('fieldLabels', {'English Na': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Serial Num': 'inline label - visible with data', 'Photo of t': 'hidden field', 'Date of th': 'inline label - visible with data', '_Record yo': 'inline label - visible with data', '_Record _1': 'inline label - visible with data', 'Date of Pl': 'inline label - visible with data', 'Tree heigh': 'inline label - visible with data', 'Presence o': 'inline label - visible with data', 'Name of th': 'inline label - visible with data', 'Phone numb': 'inline label - visible with data', 'Remarks/Ob': 'inline label - visible with data', 'Photo': 'inline label - visible with data', });
lyr_Trees_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});