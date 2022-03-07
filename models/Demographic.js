const mongoose = require("../connection");

const demographicSchema = new mongoose.Schema({
  name: String,
  race: String,
  class: String,
  background: String,
  alignment: String,
  physical_characteristics: {
    age: Number,
    height: Number,
    weight: Number,
    hair_color: String,
    eye_color: String,
    skin_color: String,
  },
});

module.exports = mongoose.model("Demographic", demographicSchema);
