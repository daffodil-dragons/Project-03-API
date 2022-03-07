const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
