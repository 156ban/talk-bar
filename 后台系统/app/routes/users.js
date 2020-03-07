var express = require('express');
var router = express.Router();
var login = require('../api/routes/public/user');
/* GET users listing. */
router.get('/login', login);

router.get('/regist', function(req, res, next) {
  res.send('这是注册');
});

router.get('/chPassword', function(req, res, next) {
  res.send('修改密码');
});

router.get('/logout', function(req, res, next) {
  res.send('注销');
});

module.exports = router;
