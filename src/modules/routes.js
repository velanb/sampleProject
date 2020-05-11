const express = require("express");
const router = express.Router();

// Import controllers
const { executeController, getRandomNumber } = require("./controllers");

router.get("/sum", executeController);
router.get("/randomNumber", getRandomNumber);

module.exports = router;
