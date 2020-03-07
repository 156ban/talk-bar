var express = require('express');
var controllerLogin = require('../../controller/public/login');
var controllerRegist = require('../../controller/public/regist');
var controllerChPassword = require('../../controller/public/chPassword');
var router = express.Router();
/* GET users listing. */
router.get('/login',controllerLogin);

router.get('/regist', controllerRegist);

router.get('/chPassword', controllerChPassword);

router.get('/logout', function(req, res, next) {
  res.send('注销');
});
module.exports = router;