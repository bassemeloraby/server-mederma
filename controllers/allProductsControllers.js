const allProducts = require("../models/allProductsModel");

const asyncHandler = require("express-async-handler");

//1
// @desc    Set product
// @route   POST /api/allProducts
// @access  public
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.productType) {
    res.status(400).json({ message: "Please add a productType field" });
  }
  if (!req.body.description) {
    res.status(400).json({ message: "Please add a description field" });
  }
  const product = await allProducts.create({
    productType: req.body.productType,
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
    drySkin: req.body.drySkin,
    sensitiveSkin: req.body.sensitiveSkin,
    normalSkin: req.body.normalSkin,
    oilySkin: req.body.oilySkin,
    combinationSkin: req.body.combinationSkin,
    atopicSkin: req.body.atopicSkin,
    aknePoreSkin: req.body.aknePoreSkin,
    hyperpigmentedSkin: req.body.hyperpigmentedSkin,
    flushedSkin: req.body.flushedSkin,
    irritatedSkin: req.body.irritatedSkin,
    damagedSkin: req.body.damagedSkin,
  });
  res.status(200).json(product);
});

//2
// @desc    Get getProducts
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  if (
    req.query.description ||
    req.query.scientificName ||
    req.query.marketingCompany ||
    req.query.wasfaty === "true" ||
    req.query.drySkin === "true" ||
    req.query.sensitiveSkin === "true" ||
    req.query.normalSkin === "true" ||
    req.query.oilySkin === "true" ||
    req.query.combinationSkin === "true"
  ) {
    let products = await allProducts.find({}, {}).sort({ description: 1 });
    if (req.query.description) {
      products = products.filter(
        (f) => f.description === req.query.description
      );
    }
    if (req.query.productType) {
      products = products.filter(
        (f) => f.productType === req.query.productType
      );
    }
    if (req.query.scientificName) {
      products = products.filter(
        (f) => f.scientificName === req.query.scientificName
      );
    }
    if (req.query.marketingCompany) {
      products = products.filter(
        (f) => f.marketingCompany === req.query.marketingCompany
      );
    }
    if (req.query.wasfaty === "true") {
      products = products.filter((f) => f.wasfaty === true);
    }
    if (req.query.drySkin === "true") {
      products = products.filter((f) => f.drySkin === true);
    }
    if (req.query.sensitiveSkin === "true") {
      products = products.filter((f) => f.sensitiveSkin === true);
    }
    if (req.query.normalSkin === "true") {
      products = products.filter((f) => f.normalSkin === true);
    }
    if (req.query.oilySkin === "true") {
      products = products.filter((f) => f.oilySkin === true);
    }
    if (req.query.combinationSkin === "true") {
      products = products.filter((f) => f.combinationSkin === true);
    }
    res.status(200).json(products);
    console.log("filter", products.length);
  } else {
    let products = await allProducts
      .find(
        {},
        {
          productType: 1,
          description: 1,
          scientificName: 1,
          publicPrice: 1,
          picLink: 1,
          strength: 1,
          strengthUnit: 1,
          parts: 1,
          marketingCompany: 1,
        }
      )
      .sort({ description: 1 });
    res.status(200).json(products);
    console.log("all", products.length);
  }
});
//-------------test end-----------//

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
// @desc    Update product
// @route   patch /api/allProducts/:id
// @access  public
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

//6
const filterProducts = asyncHandler(async (req, res) => {
  res.status(200).json("filter done");
});

module.exports = {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  filterProducts,
};
