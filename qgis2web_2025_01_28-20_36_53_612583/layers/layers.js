var wms_layers = [];

var format_Secciones_azcapo2Secciones_azcapo_0 = new ol.format.GeoJSON();
var features_Secciones_azcapo2Secciones_azcapo_0 = format_Secciones_azcapo2Secciones_azcapo_0.readFeatures(json_Secciones_azcapo2Secciones_azcapo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secciones_azcapo2Secciones_azcapo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secciones_azcapo2Secciones_azcapo_0.addFeatures(features_Secciones_azcapo2Secciones_azcapo_0);
var lyr_Secciones_azcapo2Secciones_azcapo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secciones_azcapo2Secciones_azcapo_0, 
                style: style_Secciones_azcapo2Secciones_azcapo_0,
                popuplayertitle: 'Secciones_azcapo (2) — Secciones_azcapo',
                interactive: true,
    title: 'Secciones_azcapo (2) — Secciones_azcapo<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_0.png" /> -379 - -93<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_1.png" /> -93 - 0<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_2.png" /> 0 - 61<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_3.png" /> 61 - 94<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_4.png" /> 94 - 133<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_5.png" /> 133 - 184<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_6.png" /> 184 - 246<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_7.png" /> 246 - 314<br />\
    <img src="styles/legend/Secciones_azcapo2Secciones_azcapo_0_8.png" /> 314 - 925<br />'
        });
var format_UH_AZCAPO_1 = new ol.format.GeoJSON();
var features_UH_AZCAPO_1 = format_UH_AZCAPO_1.readFeatures(json_UH_AZCAPO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UH_AZCAPO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UH_AZCAPO_1.addFeatures(features_UH_AZCAPO_1);
var lyr_UH_AZCAPO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UH_AZCAPO_1, 
                style: style_UH_AZCAPO_1,
                popuplayertitle: 'UH_AZCAPO',
                interactive: true,
                title: '<img src="styles/legend/UH_AZCAPO_1.png" /> UH_AZCAPO'
            });

lyr_Secciones_azcapo2Secciones_azcapo_0.setVisible(true);lyr_UH_AZCAPO_1.setVisible(true);
var layersList = [lyr_Secciones_azcapo2Secciones_azcapo_0,lyr_UH_AZCAPO_1];
lyr_Secciones_azcapo2Secciones_azcapo_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'diferencia de votos - Hoja 1_DISTRITO': 'diferencia de votos - Hoja 1_DISTRITO', 'diferencia de votos - Hoja 1_NOMBRE': 'diferencia de votos - Hoja 1_NOMBRE', 'diferencia de votos - Hoja 1_CIRCUNSCRIPCIÓN': 'diferencia de votos - Hoja 1_CIRCUNSCRIPCIÓN', 'diferencia de votos - Hoja 1_LISTA NOMINAL': 'diferencia de votos - Hoja 1_LISTA NOMINAL', 'diferencia de votos - Hoja 1_PAN': 'diferencia de votos - Hoja 1_PAN', 'diferencia de votos - Hoja 1_PRI': 'diferencia de votos - Hoja 1_PRI', 'diferencia de votos - Hoja 1_PRD': 'diferencia de votos - Hoja 1_PRD', 'diferencia de votos - Hoja 1_PVEM': 'diferencia de votos - Hoja 1_PVEM', 'diferencia de votos - Hoja 1_PT': 'diferencia de votos - Hoja 1_PT', 'diferencia de votos - Hoja 1_MC': 'diferencia de votos - Hoja 1_MC', 'diferencia de votos - Hoja 1_MORENA': 'diferencia de votos - Hoja 1_MORENA', 'diferencia de votos - Hoja 1_PAN-PRI-PRD': 'diferencia de votos - Hoja 1_PAN-PRI-PRD', 'diferencia de votos - Hoja 1_PAN-PRI': 'diferencia de votos - Hoja 1_PAN-PRI', 'diferencia de votos - Hoja 1_PAN-PRD': 'diferencia de votos - Hoja 1_PAN-PRD', 'diferencia de votos - Hoja 1_PRI-PRD': 'diferencia de votos - Hoja 1_PRI-PRD', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA': 'diferencia de votos - Hoja 1_PVEM-PT-MORENA', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)': 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA(VOT. TOTAL)': 'diferencia de votos - Hoja 1_PVEM-PT-MORENA(VOT. TOTAL)', 'diferencia de votos - Hoja 1_VOTOS PARA CANDIDATOS NO REGISTRADOS': 'diferencia de votos - Hoja 1_VOTOS PARA CANDIDATOS NO REGISTRADOS', 'diferencia de votos - Hoja 1_VOTOS NULOS': 'diferencia de votos - Hoja 1_VOTOS NULOS', 'diferencia de votos - Hoja 1_VOTACIÓN TOTAL EMITIDA': 'diferencia de votos - Hoja 1_VOTACIÓN TOTAL EMITIDA', 'diferencia de votos - Hoja 1_DIFERENCIA': 'diferencia de votos - Hoja 1_DIFERENCIA', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)_1': 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)_1', 'diferencia de votos - Hoja 1_PORCENTAJE PAN-PRI-PRD': 'diferencia de votos - Hoja 1_PORCENTAJE PAN-PRI-PRD', 'diferencia de votos - Hoja 1_ÍNDICE DE REPRESENTANTIVIDAD DEL PARTIDO': 'diferencia de votos - Hoja 1_ÍNDICE DE REPRESENTANTIVIDAD DEL PARTIDO', });
lyr_UH_AZCAPO_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'SECCIONES': 'SECCIONES', 'DOMICILIO': 'DOMICILIO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'Columna1': 'Columna1', });
lyr_Secciones_azcapo2Secciones_azcapo_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'diferencia de votos - Hoja 1_DISTRITO': 'Range', 'diferencia de votos - Hoja 1_NOMBRE': 'TextEdit', 'diferencia de votos - Hoja 1_CIRCUNSCRIPCIÓN': 'Range', 'diferencia de votos - Hoja 1_LISTA NOMINAL': 'Range', 'diferencia de votos - Hoja 1_PAN': 'Range', 'diferencia de votos - Hoja 1_PRI': 'Range', 'diferencia de votos - Hoja 1_PRD': 'Range', 'diferencia de votos - Hoja 1_PVEM': 'CheckBox', 'diferencia de votos - Hoja 1_PT': 'CheckBox', 'diferencia de votos - Hoja 1_MC': 'Range', 'diferencia de votos - Hoja 1_MORENA': 'CheckBox', 'diferencia de votos - Hoja 1_PAN-PRI-PRD': 'Range', 'diferencia de votos - Hoja 1_PAN-PRI': 'Range', 'diferencia de votos - Hoja 1_PAN-PRD': 'Range', 'diferencia de votos - Hoja 1_PRI-PRD': 'Range', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA': 'Range', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)': 'Range', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA(VOT. TOTAL)': 'Range', 'diferencia de votos - Hoja 1_VOTOS PARA CANDIDATOS NO REGISTRADOS': 'Range', 'diferencia de votos - Hoja 1_VOTOS NULOS': 'Range', 'diferencia de votos - Hoja 1_VOTACIÓN TOTAL EMITIDA': 'TextEdit', 'diferencia de votos - Hoja 1_DIFERENCIA': 'Range', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)_1': 'Range', 'diferencia de votos - Hoja 1_PORCENTAJE PAN-PRI-PRD': 'TextEdit', 'diferencia de votos - Hoja 1_ÍNDICE DE REPRESENTANTIVIDAD DEL PARTIDO': 'TextEdit', });
lyr_UH_AZCAPO_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'SECCIONES': 'TextEdit', 'DOMICILIO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'Columna1': 'TextEdit', });
lyr_Secciones_azcapo2Secciones_azcapo_0.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'diferencia de votos - Hoja 1_DISTRITO': 'hidden field', 'diferencia de votos - Hoja 1_NOMBRE': 'hidden field', 'diferencia de votos - Hoja 1_CIRCUNSCRIPCIÓN': 'hidden field', 'diferencia de votos - Hoja 1_LISTA NOMINAL': 'hidden field', 'diferencia de votos - Hoja 1_PAN': 'hidden field', 'diferencia de votos - Hoja 1_PRI': 'hidden field', 'diferencia de votos - Hoja 1_PRD': 'hidden field', 'diferencia de votos - Hoja 1_PVEM': 'hidden field', 'diferencia de votos - Hoja 1_PT': 'hidden field', 'diferencia de votos - Hoja 1_MC': 'hidden field', 'diferencia de votos - Hoja 1_MORENA': 'hidden field', 'diferencia de votos - Hoja 1_PAN-PRI-PRD': 'hidden field', 'diferencia de votos - Hoja 1_PAN-PRI': 'hidden field', 'diferencia de votos - Hoja 1_PAN-PRD': 'hidden field', 'diferencia de votos - Hoja 1_PRI-PRD': 'hidden field', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA': 'hidden field', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)': 'hidden field', 'diferencia de votos - Hoja 1_PVEM-PT-MORENA(VOT. TOTAL)': 'hidden field', 'diferencia de votos - Hoja 1_VOTOS PARA CANDIDATOS NO REGISTRADOS': 'hidden field', 'diferencia de votos - Hoja 1_VOTOS NULOS': 'hidden field', 'diferencia de votos - Hoja 1_VOTACIÓN TOTAL EMITIDA': 'hidden field', 'diferencia de votos - Hoja 1_DIFERENCIA': 'hidden field', 'diferencia de votos - Hoja 1_PAN-PRI-PRD(VOT. TOTAL)_1': 'hidden field', 'diferencia de votos - Hoja 1_PORCENTAJE PAN-PRI-PRD': 'hidden field', 'diferencia de votos - Hoja 1_ÍNDICE DE REPRESENTANTIVIDAD DEL PARTIDO': 'hidden field', });
lyr_UH_AZCAPO_1.set('fieldLabels', {'NOMBRE': 'no label', 'SECCIONES': 'no label', 'DOMICILIO': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'Columna1': 'no label', });
lyr_UH_AZCAPO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});