var express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),
  personas = [];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

server.post('/persona', function(req, res, next){
 if(req.body.nombre === 'marcelo'){
     return res.send({
       esMarcelo:true
     });
   }
    
  var persona = {
    'name':req.body.nombre
  };  
   res.send(persona);
});

server.post('/login', function(req, res, next){
  var username = req.body.username,
    password = req.body.password,
    respuesta = {
      ok: false
    };
    
    if(username === 'marcelo' && password === '123123'){
      respuesta.ok = true;
    }
    
    res.send(respuesta);
});

server.get('/persona/:indice', function(req, res, next){
  var personaADevolver = personas[req.params.indice];  
  res.send(personaADevolver);
});



server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});