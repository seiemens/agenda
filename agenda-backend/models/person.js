const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
}, { collection: 'mycustomcollectionname' });

module.exports = mongoose.model('Person', mySchema);