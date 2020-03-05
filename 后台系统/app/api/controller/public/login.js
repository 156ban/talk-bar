var mongoose = require('mongoose');
var common = require('../common');
var user = mongoose.model('user');
module.exports.login = function(req,res) {
    var ID = req.query.ID;
    user.find({'ID':ID},function(err,data) {
		console.log(req);
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        console.log(data);
        common.sendResponse(res, 200, data);
    })
}