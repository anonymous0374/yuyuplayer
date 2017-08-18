var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  try {    
    res.sendFile('index.html');
  } catch (err) {    
    res.send('error at player.js -->  ' + err.message);
  }
  
});

module.exports = router;
