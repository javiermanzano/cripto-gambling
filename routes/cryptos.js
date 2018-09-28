var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  axios({
    method: 'get',
    url: 'https://api.coinmarketcap.com/v2/ticker/?convert=USD&limit=100'
  }).then(response => {
    console.log(response.data.data);
    const deviation = Math.random() /1000;
    const BTC = response.data.data[1];
    if (Math.random() > 0.5) {
      response.data.data[1].quotes.USD.price = response.data.data[1].quotes.USD.price + deviation;
    } else {
      response.data.data[1].quotes.USD.price = response.data.data[1].quotes.USD.price - deviation;
    }
    const ETH = response.data.data[1027];
    if (Math.random() > 0.5) {
      response.data.data[1027].quotes.USD.price = response.data.data[1].quotes.USD.price + deviation;
    } else {
      response.data.data[1027].quotes.USD.price = response.data.data[1].quotes.USD.price - deviation;
    }
    const LTC = response.data.data[2];
    if (Math.random() > 0.5) {
      response.data.data[2].quotes.USD.price = response.data.data[1].quotes.USD.price + deviation;
    } else {
      response.data.data[2].quotes.USD.price = response.data.data[1].quotes.USD.price - deviation;
    }
    const TRX = response.data.data[1958];
    if (Math.random() > 0.5) {
      response.data.data[1958].quotes.USD.price = response.data.data[1].quotes.USD.price + deviation;
    } else {
      response.data.data[1958].quotes.USD.price = response.data.data[1].quotes.USD.price - deviation;
    }
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

