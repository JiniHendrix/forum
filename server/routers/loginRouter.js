const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  fs.readFile(path.join(__dirname, '../../client/login.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

router.get('/signup', (req, res) => {
  fs.readFile(path.join(__dirname, '../../client/signup.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

module.exports = router;