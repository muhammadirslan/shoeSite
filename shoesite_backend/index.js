const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routers/userRoutes");
const adminRouter = require("./routers/adminRoutes");
const productRouter = require("./routers/productsRoutes");
const connectDatabase = require("./Database/Database");
const path = require("path");

connectDatabase();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(userRouter, adminRouter, productRouter);
app.use("/images", express.static(path.join(__dirname, "productImage")));

app.listen(process.env.PORT, () => {
  console.log(`Server started at Port ${process.env.PORT}`);
});
