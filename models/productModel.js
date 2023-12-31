const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Description: {
      type: String,
      required: [true, "Please add a value"],
    },
    Strength: {
      type: String,
    },
    StrengthUnit: {
      type: String,
    },
    Company: {
      type: String,
      required: [true, "Please add a value"],
    },
    // company product type to use in links to products
    compProType: {
      type: String,
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
    // -----skin kinds-----//
    skinSensitivity: {
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
    aknePoreSkin: {
      type: String,
    },
    hyperpigmentedSkin: {
      type: String,
    },
    flushedSkin: {
      type: String,
    },
    irritatedSkin: {
      type: String,
    },
    damagedSkin: {
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
    // international Barcode
    intBarcode: {
      type: String,
    },
    intBarcode1: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
