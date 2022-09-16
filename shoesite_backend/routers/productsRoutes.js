const express = require("express");
const collectionControllers = require("../controllers/productControllers");
const router = express.Router();
const middleware = require("../AuthMiddleware/authMiddleware");

router.get("/allproducts", collectionControllers.getAllShoes);
router.post("/addshoe", middleware.upload, collectionControllers.addNewShoe);

module.exports = router;
