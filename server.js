const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const charController = require("./controllers/charController");
const statController = require("./controllers/statController");
const spellController = require("./controllers/spellController");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/character", charController);
app.use("/stats", statController);
app.use("/spells", spellController);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
