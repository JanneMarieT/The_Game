var express = require('express');
var router = express.Router();

// Route to handle home page (GET /)
router.get('/', function(req, res, next) {
  res.render('index', { user: req.session });
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  req.session.username = username;
  req.session.password = password;
  res.redirect('/test'); 
});

module.exports = router;

