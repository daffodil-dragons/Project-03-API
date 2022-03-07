const mongoose = require("../connection");

const spellSchema = new mongoose.Schema({
  name: String,
  description: String,
  damage: String,
  prepared: Boolean,
});

module.exports = mongoose.model("Spell", spellSchema);
