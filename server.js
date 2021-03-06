var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var port =process.env.port || 9000;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())
 
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



app.listen(port,function(){
	console.log("listening on port:"+ port);
});
