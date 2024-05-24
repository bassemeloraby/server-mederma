const mongoose = require("mongoose");

const specialArraySchema = mongoose.Schema({
  Description: {
    type: String,
    required: [true, "Please add a Description"],
  },
  content: {
    type: Array,
    required: [true, "Please add a content"],
  },
});

module.exports = mongoose.model("specialArray", specialArraySchema);
