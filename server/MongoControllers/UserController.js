const mongoose = require('mongoose');
const User = require('../MongoModels/main').User;

const userCtrl = {};

userCtrl.createUser = (req, res) => {
  if(!req.body.username) {
    res.set(401).send('username');
  } else if(!req.body.password) {
    res.set(401).send('password');
  } else {
    User.create({
      username: req.body.username,
      password: req.body.password,
      joinedDate: Date.now()
    }, (err, user) => {
      res.redirect('/forum');
    });
  }
}

userCtrl.login = (req, res) => {
  User.findOne({
    username: req.body.username
  }, 'username password', (err, user) => {
    if (!user) return res.set(401).send('username');
    else if (user.password !== req.body.password) return res.set(401).send('password');

    res.send('success');
  });
}

module.exports = userCtrl;