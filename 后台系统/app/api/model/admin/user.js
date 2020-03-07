
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var loginSchema = new Schema({
    ID: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
 

module.exports = mongoose.model('user',loginSchema,'user');
