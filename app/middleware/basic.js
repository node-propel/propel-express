var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

function loadBasicSettings(app) {
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  //app.use(express.static(path.join(__dirname, 'public')));
}

var middleware = {
  load: function(app, cb) {
    loadBasicSettings(app);
    if (cb) cb();
  }
};

module.exports = function() {
  return Object.create(middleware);
};
