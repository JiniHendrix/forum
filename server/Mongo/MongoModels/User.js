const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  threads: [],
  comments: [],
  profilePic: Buffer,
  joinedDate: Date
});

module.exports = mongoose.model('User', userSchema);