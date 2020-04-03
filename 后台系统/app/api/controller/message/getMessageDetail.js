var mongoose = require('mongoose');
var common = require('../common');
var message = mongoose.model('message');

module.exports = function(req,res) {
	var params = req.query;
	if(!params.IDA || !params.IDB) {
		common.sendJsonResponse(res, 500, 1,"参数不足");
		return;
	}
	message.find({$or: [{sender:params.IDA,reciever:params.IDB},{sender:params.IDB,reciever:params.IDA}]},
	    function(err, data){
	        if(err) {
	        	console.log(err);
	        	common.sendJsonResponse(res, 500, 1,err);
	        	return;
	        }
			console.log(data);
	        common.sendResponse(res, 200, 0, "详细消息列表获取成功",data);
	    })
}