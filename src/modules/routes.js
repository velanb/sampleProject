const express = require("express");
const router = express.Router();

// Import controllers
const { executeController, getRandomNumber } = require("./controllers");

router.route("/sum").get(executeController);
router.route("/randomNumber").get(getRandomNumber);

module.exports = router;
