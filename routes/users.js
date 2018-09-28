var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json([]);
});

router.post('/', (req, res, next) => {
  res.json({user: 'new User'});
});

module.exports = router;
