
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var messageMode = new Schema({
	sender:String,
	reciever:String,
	message:String,
	time:String,
});
 

module.exports = mongoose.model('message',messageMode,'message');