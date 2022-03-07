const mongoose = require("../connection");

const abilitySchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Ability", abilitySchema);
