var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
  setTimeout(function(){response(res)},aleatorio());	
  
});

function response(res){
	res.send('HOLA MUNDO FINAL');
}

function aleatorio() {
	var number = Math.round((Math.random()*(5)+1)*1000);
	console.log(number);
         return number;
         }
app.listen(3000, function () {
  console.log('listening on port 3000!');
});

