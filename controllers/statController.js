const express = require("express");
const router = express.Router();

const Stat = require("./../models/Stat");

//ADD STATS
router.post("/", (req, res) => {
  Stat.create(req.body).then((stats) => {
    res.json({
      status: 200,
      Stats: stats,
    });
  });
});
//UPDATE STATS
router.put("/:id", (req, res) => {
  Stat.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (newStats) => {
      res.json({
        status: 200,
        Stats: newStats,
      });
    }
  );
});
//GET STATS (POSTMAN USE ONLY)
router.get("/", (req, res) => {
  Stat.find().then((allStats) => {
    res.json({
      status: 200,
      Stats: allStats,
    });
  });
});
//DELETE STATS (POSTMAN USE ONLY)
router.delete("/delete/:id", (req, res) => {
  Stat.findByIdAndDelete(req.params.id).then((deletedStats) => {
    res.json({
      status: 200,
      Deleted_Stats: deletedStats,
    });
  });
});

module.exports = router;
