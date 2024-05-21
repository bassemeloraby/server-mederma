const allProducts = require("../models/allProductsModel");

const asyncHandler = require("express-async-handler");

//1
// @desc    Set product
// @route   POST /api/allProducts
// @access  public
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
// @desc    Get getProducts
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  const products = await allProducts
    .find(
      {},
      {
        pharmacyCategory: 1,
        description: 1,
        scientificName: 1,
        publicPrice: 1,
        picLink: 1,
      }
    )
    .sort({ description: 1 });
  res.status(200).json(products);
});

//3
// @desc    Get one product
// @route   GET /api/allProducts/:id
// @access  public
const getOneProduct = asyncHandler(async (req, res) => {
  // const product = await allProducts.find({ _id: req.params.id });
  const product = await allProducts.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "not found" });
  } else {
    res.status(200).json(product);
  }
});

//4
// @desc    Delete product
// @route   DELETE /api/allProducts/:id
// @access  public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await allProducts.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "not found" });
  } else {
    await product.deleteOne();
    res.status(200).json({ message: "product deleted" });
  }
});
//5
const updateProduct = asyncHandler(async (req, res) => {
  const product = await allProducts.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "not found" });
  } else {
    const updatedProduct = await allProducts.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  }
});

module.exports = {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
