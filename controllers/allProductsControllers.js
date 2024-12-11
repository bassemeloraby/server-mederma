const allProducts = require("../models/allProductsModel");

const asyncHandler = require("express-async-handler");

var fs = require("fs");
var path = require("path");

//1
// @desc    Set product
// @route   POST /api/allProducts
// @access  public
const setProduct = asyncHandler(async (req, res) => {
  console.log(req.file);

  if (!req.body.productType) {
    res.status(400).json({ message: "Please add a productType field" });
    return;
  }
  if (!req.body.description) {
    res.status(400).json({ message: "Please add a description field" });
    return;
  }

  const productData = {
    productType: req.body.productType,
    description: req.body.description,
    scientificName: req.body.scientificName,
    marketingCompany: req.body.marketingCompany,
    picLink: req.body.picLink,
    publicPrice: req.body.publicPrice,
    use: req.body.use,
    dose: req.body.dose,
    strength: req.body.strength,
    strengthUnit: req.body.strengthUnit,
    parts: req.body.parts,
    size: req.body.size,
    sizeUnit: req.body.sizeUnit,
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
  };

  if (req.file) {
    productData.img = {
      data: fs.readFileSync(
        path.join(__dirname, "../uploads", req.file.filename)
      ),
      contentType: "image/png",
    };
  }

  const product = await allProducts.create(productData);

  if (req.file) {
    fs.unlinkSync(path.join(__dirname, "../uploads", req.file.filename));
  }

  res.status(200).json(product);
});

//2
// @desc    Get getProducts
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  if (
    req.query.description ||
    req.query.productType ||
    req.query.scientificName ||
    req.query.marketingCompany ||
    req.query.use ||
    req.query.use1 ||
    req.query.wasfaty === "true" ||
    req.query.drySkin === "true" ||
    req.query.sensitiveSkin === "true" ||
    req.query.normalSkin === "true" ||
    req.query.oilySkin === "true" ||
    req.query.combinationSkin === "true" ||
    req.query.atopicSkin === "true" ||
    req.query.aknePoreSkin === "true" ||
    req.query.hyperpigmentedSkin === "true" ||
    req.query.flushedSkin === "true" ||
    req.query.irritatedSkin === "true" ||
    req.query.damagedSkin === "true" ||
    req.query.soapFree === "true" ||
    req.query.paraffinFree === "true" ||
    req.query.fregranceFree === "true"
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
    if (req.query.use) {
      products = products.filter((f) => f.use === req.query.use);
    }
    if (req.query.use1) {
      products = products.filter((f) => f.use1 === req.query.use1);
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
    if (req.query.atopicSkin === "true") {
      products = products.filter((f) => f.atopicSkin === true);
    }
    if (req.query.aknePoreSkin === "true") {
      products = products.filter((f) => f.aknePoreSkin === true);
    }
    if (req.query.hyperpigmentedSkin === "true") {
      products = products.filter((f) => f.hyperpigmentedSkin === true);
    }
    if (req.query.flushedSkin === "true") {
      products = products.filter((f) => f.flushedSkin === true);
    }
    if (req.query.irritatedSkin === "true") {
      products = products.filter((f) => f.irritatedSkin === true);
    }
    if (req.query.damagedSkin === "true") {
      products = products.filter((f) => f.damagedSkin === true);
    }
    if (req.query.soapFree === "true") {
      products = products.filter((f) => f.soapFree === true);
    }
    if (req.query.paraffinFree === "true") {
      products = products.filter((f) => f.paraffinFree === true);
    }
    if (req.query.fregranceFree === "true") {
      products = products.filter((f) => f.fregranceFree === true);
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
          img: 1,
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
    return res.status(400).json({ message: "Product not found" });
  }

  // Prepare the update data
  const updatedData = {
    ...req.body, // Spread the req.body fields into updatedData
  };

  // If there's a new file (image) uploaded, add the image to the update data
  if (req.file) {
    updatedData.img = {
      data: fs.readFileSync(
        path.join(__dirname, "../uploads", req.file.filename)
      ),
      contentType: "image/png",
    };
  }

  // Find and update the product
  const updatedProduct = await allProducts.findByIdAndUpdate(
    req.params.id,
    updatedData, // Pass the updated data object
    { new: true } // Return the updated document
  );

  // If there was a file, delete it from the uploads folder after reading it
  if (req.file) {
    fs.unlinkSync(path.join(__dirname, "../uploads", req.file.filename));
  }

  res.status(200).json(updatedProduct);
});

module.exports = {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
