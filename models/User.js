const mongoose = require("../connection");

const userSchema = new mongoose.Schema({
  name: String,
  characters: [
    {
      ref: "Character",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  email: String,
  campaigns: [{ name: String, next_game: Date }],
});

module.exports = mongoose.model("User", userSchema);
