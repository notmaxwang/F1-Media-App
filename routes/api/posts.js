const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// GET /api/posts
router.get('/', postsCtrl.index);

// CREATE new post
router.post('/', postsCtrl.create);


module.exports = router;