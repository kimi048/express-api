var express = require('express');

var router = express.Router();

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));
router.get('/',function(req,res){
  res.json({
    message:"Hello kimikimi!"
  });
});

module.exports = router;