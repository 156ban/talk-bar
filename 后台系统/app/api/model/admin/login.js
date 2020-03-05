
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var loginSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Date,
        'default': Date.now
    },
    updateBy: String,
    updateTime: Date
});
 
 
module.exports = mongoose.model('user',loginSchema,'user');
