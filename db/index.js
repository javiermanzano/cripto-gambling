const mongoose = require('mongoose');
mongoose.connect('mongodb://cryptouser:cryptopassword0@ds115523.mlab.com:15523/cryptofighters', { useNewUrlParser: true });

require('./models/users');