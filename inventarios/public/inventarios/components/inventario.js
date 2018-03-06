(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngInventario",[
    function(){
        return{
            template:"{{inventario.nombreProducto}}, {{inventario.lote}},{{inventario.fechaEntrada}},{{inventario.cantidad}},{{inventario.descripcion}}<br/>"
        }
    }
    ]);
    
})();










