const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
// const login = require('./routers/loginRouter');
// const forum = require('./routers/forumRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => { 
  fs.readFile(path.join(__dirname, '../client/login.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.get('/signup', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/signup.html'), (err, html) => {
    res.set({'Content-Type':'text/html'}).send(html);
  });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.redirect('/forum');
});

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