module.exports	= function (server) {
	var UsersModel = function () {
			var usuarios = [ {
				name : 'pablo',
				email: 'pablo@gl.com'
			},
			{
				name: 'agustin',
				email: 'agustin@gl.com'
			},
			{
				name: 'lucas',
				email: 'lucas@gl.com'
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

		this.editUser = function (req,res,next) {
			var userId=req.params.id,
				newName =req.params.name;

				if (usuarios[userId]) {
					usuarios[userId].name = newName;
					res.send (200,usuarios[userId]);
				}else {
				res.send (404, 'Usuario no encontrado');
			}
				return next();
		};

		this.addUser = function (req,res,next) {
			var userId =req.params.id,
				newName =req.params.name,
				newMail =req.params.email;
					
			
				usuarios.push({
					name: newName,
					email: newMail
				});

				var id = usuarios.length - 1;

					res.send (200,usuarios[id]);
		
				return next();
		};


	};

var User = new UsersModel();

server.get ( {
	path: '/users/:id',
	version: '1.0.0'
	}, User.getUser );

server.post ( {
	path: '/users/:id',
	version: '1.0.0'
	}, User.editUser); 

server.put ( {
	path: '/users/',
	version: '1.0.0'
	}, User.addUser); 
};
