var express = require('express');
var controllerLogin = require('../../controller/public/login');
var controllerLogout = require('../../controller/public/logout');
var controllerRegist = require('../../controller/public/regist');
var controllerChUserInfo = require('../../controller/public/chUserInfo');
var controllerGetUserInfo = require('../../controller/public/getUserInfo');
var router = express.Router();
/* GET users listing. */
router.get('/login',controllerLogin);

router.get('/regist', controllerRegist);

router.get('/ChUserInfo', controllerChUserInfo);

router.get('/getUserInfo', controllerGetUserInfo);

router.get('/logout', controllerLogout);
module.exports = router;