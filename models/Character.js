const mongoose = require("../connection");

const characterSchema = new mongoose.Schema({
  demographic: {
    ref: "Demographic",
    type: mongoose.Schema.Types.ObjectId,
  },
  stats: {
    ref: "Stat",
    type: mongoose.Schema.Types.ObjectId,
  },
  spell_slots: {
    ref: "SpellSlot",
    type: mongoose.Schema.Types.ObjectId,
  },
  abilities: [
    {
      ref: "Ability",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Character", characterSchema);
