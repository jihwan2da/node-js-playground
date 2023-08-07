const express = require("express");
const router = express.Router();
const staticController = require('../controller/StaticController');

router.get('/health_check', staticController.healthCheck)

module.exports = router
