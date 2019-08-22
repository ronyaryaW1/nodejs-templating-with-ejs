var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { page: 'Contact US', menuId:'contact' });
});

module.exports = router;