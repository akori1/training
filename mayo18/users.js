module.exports	= function (server) {
	var UsersModel = function () {
			var usuarios = [ {
				name : 'pablo',
				email: 'pablo@gl.com',
				comment: 'comentario pablo'
			},
			{
				name: 'agustin',
				email: 'agustin@gl.com',
				comment: 'comentario agustin'
			},
			{
				name: 'lucas',
				email: 'lucas@gl.com',
				comment: 'comentario lucas'
			}
			]
		this.getUser = function (req,res,next) {
			var userId = req.params.id;


			if (usuarios[userId]) {
				res.send (200, usuarios[userId]);

				
			}else {
				res.send (404, 'Usuario no encontrado');
			}

				
			return next ();
		};

		this.getUserParametro	 = function (req,res,next) {
			var userId = req.params.id,
				newParametro =req.params.parametro;

			if (usuarios[userId]) {
				res.send (200, usuarios[userId][newParametro]);
			}else {
				res.send (404, 'Usuario no encontrado');
			}
				return next();
		};

		this.getUserAll = function (req,res,next) {
			
			res.send (200, usuarios);
			return next();
			};


		this.addUser = function (req,res,next) {
			var newName =req.params.name,
				newEmail =req.params.email,
				newComment =req.params.comment;
				id = usuarios.length;

				usuarios.push({
					name: newName,
					email: newEmail,
					comment: newComment
				});
				
				res.send (200, 'El usuario ' +usuarios[id].name + ' fue agregado correctamente. Su email es ' +usuarios[id].email + ' y su comentario es ' + usuarios[id].comment );
				return next();
		};


		this.editUser = function (req,res,next) {
			var userId=req.params.id,
				newParametro = req.params.parametro,
				newDato =req.params.dato;

				if (usuarios[userId]) {
					if (newParametro=='name') {
					usuarios[userId].name = newDato;
					res.send (200,'Nombre modificado correctamente ');
					} 
					if (newParametro=='email') {
					usuarios[userId].email = newDato;
					res.send (200, 'Email modificado correctamente ');
					}
					if (newParametro=='comment') {
					usuarios[userId].comment = newDato;
					res.send (200, 'Comentario modificado correctamente ');
					}




				}else {
				res.send (404, 'Usuario no encontrado');
			}
				return next();
		};


		this.deleteUser = function (req, res, next){
		   var userId = req.params.id;

		   if(usuarios[userId]){
			    delete usuarios[userId];
			    res.send (200, 'Usuario eliminado.');
		   
			    usuarios = usuarios.filter( function(user) { return !!user; });  // al usar delete, deja el espacio 
		   }                  													  // en undefined. Con el filter, filtro con "!!"
		   else{              												    // que hace true el "undefined" y el "null" con un solo !
		    res.send(404, 'El usuario no existe, no se puede eliminar.');
		   }
		   return next();
		  };




	};

var User = new UsersModel();


server.get ( {
	path: '/users/:id',
	version: '1.0.0'
	}, User.getUser );

/*Muestra usuarios con get y el id*/


server.get ( {
	path: '/users/:id/:parametro',
	version: '1.0.0'
	}, User.getUserParametro );

/*Muestra alguno de los campos de un usuaio q se le pase en el id.*/

server.get ( {
	path: '/users/',
	version: '1.0.0'
	}, User.getUserAll );

/*Muestra todos los usuarios con get*/

server.put ( {
	path: '/users/:name:email:comment',
	version: '1.0.0'
	}, User.addUser); 

/*Agrega usuarios con put, enviar nombre, email, y comentario*/

server.post ( {
	path: '/users/:id:parametro:dato',
	version: '1.0.0'
	}, User.editUser); 

/*Modifica el algun dato con post. Enviar en el id, cual usuario se quiere modificar, en parametro (name, email, comment), en dato el contenido del parametro a modificar*/


 server.del({
  path: '/users/:id',
  version: '1.0.0'
 }, User.deleteUser);
/*Eliminar 1 Usuario */


};
