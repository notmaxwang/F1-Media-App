const Post = require('../../models/post');


module.exports = {
  create,
  index,
}

async function index(req, res) {
  const posts = await Post.find({});
  // re-sort based upon the sortOrder of the populated categories
  res.json(posts);
}

async function create(req, res) {
  try {
    // Add the post to the db
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json(err);
  }
}