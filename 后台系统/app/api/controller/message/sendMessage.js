var mongoose = require('mongoose');
var common = require('../common');
var message = mongoose.model('message');

module.exports = function(req,res) {
	var params = req.query;
	if(!params.sender || !params.reciever || !params.message || !params.time) {
		console.log("出错了");
		common.sendJsonResponse(res, 500, 0,"参数不足");
		return;
	}
	var data = new message({sender: params.sender,reciever: params.reciever,message: params.message,time: params.time});
	data.save(function (err) {
	  if(err) {
	  	common.sendJsonResponse(res, 500, 0,err);
	  	return;
	  }
	  common.sendResponse(res, 200, 0, "消息发送成功");
	  // saved!
	})
}