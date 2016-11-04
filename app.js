var express       = require('express');
var app           = express();
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var ejs           = require('ejs');
var config = require('./config/index');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var blogs = require('./routes/blog');
var session = require('express-session');
//var RedisStore = require('connect-redis')(session);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
* ===========================
*             BAC
* ===========================
* */
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({resave: true, saveUninitialized: true, secret: 'SOMERANDOMSECRETHERE',duration: 30 * 60 * 1000, cookie: { maxAge: 10000 }}));


/*
 * ===========================
 *         STATIC FILE
 * ===========================
 * */
app.use(express.static(path.join(__dirname, 'public')));


/*
 * ===========================
 *     CONNECT WITH DATABASE
 * ===========================
 * */
mongoose.connect(config.database);



/*
 * ===========================
 *     CUSTOM MODULES
 * ===========================
 * */
app.use('/', routes);
app.use('/users', users);
app.use('/blog',blogs);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;