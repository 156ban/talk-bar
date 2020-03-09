

var mongoose = require('mongoose');
var common = require('../common');
var user = mongoose.model('user');

module.exports = function(req,res) {
    var ID = req.query.ID;
	var password = req.query.password;
	// var userData = req.query.UserData;
	// var data = {};
	// for(let key in userData) {
	// 	if(userData[key]!="" && key!="ID") {
	// 		data[key] = userData[key]
	// 	}
	// }
	if(!ID || !password) {
		console.log("账号或密码不能为空");
		common.sendResponse(res, 500, "账号或密码不能为空");
		return;
	}
	user.findOneAndUpdate({ID: ID}, { password: password}, {new:true}, function(err,data) {
		if(err) {
			console.log(err);
			common.sendJsonResponse(res, 500, err);
			return;
		}
		common.sendResponse(res, 200, "修改成功");
   })
   // user.findOneAndUpdate({ID: userData.ID}, data, {new:true}, function(err,data) {
   // 		if(err) {
   // 			console.log(err);
   // 			common.sendJsonResponse(res, 500, err);
   // 			return;
   // 		}
   // 		common.sendResponse(res, 200, "修改成功",{msg:"修改成功",code:0,data:{}});
   // })
	
}