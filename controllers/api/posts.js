const Post = require('../../models/post');
const Profile = require('../../models/profile');


module.exports = {
  create,
  index,
  deletePost,
  updatePost,
}

async function updatePost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.content = req.body.content;
    await post.save();
    const allPosts = await Post.find({});
    res.json(allPosts);
  } catch {
    console.log('Cannot Update');
  }
}

async function deletePost(req, res) {
  const postDelete = await Post.findById(req.params.id);
  console.log(postDelete);
  const profile = await Profile.findOne({user: req.user});
  console.log(profile.posts);
  const postIndex = profile.posts.indexOf(postDelete);
  
  profile.posts.splice(postIndex, 1);
  await Post.remove({_id: req.params.id});
  await profile.save();
  res.json(profile);
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
    const currProfile = await Profile.findOne({user: req.user});
    await currProfile.addPost(post.id);
    res.json(post);
  } catch (err) {
    res.status(400).json(err);
  }
}