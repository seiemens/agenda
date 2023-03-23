const mongoose = require('mongoose');


const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
},  { collection: 'meeting' });

module.exports = mongoose.model('Meeting', meetingSchema);