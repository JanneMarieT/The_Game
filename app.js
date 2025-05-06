var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var intro = require('./routes/intro');
var about = require('./routes/about');
var guidance = require('./routes/guidance');
var test = require('./routes/test');
var final_stage = require('./routes/final_stage');
var final_boss = require('./routes/final_boss');
var safe = require('./routes/safe');
var pwnd = require('./routes/pwnd');
var admin = require('./routes/admin');

var app = express();
var session = require('express-session');
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  secret: 'keyboard cat', 
  resave: false,
  saveUninitialized: true
}));


app.use('/', intro);
app.use('/index', index);
app.use('/users', users);
app.use('/about', about);
app.use('/guidance', guidance);
app.use('/test', test);
app.use('/final_stage', final_stage);
app.use('/final_boss', final_boss);
app.use('/safe', safe);
app.use('/pwnd', pwnd);
app.use('/admin', admin);

const bcrypt = require("bcryptjs");

app.post("/hash-password", async (req, res) => {
    const { password } = req.body;
    
    // Hash the password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    res.json({ hashedPassword });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
