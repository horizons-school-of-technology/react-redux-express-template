const path = require('path');

module.exports = function(app,passport,nev){
   app.use('/users',require('connect-ensure-login').ensureLoggedIn('/login'))


  app.post('/account/signup',(req,res)=>{
    require('./service/signup.js')(req,res,nev)
  })

  app.get('/signup', (req,res)=>{
    res.render('signup',{message:req.flash('signup message')});
  }) //renders sign up page with possible flash messages

  app.post('/account/login',passport.authenticate('local-login',
    {
      successReturnToOrRedirect:'/',
      failureRedirect:'/login',
      failureFlash:true
    } //if there is a return to then return ,else go to home page
  ));
  app.get('/account/login',(req,res)=>{
    res.render('login',{message:req.flash('login message')}); //show login ejs with possible flash messages
  });

  app.get('/users/currentUser',
  (req,res)=>{
    console.log(req.isAuthenticated());
    res.json({user:req.session.passport.user})

  }) //middleware to ensure login

  app.get('/account/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
  })

  app.get('/account/verification/:URL',function(req,res){
    var url=req.params.URL;
    nev.confirmTempUser(url,function(err,user){
      if(err){
        return res.status(404).send({message:"confirming temp user failed"})
      }
      if(user){
          req.login(user,function(err){
            if(err){
              res.status(404).send({message:"error when login"})
            }
            res.redirect('/users/currentUser')
          })

      }
      else{
        res.json({message:"something went wrong"})
      }

    })
  })


};
