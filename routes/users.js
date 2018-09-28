var express = require('express');
const axios = require('axios');

User = require('../db/models/users');

var router = express.Router();

router.get('/', (req, res, next) => {
  res.json([]);
});

router.post('/', (req, res, next) => {
  axios
    .post('http://hackathon.guidesmiths.com:4000/api/user', {
      name: req.body.name,
    })
    .then(response => {
      const user = response.data;
      console.log({ user })
      User.create({
        name: user.name,
        displayName: user.displayName,
        apiId: user._id,
        coin: user.coin,
      }).then(u => {
        res.json({ u });
      })
    })
});

module.exports = router;
