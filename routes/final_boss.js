var express = require('express');
var router = express.Router();
//const fs = require('fs');
//const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('final_boss', { user: req.session });
});

/*
router.post('/', (req, res) => { 
  console.log("✅ Request received at /final_boss");
  console.log("Body received:", req.body); 

  const password = req.body.password;
  
  if (!password) {
      console.log("❌ No password received!");
      return res.status(400).json({ success: false, message: 'Password is required.' });
  }

  const filePath = path.join(__dirname, '..', 'public', 'text', 'rockyou.txt');
  console.log("📂 Checking if file exists:", fs.existsSync(filePath));

  // Read rockyou.txt and check if password is present
  fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
          console.error("❌ Error reading file:", err);
          return res.status(500).json({ success: false, message: 'Error reading the blacklist file.' });
      }

      const blacklist = new Set(data.split('\n').map(line => line.trim()));
      const isBlacklisted = blacklist.has(password);
      console.log(`🔍 Checking password '${password}':`, isBlacklisted);

      return res.json({ success: true, isBlacklisted });
  });
});*/



module.exports = router;