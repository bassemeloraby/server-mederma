const mongoose = require("mongoose");

const allProductsSchema = mongoose.Schema(
  {
    productType: {
      type: String,
      required: [true, "Please add a value"],
    },
    description: {
      type: String,
      required: [true, "Please add a value"],
    },
    scientificName: {
      type: String,
      // required: [true, "Please add a value"],
    },
    marketingCompany: {
      type: String,
    },
    publicPrice: {
      type: Number,
    },
    //equipmen
    use: {
      type: String,
    },
    //beuty
    use1: {
      type: String,
    },
    picLink: {
      type: String,
    },
    strength: {
      type: String,
    },
    strengthUnit: {
      type: String,
    },
    parts: {
      type: Number,
    },
    size: {
      type: Number,
    },
    sizeUnit: {
      type: String,
    },
    //special
    wasfaty: {
      type: Boolean,
    },
    list: {
      type: Boolean,
    },
    vitamine: {
      type: Boolean,
    },
    //beauty
   
    companyCategory1: {
      type: String,
    },
    companyCategory2: {
      type: String,
    },
    compProType: {
      type: String,
    },
    usedArea1: {
      type: String,
    },
    usedArea2: {
      type: String,
    },
    // -----skin kinds-----//
    drySkin: {
      type: Boolean,
    },
    sensitiveSkin: {
      type: Boolean,
    },
    normalSkin: {
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
    soapFree: {
      type: Boolean,
    },
    paraffinFree: {
      type: Boolean,
    },
    fregranceFree: {
      type: Boolean,
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

module.exports = mongoose.model("allProducts", allProductsSchema);
