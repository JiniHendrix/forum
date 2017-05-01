const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  title: String,
  subtitle: String,
  creatorId: Number,
  createdAt: Date,
});

module.exports = mongoose.model('Thread', threadSchema);