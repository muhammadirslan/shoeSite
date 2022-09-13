const express = require("express");
require("dotenv").config();
const userRouter = require("./routers/userRoutes");
const adminRouter = require("./routers/adminRoutes");
const productRouter = require("./routers/productsRoutes");
const connectDatabase = require("./Database/Database");

connectDatabase();

const app = express();
app.use(express.json());

app.use(userRouter, adminRouter, productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at Port ${process.env.PORT}`);
});
