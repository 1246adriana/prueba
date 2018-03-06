var mongoose = require('mongoose'); //cargamos la biblioteca
var Schema = mongoose.Schema; 

var inventario=new Schema({  //Creamos nuestra esquema
	nombreProducto:String,
	lote:String,
	fechaEntrada:String,
	cantidad:String,
	descripcion:String,
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}
*/
var inventarioModel=mongoose.model("inventario",inventario);  //Exportamos nuestra esquema

module.exports=inventarioModel;