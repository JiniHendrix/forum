const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const models = {};
models.User = require('./User');
models.Thread = require('./Thread');
models.Comment = require('./Comment');

module.exports = models;