const mongoose = require("mongoose");

const specialArraySchema = mongoose.Schema({
  // Description: {
  //   type: String,
  //   required: [true, "Please add a value"],
  // },
  content: {
    type: Array,
  },
});

module.exports = mongoose.model("specialArray", specialArraySchema);
