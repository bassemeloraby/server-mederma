const allProducts = require("../models/allProductsModel");

const asyncHandler = require("express-async-handler");

//1
const setProduct = asyncHandler(async (req, res) => {
 
  if (!req.body.pharmacyCategory) {
    res.status(400).json({ message: "Please add a pharmacyCategory field" });
  }
  if (!req.body.description) {
    res.status(400).json({ message: "Please add a description field" });
  }
  const product = await allProducts.create({
    pharmacyCategory: req.body.pharmacyCategory,
    description: req.body.description,
    scientificName: req.body.scientificName,
    marketingCompany: req.body.marketingCompany,
    picLink: req.body.picLink,
    publicPrice: req.body.publicPrice,
    //equipmen
    use: req.body.use,
    strength: req.body.strength,
    strengthUnit: req.body.strengthUnit,
    parts: req.body.parts,
    size: req.body.size,
    sizeUnit: req.body.sizeUnit,
    //special
    wasfaty: req.body.wasfaty,
    list: req.body.list,
    vitamine: req.body.vitamine,
  });
  res.status(200).json(product);
});
//2
const getProducts = asyncHandler(async (req, res) => {
  res.json("get all products done");
});
//3
const getOneProduct = asyncHandler(async (req, res) => {
  res.json("get one product done");
});
//4
const deleteProduct = asyncHandler(async (req, res) => {
  res.json("delete one product done");
});
//5
const updateProduct = asyncHandler(async (req, res) => {
  res.json("delete one product done");
});

module.exports = {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
