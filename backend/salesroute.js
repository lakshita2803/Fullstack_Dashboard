const express = require("express");
const router = express.Router();
const { getSales } = require("../controllers/salescontroller");

router.get("/", getSales);

module.exports = router;