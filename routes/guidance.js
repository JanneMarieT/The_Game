var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guidance', { user: req.session });
});

router.post('/', (req, res) => {
  res.render('guidance',  { user: null });
});

module.exports = router;