const jwt = require("jsonwebtoken");
const multer = require("multer");

const validateUserData = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json("Email is Required");
  }
  if (!req.body.full_name) {
    res.status(400).json("Full Name is Required");
  }
  if (!req.body.password) {
    res.status(400).json("Password is Required");
  }
  next();
};

const validateAdminData = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json("Email is Required");
  }
  if (!req.body.full_name) {
    res.status(400).json("Full Name is Required");
  }
  if (!req.body.password) {
    res.status(400).json("Password is Required");
  }
  next();
};

// const verify = (req, res, next) => {
//   const token = req.header.jwt_key;
//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     console.log();
//     next();
//   } catch (error) {
//     res.status(401).json("You are not authorized, Please Try Again");
//     return;
//   }
// };
const verify = (req, res, next) => {
  const token = req.headers.auth_key;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json("Invalid, Not Authorize");
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "productImage/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage }).single("image");

module.exports = { validateUserData, validateAdminData, verify, upload };
