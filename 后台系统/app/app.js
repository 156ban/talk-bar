var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./api/model/db');
var indexRouter = require('./routes/index');
var SocketMessageDetail = require('./api/controller/message/SocketMessageDetail');
var SocketSendMessage = require('./api/controller/message/SocketSendMessage');
var app = express();
let router = express.Router();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
global.io = io;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
// io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
io.on('connection', function(socket){ // socket相关监听都要放在这个回调里
    console.log('a user connected');
 
    socket.on("disconnect", function() {
        console.log("a user go out");
    });
    io.emit('msg', { will: 'be received by everyone'});
    socket.on("msg", function(obj) {
        //延迟3s返回信息给客户端
		console.log('收到客户端消息')
        setTimeout(function(){
            console.log('the websokcet message is'+obj);
            io.emit("msg", obj);
        },3000);
    });
	socket.on("messageDetail", SocketMessageDetail);
	socket.on("sendMessage", SocketSendMessage);
});
server.listen(8080, () => console.log('Example app listening on port 8080!'))
module.exports = app;
