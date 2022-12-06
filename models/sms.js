const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Messages', MessagesSchema);