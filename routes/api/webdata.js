const express = require('express');
const router = express.Router();
const webDataCtrl = require('../../controllers/api/webdata');

router.get('/', webDataCtrl.getRaceResults);

module.exports = router;