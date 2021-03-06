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
		common.sendJsonResponse(res, 500, 0,"账号不能为空");
		return;
	}
	var addFriend = function(IDA,IDB) {
		if(IDA>=IDB) {
			var data = new friend({IDA: IDA,IDB: IDB});
		} else {
			var data = new friend({IDA: IDB,IDB: IDA});
		}
		data.save(function (err) {
		  if (err) return handleError(err);
		  common.sendResponse(res, 200, 0, "好友添加成功");
		  // saved!
		})
	}
	
	friend.find({$or: [{IDA:params.IDA,IDB:params.IDB},{IDA:params.IDB,IDB:params.IDA}]}, 
	   function(err,data) {
		if(err) {
			console.log(err);
			common.sendJsonResponse(res, 500, 0,err);
			return;
		}
		console.log(123,params);
		if(data.length) {
			common.sendResponse(res, 200, 1, "已经是好友");
			return;
		}
		addFriend(params.IDA,params.IDB);
	})
}