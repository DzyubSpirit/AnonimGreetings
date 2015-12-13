var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db.js');
var passport = require('passport');
require('./config/passport.js')(passport, db);

var routes = require('./routes/index')(db);
var users = require('./routes/users');
var api = require('./routes/api')(db);
var login = require('./routes/login')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.configure(function() {
    // app.use(express.static('public'));
    // app.use(express.cookieParser());
    // app.use(express.bodyParser());
// });

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
 }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(app.router);


app.use('/', routes);
app.use('/users', users);
app.use('/api', api);
app.use('/login', login);

app.use('/loginFail', function(req, res) {
    res.end('Your login process has failed');
});

app.use('/loginSuccess', function(req, res) {
    res.end('ok');
});


// app.use('/login', passport.authenticate('local-login'));

// app.use('/login', passport.authenticate('local-login', {
//     failureFlash: false
// }));

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
