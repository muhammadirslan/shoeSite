const userSignInmodel = require("../models/userSignin");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 6);
  try {
    const newUser = await userSignInmodel.create({
      full_name: req.body.full_name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

// const signIn = async (req, res) => {
//   if (!req.body.email) {
//     res.status(400).json("Email Empty");
//   }
//   try {
//     const user = await userSignInmodel.findOne({
//       email: req.body.email,
//     });

//     if (req.body.email != user.email) {
//       res.status(400).json("Email Incorrect");
//     }
//     if (req.body.password != user.password) {
//       res.status(400).json("Password Incorrect");
//     }
//     res.status(200).json("SignIn Sucessful");
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

const signIn = async (req, res) => {
  const { password } = req.body;
  try {
    // console.log(req.body)
    if (!req.body.email) {
      res.status(401).json("email is required");
      return;
    }

    const user = await UserAuthModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(401).json({ message: "USer Not Found" });
      return;
    }

    // if (req.body.password !== user.password) {
    //     res.status(401).json({ message: "Password Doesn't Match" })
    //     return
    // }

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: 300 }
    );
    const validatePassword = bcrypt.compareSync(password, user.password);

    res
      .status(200)
      .json({ message: "Successfully SignIn", token, validatePassword });
    return;
  } catch (error) {
    res.status(401).json(error);
    return;
  }
};
module.exports = {
  signIn,
  signUp,
};
