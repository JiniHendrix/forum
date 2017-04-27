const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.port || 3000;

app.get('/login', (req, res) => {
  fs.readFile('./login.html', (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.get('/signup', (req, res) => {
  fs.readFile('./signup.html', (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.listen(port);