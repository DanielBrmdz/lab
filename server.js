var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
  setTimeout(function(){response(res)},3000);	
  
});

function response(res){
	res.send('NUEVO HOLA MUNDO...');
}

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

