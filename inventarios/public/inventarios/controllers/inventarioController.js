(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="inventarioController";
app.controller(nombreControlador,
	['$routeParams','$location','inventarioService',
	function(rp,l,service){
		var ctl=this;
		ctl.inventarios={};
		ctl.inventario={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.inventario._id|| "",ctl.inventario)
	        .then(function(data){
					ctl.inventario=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.inventario=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		ctl.init();
	}]);
	
})();