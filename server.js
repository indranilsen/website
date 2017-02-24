var express = require('express');
var compression = require('compression');
var argv = require('yargs').argv;

var apiRouter = require('./src/routes/apiRoutes');

var port = argv.port || 3000;
var dist = argv.prod  ? '/dist' :'/public';

var app = express();

app.use(compression());//GZIP

var oneDay = 86400000;
app.use('/js', express.static(__dirname + dist+'/js', { maxAge : oneDay*30 }));//30 days
app.use('/css', express.static(__dirname + dist+'/css', { maxAge : oneDay*30 }));//30 days
app.use('/img', express.static(__dirname + dist+'/img', { maxAge : oneDay*30 }));//30 days
app.use(express.static(__dirname+dist));

app.use('/api', apiRouter);

app.listen(port);
console.log("Server listening on port " + port + " with mode: "+ (argv.prod ? 'PROD': 'DEV'));
