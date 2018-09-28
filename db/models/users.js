const mongoose = require('mongoose');

var User = mongoose.model(
  'User',
  {
    name: String,
    wallet: Number,
  }
);

User.find({}).then(users => {
  console.log({ users })
});
