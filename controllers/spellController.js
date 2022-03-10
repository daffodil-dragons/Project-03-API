const express = require("express");
const router = express.Router();

const Spell = require("./../models/Spell");

// GET ALL SPELLS
router.get("/", (req, res) => {
  Spell.find().then((allSpells) => {
    res.json({
      status: 200,
      spells: allSpells,
    });
  });
});

// GET A SPELL BY NAME
router.get("/name/:name", (req, res) => {
  Spell.findOne({ name: req.params.name }).then((spell) => {
    res.json({
      status: 200,
      spell: spell,
    });
  });
});

// CREATE A SPELL
router.post("/", (req, res) => {
  Spell.create(req.body).then((spell) => {
    res.json({
      status: 200,
      newSpell: spell,
    });
  });
});

// UPDATE A SPELL BY NAME
router.put("/update/:name", (req, res) => {
  Spell.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true,
  }).then((spell) => {
    res.json({
      status: 200,
      updatedSpell: spell,
    });
  });
});

// DELETE A SPELL BY NAME
router.delete("/delete/:name", (req, res) => {
  Spell.findOneAndDelete({ name: req.params.name }).then((spell) => {
    res.json({
      status: 200,
      deletedSpell: spell,
    });
  });
});

module.exports = router;
