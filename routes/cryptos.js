var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  axios({
    method: 'get',
    url: 'https://api.coinmarketcap.com/v2/ticker/?convert=USD&limit=100'
  }).then(response => {
    console.log(response.data.data);
    const BTC = response.data.data[1];
    const ETH = response.data.data[1027];
    const LTC = response.data.data[2];
    const TRX = response.data.data[1958];
    res.json([
      {
        asset_id_name: 'BTC',
        rate: BTC.quotes.USD.price,
      },
      {
        asset_id_name: 'ETH',
        rate: ETH.quotes.USD.price,
      },
      {
        asset_id_name: 'TRX',
        rate: TRX.quotes.USD.price,
      },
      {
        asset_id_name: 'LTC',
        rate: LTC.quotes.USD.price,
      },
    ]);
  })
});

module.exports = router;
