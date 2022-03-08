const mongoose = require("../connection");

const statSchema = new mongoose.Schema({
  hp: Number,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  // saving_throws: {
  //   strength: Number,
  //   dexterity: Number,
  //   constitution: Number,
  //   intelligence: Number,
  //   wisdom: Number,
  //   charisma: Number,
  // },
  // armor_class: Number,
});

module.exports = mongoose.model("Stat", statSchema);
