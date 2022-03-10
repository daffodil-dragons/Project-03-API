const mongoose = require("mongoose");

let mongoURL = "";

if (process.env.NODE_ENV === "production") {
  mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://127.0.0.1/project-03-api";
}

mongoose.connect(mongoURL);

module.exports = mongoose;
