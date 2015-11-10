var env = process.env.NODE_ENV || 'development';
var Injector = require('easy-di');
var fs = require('fs');
var path = require('path');
var Injector = require('easy-di');

var express = require('express');
var app = express();

app.set('env', env);
var AppContainer = Injector.create('main', {
  app: app,
  Router: express.Router,
  Helpers: {},
  Controllers: {}
});

require('../config');
AppContainer.loadDir(path.resolve(__dirname,'utilities'));
AppContainer.loadDir(path.resolve(__dirname, 'helpers'));
require('./middleware');

module.exports = app;
