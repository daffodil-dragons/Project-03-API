const mongoose = require("../connection");

const spellSlotSchema = new mongoose.Schema({
  level_1: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_2: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_3: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_4: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_5: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_6: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_7: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_8: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  level_9: {
    spell_slots: Number,
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  cantrips: {
    spells: [
      {
        ref: "Spell",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
});

module.exports = mongoose.model("SpellSlot", spellSlotSchema);
