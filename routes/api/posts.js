const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// CREATE new post
router.post('/new', postsCtrl.create);

// GET /api/posts
router.get('/', postsCtrl.index);

// DELETE post
router.delete('/:id', postsCtrl.deletePost);

// UPDATE post
router.put('/:id', postsCtrl.updatePost);


module.exports = router;