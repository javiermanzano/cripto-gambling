const mongoose = require('mongoose');

var User = mongoose.model(
  'User',
  {
    name: String,
    apiId: mongoose.Schema.Types.ObjectId,
    displayName: String, 
    coin: Number,
  }
);

User.find({}).then(users => {
  console.log({ users })
});

module.exports = User;
