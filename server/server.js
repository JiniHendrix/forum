const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const userCtrl = require('./MongoControllers/UserController');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => { 
  fs.readFile(path.join(__dirname, '../client/login.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.post('/login', userCtrl.login);

app.get('/signup', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/signup.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.post('/signup', userCtrl.createUser);

app.get('/forum', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/forum.html'), (err, html) => {
    res.set({'Content-type':'text/html'}).send(html);
  });
});

app.get(/css$/, (req, res) => {
  fs.readFile(path.join(__dirname, '../client/styles.css'), (err, css) => {
    res.set({'Content-Type':'text/css'}).send(css);
  });
});

app.listen(port);