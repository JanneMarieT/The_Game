var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('final_stage', { user: req.session });
});

module.exports = router;