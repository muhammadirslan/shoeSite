require("dotenv").config();
const productModel = require("../models/productModel");

const addNewShoe = async (req, res) => {
  try {
    const newShoe = await productModel.create({
      shoeName: req.body.shoeName,
      shoeSize: req.body.shoeSize,
      shoeType: req.body.shoeType,
      remainingItems: req.body.remainingItems,
      image: req.file.filename,
    });
    res.status(200).json(newShoe);
  } catch (error) {
    res.status(400).json(error);
    return;
  }
};

module.exports = {
  addNewShoe,
};
