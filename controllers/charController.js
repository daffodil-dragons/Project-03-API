const express = require("express");
const router = express.Router();

const Character = require("./../models/Character");
const Spell = require("../models/Spell");

//FIND ALL CHARACTERS
router.get("/", (req, res) => {
  Character.find()
    .populate("spells")
    .then((allChar) => {
      res.json({
        status: 200,
        Characters: allChar,
      });
    });
});
//FIND SINGLE CHARACTER BY NAME
router.get("/find/:name", (req, res) => {
  Character.findOne({ name: req.params.name })
    .populate("spells")
    .then((oneChar) => {
      res.json({
        status: 200,
        Character: oneChar,
      });
    });
});

//ADD A NEW CHARACTER
router.post("/create", (req, res) => {
  Character.create(req.body).then((newChar) => {
    res.json({
      status: 200,
      New: newChar,
    });
  });
});

//UPDATE A CHARACTER
router.put("/update/:name", (req, res) => {
  Character.findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
    .populate("spells")
    .then((oneChar) => {
      res.json({
        status: 200,
        Character: oneChar,
      });
    });
});

// UPDATE A CHARACTERS SPELLS
router.put("/update/:charName/spell/:spellName", async (req, res) => {
  const char = await Character.findOne({
    name: req.params.charName,
  }).populate("spells");
  const spell = await Spell.findOne({
    name: req.params.spellName,
  });
  char.spells.push(spell);
  char.save();
  res.json({ status: 200, Character: char });
});

//DELETE A CHARACTER
router.delete("/delete/:name", (req, res) => {
  Character.findOneAndDelete({ name: req.params.name }).then((deletedChar) => {
    res.json({
      status: 200,
      Deleted_Character: deletedChar,
    });
  });
});

module.exports = router;
