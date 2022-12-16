const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');

// All paths start with '/api/profiles'

// POST /api/profiles (create a userprofile)
router.post('/', profilesCtrl.create);

module.exports = router;