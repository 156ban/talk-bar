
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var friend = new Schema({
    IDA:String,
	IDB:String
});
 

module.exports = mongoose.model('friend',friend,'friend');