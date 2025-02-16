function loginGet(req,res){
  res.render('login.ejs')
}

function login(req,res){
  if(req.body.username=='admin' && req.body.password=='admin'){
    req.session.loggedIn=true
    res.redirect('/')
  }else{
    res.redirect('/login')
  }
}

module.exports={
  loginGet,
  login
}
