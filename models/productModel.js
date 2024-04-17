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
    sensitiveSkin: {
      type: Boolean,
    },
    normalSkin: {
      type: Boolean,
    },
    drySkin: {
      type: Boolean,
    },
    oilySkin: {
      type: Boolean,
    },
    combinationSkin: {
      type: Boolean,
    },
    atopicSkin: {
      type: Boolean,
    },
    aknePoreSkin: {
      type: Boolean,
    },
    hyperpigmentedSkin: {
      type: Boolean,
    },
    flushedSkin: {
      type: Boolean,
    },
    irritatedSkin: {
      type: Boolean,
    },
    damagedSkin: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
    picLink: {
      type: String,
    },
    soapFree: {
      type: Boolean,
    },
    paraffinFree: {
      type: Boolean,
    },
    fregranceFree: {
      type: Boolean,
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
