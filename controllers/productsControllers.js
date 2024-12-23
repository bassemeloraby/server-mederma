const Products = require("../models/productsModel");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    if (req.file) {
      product.img = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    // const { search } = req.query;
    const {
      tradeName,
      scientificNameOrIngredient,
      category,
      subClass,
      page,
      limit = 10,
    } = req.query;

    // Build a dynamic query object
    const query = {};
    if (tradeName) {
      query.tradeName = { $regex: tradeName, $options: "i" }; // Case-insensitive search for tradeName
    }
    if (scientificNameOrIngredient) {
      query.scientificNameOrIngredient = {
        $regex: scientificNameOrIngredient,
        $options: "i", // Case-insensitive search for scientificNameOrIngredient
      };
    }
    if (category) {
      query.category = { $regex: category, $options: "i" }; // Case-insensitive search for category
    }
    if (subClass) {
      query.subClass = { $regex: subClass, $options: "i" }; // Case-insensitive search for subClass
    }
    const skip = (page - 1) * limit;

    // Fetch total document count matching the query
    const totalDocuments = await Products.countDocuments(query);

    // Fetch products based on query and sort
    const products = await Products.find(query, {
      tradeName: 1,
      scientificNameOrIngredient: 1,
      publicPrice: 1,
      img: 1,
      picLink: 1,
    })
      // .sort({
      //   tradeName: 1,
      // })
      .skip(skip)
      .limit(Number(limit));
    // const totalPages = products.length / limit;
    // const total = await Products.countDocuments(query);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      products,
      totalDocuments,
      totalPages,
      currentPage: Number(page),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) {
      updates.img = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }
    const product = await Products.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update product", error: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete product", error: error.message });
  }
};
