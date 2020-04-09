var mongoose = require('mongoose');
var common = require('../common');
var Message = mongoose.model('message');
var SocketMessageDetail = require('./SocketMessageDetail');
module.exports = function({sender,reciever,message,time}) {
	if(!sender || !reciever || !message || !time) {
		console.log("出错了");
		io.emit("sendMessage", {code:1,msg:"参数不足",data:null});
		return;
	}
	var data = new Message({sender: sender,reciever: reciever,message: message,time: time});
	data.save(function (err) {
	  if(err) {
	  	io.emit("sendMessage", {code:1,msg:err,data:null});
	  	return;
	  }
	  SocketMessageDetail({IDA:sender,IDB:reciever});
	})
}