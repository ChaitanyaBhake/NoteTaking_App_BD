const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
});

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },

  notes: [noteSchema],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
