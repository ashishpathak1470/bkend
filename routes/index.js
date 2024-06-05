var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

// flash use kiya hai
router.get('/failed', function(req, res) {
  req.flash
});

module.exports = router;
