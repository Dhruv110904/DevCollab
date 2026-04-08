const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const projectController = require("../controllers/projectController");

router.post("/", protect, projectController.createProject);

module.exports = router;