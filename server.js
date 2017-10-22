'use strict';

require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const config = require('nconf')
    .env({ lowerCase: true })
    .argv()
    .file('environment', { file: `./src/config/local.json` })
    .file('defaults', { file: `./src/config/default.json` });

const port = config.get('port');
const clientDirectory = config.get('clientDirectory');
const clientSideCacheDuration = config.get('clientSideCacheDuration');

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(compression()); //GZIP
app.use(jsonParser);    //Use JSON Parser as top-level middleware
app.use(urlencodedParser);

app.use('/js', express.static(`${__dirname}/${clientDirectory}/js`, { maxAge : clientSideCacheDuration }));   //7 days
app.use('/css', express.static(`${__dirname}/${clientDirectory}/css`, { maxAge : clientSideCacheDuration })); //7 days
app.use('/img', express.static(`${__dirname}/${clientDirectory}/img`, { maxAge : clientSideCacheDuration })); //7 days
app.use(express.static(`${__dirname}/${clientDirectory}`));

app.use('/', require('./src/routes/routes.js'));

app.listen(port, () => {
    console.log(`Listening on port ${port} with mode: ${config.get('environment')}`);
});
