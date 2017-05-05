const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const dotenv = require('dotenv');
const argv = require('yargs').argv;

const apiRouter = require('./src/routes/apiRoutes');

let port = argv.port || 3000;
let dist = argv.prod  ? '/public/dist' :'/public';

dotenv.load();

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(compression());//GZIP
app.use(jsonParser);//Use JSON Parser as top-level middleware

const ONE_DAY = 86400000;
app.use('/js', express.static(__dirname + dist+'/js', { maxAge : ONE_DAY*30 }));//30 days
app.use('/css', express.static(__dirname + dist+'/css', { maxAge : ONE_DAY*30 }));//30 days
app.use('/img', express.static(__dirname + dist+'/img', { maxAge : ONE_DAY*30 }));//30 days
app.use(express.static(__dirname+dist));

app.use('/api', apiRouter);

app.listen(port);
console.log("Server listening on port " + port + " with mode: "+ (argv.prod ? 'PROD': 'DEV'));
