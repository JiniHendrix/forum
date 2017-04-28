const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/forum', (req, res) => {
  fs.readFile('../../client/forum.html', (err, html) => {
    res.set({'Content-type':'text/html'}).send(html);
  });
});

module.exports = router;