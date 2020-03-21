var express = require('express');
var conFriendList = require('../../controller/friend/getFriendList');
var conAddfriend = require('../../controller/friend/addfriend');
var conDelfriend = require('../../controller/friend/delfriend');
var router = express.Router();
/* GET users listing. */
router.get('/getfriendList',conFriendList);
router.get('/addfriend',conAddfriend);
router.get('/delfriend',conDelfriend);
module.exports = router;