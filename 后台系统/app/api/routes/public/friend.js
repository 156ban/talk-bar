var express = require('express');
var conFriendList = require('../../controller/friend/getFriendList');
var conAnalFriend = require('../../controller/friend/analFriend');
var conAddFriend = require('../../controller/friend/addFriend');
var conDelFriend = require('../../controller/friend/delFriend');
var router = express.Router();
/* GET users listing. */
router.get('/getFriendList',conFriendList);
router.get('/analFriend',conAnalFriend);
router.get('/addFriend',conAddFriend);
router.get('/delFriend',conDelFriend);
module.exports = router;