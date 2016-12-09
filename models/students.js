var mongoose = require('mongoose');

var StuDat = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  slack: { type: String, required: true }
});

var model = mongoose.model('student', StuDat);
module.exports = model;
