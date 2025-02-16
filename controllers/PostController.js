const Post = require('../models').Post

function create(req, res) {
  res.render('create.ejs')
}

async function store(req, res) {
  const post = await Post.create(
    req.body
  )
  res.redirect('/home')
}

async function index(req, res) {
  res.render('index.ejs', { posts: await Post.findAll() })
}

async function get(req, res) {
  const post = await Post.findByPk(req.params.postId)
  console.log(post)
  if (post === null) {
    res.render('notFound.ejs')
  } else {
    res.render('post.ejs', { post })
  }
}

async function edit(req, res) {
  const post = await Post.findByPk(req.params.postId)
  if (post === null) {
    res.render('notFound.ejs')
  } else {
    res.render('edit.ejs', { post })
  }
}

async function update(req, res) {
  const post = await Post.findByPk(req.params.postId)
  if (post === null) {
    res.render('notFound.ejs')
  } else {
    await post.update(
      req.body
    )
    res.redirect('/post/' + req.params.postId)
  }
}

module.exports = {
  store,
  create,
  index,
  get,
  edit,
  update
}
