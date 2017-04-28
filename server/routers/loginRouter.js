const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('/')
  res.redirect('/login');
});

router.get('/login', (req, res) => { console.log('login')
  fs.readFile(path.join(__dirname, '../../client/login.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

router.get('/signup', (req, res) => {
  fs.readFile(path.join(__dirname, '../../client/signup.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

router.post('/signup', (req, res) => {
  console.log('hello'); 
  res.redirect('/forum');
});

module.exports = router;