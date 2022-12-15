const express = require('express');
const router = express.Router();
const driversCtrl = require('../../controllers/api/drivers');

// GET /api/drivers
router.get('/', driversCtrl.index);
// GET /api/drivers/:id
router.get('/:id', driversCtrl.show);

module.exports = router;