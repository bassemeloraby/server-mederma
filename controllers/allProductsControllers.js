const allProducts = require("../models/allProductsModel");

const asyncHandler = require("express-async-handler");

//1
const setProduct = asyncHandler(async (req, res) => {
  res.json("add product done");
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
