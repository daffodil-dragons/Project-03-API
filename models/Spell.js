const mongoose = require("../connection");

const spellSchema = new mongoose.Schema({
  name: String,
  level: Number,
  description: String,
  prepared: Boolean,
});

module.exports = mongoose.model("Spell", spellSchema);
