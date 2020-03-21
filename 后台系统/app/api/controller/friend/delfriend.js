var mongoose = require('mongoose');
var common = require('../common');
var friend = mongoose.model('friend');
var user = mongoose.model('user');

module.exports = function(req,res) {
	var params = req.query;
	var dataA;
	var IDList;
	if(!params.IDA || !params.IDB) {
		console.log("账号不能为空");
		common.sendJsonResponse(res, 500, 1,"账号不能为空");
		return;
	}
	friend.findOneAndRemove({$or: [{IDA:params.IDA,IDB:params.IDB},{IDA:params.IDB,IDB:params.IDA}]}, 
	    function(err, data){
	        if(err) {
	        	console.log(err);
	        	common.sendJsonResponse(res, 500, 0,err);
	        	return;
	        }
	        common.sendResponse(res, 200, 0, "删除成功");
	    })
	
}