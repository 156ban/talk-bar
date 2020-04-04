var mongoose = require('mongoose');
var common = require('../common');
var message = mongoose.model('message');
var user = mongoose.model('user');

module.exports = function(req,res) {
	let {ID} = req.query;
	if(!ID) {
		common.sendJsonResponse(res, 500, 1,"ID不能为空");
		return;
	}
	message.find({$or: [{sender:ID},{reciever:ID}]},   //先查一下消息列表
	    function(err, data){
	        if(err) {
	        	console.log(err);
	        	common.sendJsonResponse(res, 500, 1,err);
	        	return;
	        }
			let arr = [];
			data.forEach((item,index)=>{
				let status = true;
				arr.forEach((ele)=>{
					if(ele.ID === item.sender || ele.ID === item.reciever) {
					   ele.data = item.message;
					   status = false;
					}
				})
				if(!status) {
					return
				}
				if(ID === item.sender)
				{
					arr.push({ID:item.reciever,data:item.message,time:item.time});
				} else {
					arr.push({ID:item.sender,data:item.message,time:item.time});
				}
			})
			arr.forEach((item,index)=>{                     //在单独查一下名字
			    new Promise((resolve,reject)=>{
					user.find({ID: item.ID}, function(err,data) {
						if(err) {
							console.log(err);
							common.sendJsonResponse(res, 500, 0,err);
						}
						item = {...item,name:data[0].name} ,
						resolve(item);
					})
				}).then((value)=>{
					arr[index] = value;
					if(index == arr.length-1) {
						common.sendResponse(res, 200, 0, "详细消息列表获取成功",arr);
					}
				})
				
			})
	        
	    })
}