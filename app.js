var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require('express-session');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// session setup
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: 'hey hey'
}));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

if (typeof usersRouter.serializeUser === 'function' && typeof usersRouter.deserializeUser === 'function') {
  passport.serializeUser(usersRouter.serializeUser());
  passport.deserializeUser(usersRouter.deserializeUser());
} else {
  console.error('Error: serializeUser and deserializeUser are not defined in usersRouter.');
}

// other middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  // Log the error details to the console for debugging
  console.log('Error details:', {
    message: err.message,
    status: err.status,
    stack: err.stack
  });

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
