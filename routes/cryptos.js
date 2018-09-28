var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    ethereum: 0.002,
    litecoin: 0.001,
    bitcoin: -0.001,
  });
});

module.exports = router;
