var express = require('express');
var router = express.Router();

router.get('/detail', function(req, res, next) {
  res.render('front/package/detail');
});

module.exports = router;