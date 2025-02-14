const express=require('express')
const PostController=require('./controllers/PostController')

const app=express()

app.use(express.static('public'))

app.get('/new',PostController.create)

app.listen(3000,()=>{
  console.log('Listening on 3000')
})
