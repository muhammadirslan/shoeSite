require("dotenv").config();
const adminSignInmodel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSignUp = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 6);
  try {
    const newUser = await adminSignInmodel.create({
      full_name: req.body.full_name,
      email: req.body.email,
      password: hashedPassword,
    });

    // res.status(201).json("worked");
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
    return;
  }
};

const adminSignIn = async (req, res) => {
  if (!req.body.email) {
    res.status(401).json("Email Empty");
  }
  try {
    const user = await adminSignInmodel.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(400).json("Email Incorrect");
      return;
    }
    if (req.body.password != user.password) {
      res.status(400).json("Password Incorrect");
      return;
    }
    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      process.env.JWT_SECRET,
      { expiresIn: "300" }
    );

    res.status(200).json("SignIn Sucessful", token, user);
  } catch (error) {
    res.status(400).json(error);
  }

  res.status(200).json("SignIn Sucessful");
};

module.exports = {
  adminSignIn,
  adminSignUp,
};
