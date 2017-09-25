const localStrategy=require('passport-local').Strategy;
var User=require('../backend/models/Users.js');


module.exports = function(passport){
  passport.serializeUser(function(user,done){
    done(null,user.id);
  });

  passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
      done(err,user);
    });
  });
  passport.use('local-signup',
    new localStrategy({usernameField:'email',passwordField:'password',passReqToCallback:true}, function(req,email,password,done){
        console.log(12334544);
        User.findOne({'email':email}, function(err,user){
          if(err){
            return done(err);
          }
          if(user){
            console.log(1111);
            return done(null,false,req.flash('signup message','user exists'));
          }
          else{
            var newUser=new User();
            newUser.email=email;
            newUser.storeHashedPassword(password);
            newUser.save(function(err,newUser){
              if(err)
                throw err;
            })
            return done(null,newUser);
          }

        })
    })
  ) //sign up strategy
  passport.use('local-login',new localStrategy({usernameField:'email',passwordField:'password',passReqToCallback:true},function(req,email,password,done){
    User.findOne({'email':email},function(err,user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null,false,req.flash('login message','no user with this email'));
      }
      if(!user.validPassword(password)){
        return done(null,false,req.flash('login message','password is incorrect'));
      }
      return done(null,user);

    })
  }) //login strategy
)};
