const express = require('express')
const PostController = require('./controllers/PostController')
const { body } = require('express-validator')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.get('/new', PostController.create)
app.post('/create', body("title").isString(), body("date").isDate(), body("content").isString(),
  PostController.store)

app.listen(3000, () => {
  console.log('Listening on 3000')
})
