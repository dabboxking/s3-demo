/*eslint no-console:0 */
'use strict';

require('dotenv').config();
const express = require('express');
const config = require('./config');
const app = express();
const port = config.port;

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(require('./routes'));

var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Application listening at http://%s:%s', host, port);
});
