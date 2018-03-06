var express = require('express');  //Definicion de variables para cargarlas a express -- 
var path= require("path");
var mongoose = require('mongoose'); //Este es importante pa cargar base de datos mongodb
var bodyparser = require('body-parser'); //Cargamos bodyParser
//var customRandom=require("./random-integer"); //Peticion del random-integer.js
var Inventario=require("./models/inventario"); //Cargamos nuestro modelos que definimos


var app = express();  
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/inventarios");

var publicFolder=path.resolve(__dirname, "public");
app.use(express.static(publicFolder));


var publicFolder=path.resolve(__dirname, "public/app");
app.use(express.static(publicFolder));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");

/*

app.use(function(req, resp, next){  //usuario logeado
	console.log("Recibiendo la petición");
	if(req.headers["Autorization"] =="")
		resp.writeHead(303,{"url:/login"});
	else
		next();
});
app.use(function(req, resp, next){  //usuario logeado
	console.log("Recibiendo la petición a :"+req.url);
	var permiso=bd.find({userid:id, appid:req.url})
		resp.writeHead(303,{"url:/login"});
			if(permiso.success)
				next();
	else
		resp.writeHead(401, {url:"/forviden"});
});
*/


//app.get('/', function (req, resp) {
//  resp.send('Hola mundo:' + customRandom());
//});






app.get('/hola/:quien', function (req, resp) {
	resp.render("hola",{message:req.params.quien});
});



app.listen(3000, function () {
  console.log('El servidor esta corriendo en el puerto 3000!');
});

//Consultar todos
app.get('/Api/inventarios/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Tarea(req.body);
		Inventario.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});



//Consultar por id
app.get('/Api/inventarios/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Tarea(req.body);
		Inventario.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

/*
//Crear y actualizar
app.post('/Api/tareas/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log();
		var t=new Tarea(req.body);
		t.save();
		resp.send({save:"Ok"});
});

*/


//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/inventarios/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Inventario.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombreProducto=req.body.nombreProducto;
				result.lote=req.body.lote;
				result.fechaEntrada=req.body.fechaEntrada;
				result.cantidad=req.body.cantidad;
				result.descripcion=req.body.descripcion;
				result.save();
				resp.json(result);
			}
			);
		}else{
			var i=new Inventario(req.body);
			i.save();
			resp.send({saved:"Ok"});
		}
		
		
});
/*
app.get('/Api/tareas/:id', function(req, res){
	res.render({'edit-form',{id: re.id});
});

app.put('/Api/tareas/:id', function(req, res, next, id){
	tarea.update({_id: req-params.id},
	{
		nombre: req.body.nombre,
		descripcion: req.body.descripcion
	}, function(err){
		if(err) res.json(err);
		else res.redirect('/Api/tareas/:id'+req.params.id);
	})

});
*/