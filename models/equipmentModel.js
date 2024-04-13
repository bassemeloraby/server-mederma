const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema({
  Description: {
    type: String,
    required: [true, "Please add a value"],
  },
  company: {
    type: String,
  },
  use: {
    type: String,
  },
  Price: {
    type: Number,
  },
});

module.exports = mongoose.model("equipment", equipmentSchema);
