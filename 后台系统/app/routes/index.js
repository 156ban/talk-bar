var express = require('express');
var router = express.Router();
var user = require('../api/routes/public/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET users listing. */

router.use('/user', user);
module.exports = router