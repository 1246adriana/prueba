(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.inventarios=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/inventarios'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/inventarios/',
				data:{"i.nombreProducto":"","i.lote":"","i.fechaEntrada":"","i.cantidad":"","i.descripcion":""}
			};
			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.inventarios=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
		ctl.init();
	}
]);


    
})();