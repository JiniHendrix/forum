const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.redirect('/login');
})

app.get('/login', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/login.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.get('/signup', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/signup\.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.listen(port);