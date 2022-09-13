const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  const databaseinfo = await mongoose.connect(process.env.DATABASE_URL);
  console.log(`Database Started ${databaseinfo.connection.host}`);
};

module.exports = connectDatabase;
