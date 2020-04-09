var mongoose = require('mongoose');
var common = require('../common');
var message = mongoose.model('message');

module.exports = function({IDA,IDB}) {
	console.log(IDA,IDB);
	if(!IDA || !IDB) {
		io.emit("messageDetail", {code:1,msg:"参数不足",data:null});
		return;
	}
	message.find({$or: [{sender:IDA,reciever:IDB},{sender:IDB,reciever:IDA}]},
	    function(err, data){
	        if(err) {
	        	console.log(err);
	        	io.emit("messageDetail", {code:1,msg:"消息获取失败",data:null});
	        	return;
	        }
	        io.emit("messageDetail", {code:0,msg:"消息获取成功",data:{sender:IDA,reciever:IDB,data:data}});
	    })
}