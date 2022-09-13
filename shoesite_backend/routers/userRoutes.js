const express = require("express");
const collectionControllers = require("../controllers/userControllers");
const router = express.Router();
const isValidInfo = require("../AuthMiddleware/authMiddleware");

router.post(
  "/signup",
  isValidInfo.validateUserData,
  collectionControllers.signUp
);

router.get(
  "/signin",
  isValidInfo.validateUserData,
  collectionControllers.signIn
);

module.exports = router;
