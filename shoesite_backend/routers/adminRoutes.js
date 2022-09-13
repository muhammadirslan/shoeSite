const express = require("express");
const collectionControllers = require("../controllers/adminController");
const router = express.Router();
const isValidInfo = require("../AuthMiddleware/authMiddleware");

router.post(
  "/adminsignup",
  isValidInfo.validateAdminData,
  collectionControllers.adminSignUp
);

router.get(
  "/adminsignin",
  isValidInfo.verify,
  isValidInfo.validateAdminData,
  collectionControllers.adminSignIn
);

module.exports = router;
