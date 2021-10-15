var vg_1 = "js/f1_geomap.vg.json";
vegaEmbed("#F1map", vg_1, { "actions" : false,}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/f1_constructor.vg.json";
vegaEmbed("#F1constructor", vg_2, { "actions" : false,}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/f1_driver.vg.json";
vegaEmbed("#F1driver", vg_3, { "actions" : false,}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/f1_constructor_champion.vg.json";
vegaEmbed("#F1constructorchampion", vg_4, { "actions" : false,}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "js/f1_driver_champion.vg.json";
vegaEmbed("#F1driverchampion", vg_5, { "actions" : false,}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);