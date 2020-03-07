var mongoose = require('mongoose');
var common = require('../common');
var user = mongoose.model('user');

module.exports = function(req,res) {
    var ID = req.query.ID;
	var password = req.query.password;
	if(!ID || !password) {
		console.log("账号或密码不能为空");
		common.sendResponse(res, 500, "账号或密码不能为空");
		return;
	}
	var data = new user({ID: ID,password: password});
	data.save(function (err) {
	  if (err) return handleError(err);
	  console.log("注册成功");
	  common.sendResponse(res, 200, "注册成功");
	  // saved!
	})
	
}