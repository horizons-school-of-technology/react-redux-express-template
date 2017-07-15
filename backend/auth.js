module.exports = function (app, passport) {
    app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})
app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
        passport.authenticate('google', {
                successRedirect : '/',
                failureRedirect : '/login'
        }));


//Login Wall!
app.use((req, res, next) => {
  console.log('should be a user: ', req.user);
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
});
}