const mongoose = require('mongoose');

const allDrugsSchema = mongoose.Schema(
  {
    ScientificName: String,
  },
  {
    TradeName: String,
  }
);

module.exports = mongoose.model('allDrugs', allDrugsSchema);