var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('test', { user: req.session });
  });

router.post('/', (req, res) => {
    const { password } = req.body;
  
    if (req.session.password === password) {
      // If the password matches, send a success response
      res.redirect('/final_stage')
    } else {
      // If the password does not match, send an error response
      res.render('test', {user: null})
    }
});


module.exports = router;


