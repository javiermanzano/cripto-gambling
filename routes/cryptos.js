var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  const BTCRequest = axios({
    method: 'get',
    url: 'https://rest.coinapi.io/v1/exchangerate/BTC/USD',
    headers: {'X-CoinAPI-Key': '8910FE5C-E094-41E5-83A3-18AEBBDF5E46'}
  });

  const ETHRequest = axios({
    method: 'get',
    url: 'https://rest.coinapi.io/v1/exchangerate/ETH/USD',
    headers: {'X-CoinAPI-Key': '8910FE5C-E094-41E5-83A3-18AEBBDF5E46'}
  });

  const LTCRequest = axios({
    method: 'get',
    url: 'https://rest.coinapi.io/v1/exchangerate/LTC/USD',
    headers: {'X-CoinAPI-Key': '8910FE5C-E094-41E5-83A3-18AEBBDF5E46'}
  });

  const TRXRequest = axios({
    method: 'get',
    url: 'https://rest.coinapi.io/v1/exchangerate/TRX/USD',
    headers: {'X-CoinAPI-Key': '8910FE5C-E094-41E5-83A3-18AEBBDF5E46'}
  });

  Promise.all([BTCRequest,ETHRequest,LTCRequest,TRXRequest]).then(values => {
    const cryptos = values.map(v => v.data);
    res.json(cryptos);
  });
});

module.exports = router;
