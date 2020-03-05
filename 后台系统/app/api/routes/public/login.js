'use strict';
var express = require('express');
var controller = require('../../controller/public/login');
var router = express.Router();
router.get('/login',controller.login);
module.exports = router;