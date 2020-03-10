
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userData = new Schema({
    ID: {
        type: String,
    },
    password: {
        type: String,
    },
	province:String,
	xingZuo:String,
	province:String,
	city:String,
	name:String,
	age:String,
	saying:String,
	sex:String,
});
 

module.exports = mongoose.model('user',userData,'user');
