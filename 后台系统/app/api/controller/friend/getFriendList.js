var mongoose = require('mongoose');
var common = require('../common');
var friend = mongoose.model('friend');
var user = mongoose.model('user');

module.exports = function(req,res) {
	var params = req.query;
	var dataA;
	var IDList;
	var findID = function (param){
		return new Promise((resolve,reject)=>{
			friend.find(param, function(err,data) {
					if(err) {
						throw err;
					}
					resolve(data);
			})
		})
	}
	
	findID({IDA: params.ID})
	.then((value)=>{
		dataA = value;
		return findID({IDB: params.ID})
	})
	.then((value)=>{
		IDList=dataA.map(item=>{return {ID:item.IDB}}).concat(value.map(item=>{return {ID:item.IDA}}));
		console.log(IDList);
		if(!IDList.length) {
			return [];
		}
		return new Promise((resolve,reject)=>{
			user.find({$or: IDList}, function(err,data) {
				if(err) {
				  throw err;
				}
				resolve(data);
			})
		})
	})
	.then((data)=>{
		common.sendResponse(res, 200, 0, "获取好友列表成功",data);
	})
	.catch((err)=>{
		console.log(err);
		common.sendJsonResponse(res, 500, 0,err);
		return;
	})
	
   
}

