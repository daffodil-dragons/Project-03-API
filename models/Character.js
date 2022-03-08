// const mongoose = require("../connection");

// const characterSchema = new mongoose.Schema({
//   name: String,
//   demographic: String,
//   class: String,
//   level: Number,
//   stats: {
//     ref: "Stat",
//     type: mongoose.Schema.Types.ObjectId,
//   },
// });

// module.exports = mongoose.model("Character", characterSchema);

const mongoose = require("../connection");
const statSchema = require("./Stat");

const characterSchema = new mongoose.Schema({
  name: String,
  demographic: String,
  class: String,
  level: Number,
  stats: statSchema,
});

module.exports = mongoose.model("Character", characterSchema);
