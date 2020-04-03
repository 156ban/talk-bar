var express = require('express');
var conSendMessage = require('../../controller/message/sendMessage');
var conGetMessageDetail = require('../../controller/message/getMessageDetail');
var conGetMessageList = require('../../controller/message/getMessageList');
var conDelMessage = require('../../controller/message/delMessage');
var router = express.Router();
/* GET users listing. */
router.get('/sendMessage',conSendMessage);
router.get('/getMessageDetail',conGetMessageDetail);
router.get('/getMessageList',conGetMessageList);
router.get('/delMessage',conDelMessage);

module.exports = router;