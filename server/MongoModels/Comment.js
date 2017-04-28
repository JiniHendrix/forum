const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  creatorId: Number,
  message: String,
  createdAt: Date,
  editedAt: Date,
  edited: Boolean
});

module.exports = mongoose.model('Comment', commentSchema);