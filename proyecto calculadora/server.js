var express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),
  personas = [{
    id:1,
    nombre: 'persona1',
    edad: 22,
    email: 'per1@gmail.com'
  },
  {
    id:2,
    nombre: 'persona2',
    edad: 23,
    email: 'per2@gmail.com'
  },
  {
    id:3,
    nombre: 'persona3',
    edad: 24,
    email: 'per3@gmail.com'
  },
  {
    id:4,
    nombre: 'persona4',
    edad: 43,
    email: 'per4@gmail.com'
  },
  {
    id:5,
    nombre: 'persona5',
    edad: 24,
    email: 'per5@gmail.com'
  }

  ];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// liste de todas las personas
server.get('/persona', function (req,res,next){

  res.send (200, personas);
  return next();
});

function buscarPersona(userId) {
  var
    i=0,
    tam = personas.length;
      
    while( (i < tam )  && !(personas[i].id == userId) ) {
       i++;
      }

      if(i < tam) {
      return personas[i];
      }else
      return (false);
}


//detalle de una persona
server.get('/persona/:id', function (req,res,next){
  var userId = req.params.id,
  newPersona = buscarPersona(userId);

  if (newPersona) {
    res.send (200, newPersona);
  }else{
    res.send (404, 'Usuario no encontrado');
  }
  return next ();
});



server.post('/persona', function(req, res, next){
  var 
    id,
    personaData = {
      id: '',
      nombre: req.body.nombre,
      edad: req.body.edad,
      email: req.body.email
  };

  newId = personas.length;
  newId = personas[newId-1].id + 1;
  personaData.id = newId ;
  //console.log(req.body);
  personas.push(personaData);
  res.send(200,"Se agregó la persona correctamente");
  return next();
});




server.delete ('/persona/:id', function (req,res,next) {
  var newId = req.params.id,
      i=0,
      tam = personas.length;


      while( (i < tam )  && !(personas[i].id == newId) ) {
             i++;
            }

      if(i < tam) {
        delete personas[i];
        res.send (200, 'Usuario eliminado.');
        personas = personas.filter( function(persona) { return !!persona; });
        }else{                                          // que hace true el "undefined" y el "null" con un solo !
          res.send(404, 'El id no existe, no se puede eliminar.');
        }
      return next();
});


server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});