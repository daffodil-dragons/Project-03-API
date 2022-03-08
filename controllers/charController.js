const express = require("express");
const router = express.Router();

const Character = require("./../models/Character");

//FIND ALL CHARACTERS
router.get("/", (req, res) => {
  Character.find()
    .populate("stats")
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
    .populate("stats")
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
    .populate("stats")
    .then((oneChar) => {
      res.json({
        status: 200,
        Character: oneChar,
      });
    });
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
