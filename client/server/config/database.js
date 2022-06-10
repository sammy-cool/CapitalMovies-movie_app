const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const configureDB = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = configureDB;
