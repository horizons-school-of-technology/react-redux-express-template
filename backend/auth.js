module.exports = function (app, passport) {
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email', 'https://www.googleapis.com/auth/calendar'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', { 
      successRedirect : '/', 
      failureRedirect : '/login'
    })
  );


  //Login Wall!
  app.use((req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/login');
    }
  });
}