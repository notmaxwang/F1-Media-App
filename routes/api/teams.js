const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/api/teams');

// GET /api/teams
router.get('/', teamsCtrl.index);
// GET /api/teams/:name
router.get('/:name', teamsCtrl.show);

module.exports = router;