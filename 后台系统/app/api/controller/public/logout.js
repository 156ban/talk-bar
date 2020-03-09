var mongoose = require('mongoose');
var common = require('../common');
var user = mongoose.model('user');

module.exports = function(req,res) {
    var ID = req.query.ID;
	// var password = req.query.password;
	if(!ID) {
		console.log("账号不能为空");
		common.sendResponse(res, 500, "账号不能为空");
		return;
	}
    user.find({'ID':ID},function(err,data) {
		// console.log(req);
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
		if(!data.length) {
			console.log(data);
			console.log("查无此人");
			common.sendResponse(res, 200, "查无此人");
		} else {
			if(data[0].password==password)
			{
				console.log(data);
				common.sendResponse(res, 200, "欢迎您,"+data[0].name);
			} else {
				console.log(data);
				common.sendResponse(res, 200, "密码错误");
			}
		}
    })
	
}