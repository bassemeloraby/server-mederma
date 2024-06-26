const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Get products
// @route   GET /api/products
// @access  private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ Description: 1 });
  res.status(200).json(products);
});

// @desc    Set product
// @route   POST /api/products
// @access  puplic
const setProduct = asyncHandler(async (req, res) => {
  if (req.body.email !== "bassem@bassem.com") {
    res.status(400).json({ message: "you are not user" });
  }
  if (!req.body.Description) {
    res.status(400).json({ message: "Please add Description " });
  }
  const product = await Product.create({
    Description: req.body.Description,
    Strength: req.body.Strength,
    StrengthUnit: req.body.StrengthUnit,
    Company: req.body.Company,
    compProType: req.body.compProType,
    form: req.body.form,
    companyCategory1: req.body.companyCategory1,
    companyCategory2: req.body.companyCategory2,
    use1: req.body.use1,
    use2: req.body.use2,
    usedArea1: req.body.usedArea1,
    usedArea2: req.body.usedArea2,
    sensitiveSkin: req.body.sensitiveSkin,
    normalSkin: req.body.normalSkin,
    drySkin: req.body.drySkin,
    oilySkin: req.body.oilySkin,
    combinationSkin: req.body.combinationSkin,
    atopicSkin: req.body.atopicSkin,
    aknePoreSkin: req.body.aknePoreSkin,
    hyperpigmentedSkin: req.body.hyperpigmentedSkin,
    flushedSkin: req.body.flushedSkin,
    irritatedSkin: req.body.irritatedSkin,
    damagedSkin: req.body.damagedSkin,
    price: req.body.price,
    picLink: req.body.picLink,
    soapFree: req.body.soapFree,
    paraffinFree: req.body.paraffinFree,
    fregranceFree: req.body.fregranceFree,
    dose: req.body.dose,
    intBarcode: req.body.intBarcode,
    intBarcode1: req.body.intBarcode1,
  });
  res.status(200).json(product);
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  await product.deleteOne();
  res.status(200).json({ id: req.params.id });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});

module.exports = {
  getProducts,
  setProduct,
  deleteProduct,
  updateProduct,
};
