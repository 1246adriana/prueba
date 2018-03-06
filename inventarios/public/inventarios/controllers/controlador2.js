(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

var nombreControlador2="Controlador2";
app.controller(nombreControlador2,
	['$scope',
	function($s){
		
		var ctl=this;
		ctl.validar=function(){
			var tmp1=ctl.usuario|| "";
			tmp1=tmp1.trim() ;
			if(tmp1.length==0)
			alert("Falta el campo usuario");
			var tmp2=ctl.contrasena|| "";
			tmp2=tmp2.trim() ;
			if(tmp2.length==0)
			alert("Falta el campo contraseÃ±a");

		};
	}
	]
);
    
})();