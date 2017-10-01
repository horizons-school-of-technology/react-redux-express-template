const PORT = process.env.PORT || 3000;
const path = require('path');
var bcrypt=require('bcrypt-nodejs');
var User=require(path.join(__dirname,'..','backend/models/Users.js'));

var myHasher = function(password, tempUserData, insertTempUser, callback) {
    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    return insertTempUser(hash, tempUserData, callback);
};

module.exports = function(nev){
  var verifURL="http://localhost:"+PORT+"/account/verification/${URL}";
  nev.configure({
    verificationURL:verifURL,
    persistentUserModel:User,
    tempUserCollection:"tempopary_users",

    transportOptions:{
      service:"Gmail",
      auth:{
        user:'emorycoursecritique@gmail.com',
        pass:'coursecritique1'
      }
    },
    verifyMailOptions:{
      from:"Do Not Reply - emorycoursecritique <emorycoursecritique@gmail.com>",
      subject:"Please confirm your email address",
      html:'<p>Please verify your account by clicking <a href="${URL}">this link</a>. If you are unable to do so, copy and ' +
                'paste the following link into your browser:</p><p>${URL}</p>',
      text: 'Please verify your account by clicking the following link, or by copying and pasting it into your browser: ${URL}'
    },
    hashingFunction:myHasher,

    confirmMailOptions:{
      from:"Do Not Reply - emorycoursecritique <emorycoursecritique@gmail.com>",
      subject:"Your email has been confirm",
      text: 'Thank you for confirming your email!'
    }

  },(err,options)=>{
    if(err){
      console.log(err);
    }})

  nev.generateTempUserModel(User,function(err,model){
    if(err){
      console.log(err);
    }
  });



};
