var express = require('express');
var router = express.Router();
var user = require('../api/routes/public/user');
var friend = require('../api/routes/public/friend');
var message = require('../api/routes/public/message');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET users listing. */

router.use('/user', user);
router.use('/friend', friend);
router.use('/message', message);
module.exports = router