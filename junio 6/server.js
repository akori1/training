var express = require('express'),
  server = express(),
  bodyParser = require('body-parser');

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 



server.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});