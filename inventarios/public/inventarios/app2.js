(function () {
    'use strict';
/*global angular*/
var app = 	angular.module('myApp',['ngRoute']);

app.constant("idioma","");
app.constant('area',function(radio){
	return (3.1416)*radio*radio;	
});

app.value("apiToken","FDfdcsdfddgdfgdfgddfdgsgghj");

app.config(["$routeProvider", function(rutas){
	rutas
	.when("/:id/:precio/:existencias",{
		templateUrl:"./views/vista1.html",
		controller:"Controlador1",
		controllerAs:"ctl"
	})
	.when("/dos",{
		templateUrl:"./views/vista2.html",
		controller:"Controlador1",
		controllerAs:"ctl"
	})
	.when("/tres",{
		templateUrl:"./views/vista3.html",
		controller:"Controlador3",
		controllerAs:"ctl"
	})
	.when("/inventario/:id",{
		templateUrl:"./views/inventario.html",
		controller:"inventarioController",
		controllerAs:"ctl"
	})
	.when("/weather",{
		templateUrl:"./views/weather.html",
		controller:"theweather",
		controllerAs:"obj"
	})
}]);


})();