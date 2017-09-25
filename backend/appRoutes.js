const path = require('path');
module.exports = function(app,passport){
  app.use('/users',require('connect-ensure-login').ensureLoggedIn('/login'))
  app.post('/signup', passport.authenticate('local-signup',{
    successRedirect:'/users/currentUser',failureRedirect:'/signup',failureFlash:true
  } //authentication for signup, if success then show user, else go back to signup
));

  app.get('/signup', (req,res)=>{
    res.render('signup',{message:req.flash('signup message')});
  }) //renders sign up page with possible flash messages

  app.post('/login',passport.authenticate('local-login',
    {
      successReturnToOrRedirect:'/',
      failureRedirect:'/login',
      failureFlash:true
    } //if there is a return to then return ,else go to home page
  ));
  app.get('/login',(req,res)=>{
    res.render('login',{message:req.flash('login message')}); //show login ejs with possible flash messages
  });

  app.get('/users/currentUser',
  (req,res)=>{
    console.log(req.isAuthenticated());
    res.json({user:req.session.passport.user})

  }) //middleware to ensure login

};
