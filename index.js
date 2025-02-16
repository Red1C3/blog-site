const express = require('express')
const PostController = require('./controllers/PostController')
const AuthenticationController = require('./controllers/AuthenticationController')
const { body } = require('express-validator')
const session = require('express-session')
const exposeSession = require('./middlewares/exposeSession')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(session({ secret: "keyboard cat" }))
app.use(exposeSession)

app.get('/new', PostController.create)
app.post('/create', body("title").isString(), body("date").isDate(), body("content").isString(),
  PostController.store)
app.get('/home', PostController.index)
app.get('/', PostController.index)
app.get('/admin', PostController.index)
app.get('/post/:postId', PostController.get)
app.get('/edit/:postId', PostController.edit)
app.post('/update/:postId', body('title').isString().optional(),
  body('date').isDate().optional(), body('content').isString().optional(),
  PostController.update)
app.get('/login', AuthenticationController.loginGet)
app.post('/login', AuthenticationController.login)

app.listen(3000, () => {
  console.log('Listening on 3000')
})
