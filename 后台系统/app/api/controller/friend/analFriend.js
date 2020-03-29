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
	friend.find({$or: [{IDA:params.IDA,IDB:params.IDB},{IDA:params.IDB,IDB:params.IDA}]}, 
	   function(err,data) {
		if(err) {
			console.log(err);
			common.sendJsonResponse(res, 500, 1,err);
			return;
		}
		console.log(123,params);
		if(data.length) {
			common.sendResponse(res, 200, 0, "已经是好友",{status:true});
			return;
		}
		common.sendResponse(res, 200, 0, "不是好友",{status:false});
	})
}