'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;
const roverRouter = require('./routes/rover');
const visionRouter = require('./routes/vision');
const bingRouter = require('./routes/bing');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server here! listening on', PORT));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/rover', roverRouter);
app.use('/vision', visionRouter);
app.use('/bing', bingRouter);
