var express = require ('express');
var server = express();

server.use (express.static('public'));
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

