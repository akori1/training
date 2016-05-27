var express = require ('express');
var server = express();
bodyParser = require ('body-parser');

/*los que pasa aca (o sea en .use), tiene que ocurrir en este orden el alinea de ejecucion*/
server.use (express.static('public'));
server.use (bodyParser.json());
server.use (bodyParser.urlencoded({extended:true})); 

server.post('/persona', function(req,res,next) {
/*	console.log.(req.query);  /*para saber que parametro estoy recibiendo*/
	console.log ('body',req.body);
	console.log ('querystring', req.query);

	var persona = {

		'name':req.body.nombre
	};
		res.send(persona);
	});

/*esto es para q todos los archivos estaticos los busque en la carpeta public*/

/*
server.get('/', function (req,res,next){
	res.send('Server corriendo en el puerto 3000')
}
	);
*/
server.listen (3000,function() {
	console.log ('server corriendo en puerto 3000')
	}
	);

