
var express = require('express');

var app = express();
var http = require ('http')
fs = require('fs');
app.get('/',function (request,response){
	
	response.send('Hello world');
});

app.get('/about',function (req,res){
	res.send("<h1> MY NAME IS MEGAN <h1>");
})

app.get('/twitter', function (req, res) {
	res.send('@megsmelusk');
})
app.listen(3020, function () {
	
  	console.log('Listening on port 3020!');
});

app.post('/something',function (req, res) {
	res.send('Post resquest to the homepage');
});

app.get('/news', function (request,response){
	res.send('https://news.google.com/');
});

app.get('/who/:name?', function (req, res) {
	var name = req.params.name;
	res.send(name + ' was here');
});

app.get('/who/:name?', function (req, res) {
	var name = req.params.name;
	res.send(name + ' is the best');
});


