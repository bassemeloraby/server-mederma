const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    division: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    scientificNameOrIngredient: { type: String, required: true },
    tradeName: { type: String, required: true },
    strength: { type: String },
    strengthUnit: { type: String },
    pharmaceuticalForm: { type: String },
    administrationRoute: { type: String },
    packageType: { type: String },
    packageSize: { type: String },
    legalStatus: { type: String },
    distributeArea: { type: String },
    publicPrice: { type: Number },
    shelfLife: { type: String },
    storageConditions: { type: String },
    marketingCompany: { type: String },
    marketingCountry: { type: String },
    manufactureName: { type: String },
    manufactureCountry: { type: String },
    size: { type: String },
    sizeUnit: { type: String },
    intBarcode1: { type: String },
    intBarcode2: { type: String },
    img: {
      data: { type: Buffer },
      contentType: { type: String },
    },
    brandName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);
