const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

router.get('/health', controller.health);
router.get('/projects', controller.getProjects);

module.exports = router;
