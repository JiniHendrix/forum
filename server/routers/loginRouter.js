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

router.get(/css$/, (req, res) => {
  fs.readFile(path.join(__dirname, '../../client/styles.css'), (err, css) => {
    res.set({'Content-Type':'text/css'}).send(css);
  });
});

module.exports = router;