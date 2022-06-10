const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const configureDB = require("./config/database");
configureDB();

const router = require("./config/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello To Movies App");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
