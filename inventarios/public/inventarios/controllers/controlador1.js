(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

var nombreControlador="Controlador1";

app.controller(nombreControlador,
	['$scope','idioma','area','$routeParams',
	function($s,$i,$a,$rp){
		
		var ctl=this;
		ctl.mostrar=false;
		ctl.nombre=$rp.id;
		console.log(ctl.nombre);

		ctl.clik=function(){
			ctl.mostrar=!ctl.mostrar;
		};

		ctl.cambioNombre=function(){
			alert("id: "+$rp.id+" precio:"+$rp.precio);
		};
	}
	]
);
    
})();