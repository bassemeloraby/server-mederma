const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Description: {
      type: String,
      required: [true, "Please add a value"],
    },
    Company: {
      type: String,
      required: [true, "Please add a value"],
    },
    form: {
      type: String,
    },
    companyCategory1: {
      type: String,
    },
    companyCategory2: {
      type: String,
    },
    use1: {
      type: String,
    },
    use2: {
      type: String,
    },
    usedArea1: {
      type: String,
    },
    usedArea2: {
      type: String,
    },
    skinSenstivety: {
      type: String,
    },
    normalSkin: {
      type: String,
    },
    drySkin: {
      type: String,
    },
    oilySkin: {
      type: String,
    },
    combinationSkin: {
      type: String,
    },
    atopicSkin: {
      type: String,
    },
    acne_poreSkin: {
      type: String,
    },
    hyperpigmentedSkin: {
      type: String,
    },
    flushedSkin: {
      type: String,
    },
    price: {
      type: String,
    },
    picLink: {
      type: String,
    },
    soapFree: {
      type: String,
    },
    paraffinFree: {
      type: String,
    },
    fregranceFree: {
      type: String,
    },
    dose: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
