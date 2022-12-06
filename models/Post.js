const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lastN: { 
    type: String, 
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  dob: { 
    type: String, 
    required: true,
  },
  call: { 
    type: String, 
    required: false, 
  },
  time: { 
    type: String, 
    required: false, 
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  cell: { 
    type:Number, 
    required: true, 
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Post", PostSchema);
