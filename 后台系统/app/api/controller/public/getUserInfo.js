

var mongoose = require('mongoose');
var common = require('../common');
var user = mongoose.model('user');

module.exports = function(req,res) {
	var userData = req.query;
   user.find({ID: userData.ID}, function(err,data) {
   		if(err) {
   			console.log(err);
   			common.sendJsonResponse(res, 500, 0,err);
   			return;
   		}
   		common.sendResponse(res, 200, 0, "获取用户数据成功",data[0]);
   })
	
}