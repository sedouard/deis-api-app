var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { org_name: process.env.ORGANIZATION_NAME, bg_color: process.env.BG_COLOR });
});

module.exports = router;
