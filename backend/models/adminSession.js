import { Mongoose } from "mongoose";

const mongoose = require("mongoose");

const adminSessionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("UserSession", adminSessionSchema);
