var mongoose = require('mongoose');
var common = require('../common');
var message = mongoose.model('message');

module.exports = function(req,res) {
	var params = req.query;
	if(!params.messageID) {
		console.log("messageID不能为空");
		common.sendJsonResponse(res, 500, 1,"messageID不能为空");
		return;
	}
	message.findOneAndRemove({_id:params.messageID}, 
	    function(err, data){
	        if(err) {
	        	console.log(err);
	        	common.sendJsonResponse(res, 500, 1,err);
	        	return;
	        }
			console.log(data);
	        common.sendResponse(res, 200, 0, "删除成功");
	    })
	
}