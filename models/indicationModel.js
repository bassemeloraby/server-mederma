const mongoose = require('mongoose');

const indicationSchema = mongoose.Schema(
  {
    INDICATION: String,
  },
  {
    ICD_10_CODE: String,
  }
);

module.exports = mongoose.model('indication', indicationSchema);