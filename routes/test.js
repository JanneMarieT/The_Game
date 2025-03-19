var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('test', { user: req.session });
  });

router.post('/', (req, res) => {
    const { password } = req.body;
  
    if (req.session.password === password) {
      res.redirect('/final_stage')
    } else {
        req.session.destroy((err) => {
            if (err) {
                console.error("Session destruction error:", err);
            }
            res.render('test', { user: null }); // User is now "Guest"
        });
    }
});


module.exports = router;


