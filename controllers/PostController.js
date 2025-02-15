const { validationResult } = require('express-validator')
const Post = require('../models').Post

function create(req, res) {
  res.render('create.ejs')
}

async function store(req, res) {
  const result = validationResult(req)
  if (!result) {
    res.render('create.ejs', { errors: result.error })
  }
  const post = await Post.create({
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  })
  res.render('index.ejs')
}

module.exports = {
  store,
  create
}
