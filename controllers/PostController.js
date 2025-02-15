const Post = require('../models').Post

function create(req, res) {
  res.render('create.ejs')
}

async function store(req, res) {
  const post = await Post.create({
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  })
  res.redirect('/home')
}

async function index(req, res) {
  res.render('index.ejs', { posts: await Post.findAll() })
}

async function get(req, res) {
  const post = await Post.findByPk(req.params.postId)
  res.render('post.ejs', { post })
}

module.exports = {
  store,
  create,
  index,
  get
}
