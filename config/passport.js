var LocalStrategy = require('passport-local').Strategy;
var User;
var db;

module.exports = function(passport, database) {
  db = database;
  // console.log(database);
  User = require('../models/user')(db);
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },function(err, username, password, done) {
    // console.log('Pass:'+password);
    User.findOne({ username: username }, function(err, user) {
      if (err) { 
        // console.log(1);
        // return done(err); 
      }
      if (!user) {
        // console.log(2);
        // return done(null, false, { message: "Incorrect username."});
      }
      user.validPassword(password, function(err, isExisted) {
        // console.log('6');
        if (err) return done(err);
        if (!isExisted) {
          // console.log(3);
          // return done(null, false, {message: "Incorrect password."});
        }
        // console.log(user);
        // console.log(4);
        return done(null, user);
      }); 
    })
  }));
  passport.use('local-regist', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },function(req, username, password, done) {
    console.log('Pass:'+password);
    // console.log(req.body);
    User.findOne({ username: username }, function(err, user) {
      if (err) { 
        // console.log(err);
        return done(err); 
      }
      User.create({
        'login': username,
        'email': req.body.email,
        'password': password
      }, function(err, user) {
        if (err) {
          // console.log(err);
          return done(err);
        }
        if (!user) {
          // console.log(user);
          return done(null, false, {message: "User already exists."});
        }
        // console.log(user);
        done(null, user);
      }); 
    })
  }));
}

// module.exports = function(passport) {

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

//   passport.use('local-signup', new LocalStrategy({
//     usernameField : 'username',
//     passwordField : 'password',
//     passReqToCallback : true
//   },
//   function(req, username, password, done) {
//     process.nextTick(function() {

//       User.findOne({ 'username' :  username }, function(err, user) {
//         if (err){
//           return done(err);
//         }

//         if (user) {
//           return done(null, false, req.flash('signupMessage', 'That usename is already taken.'));
//         } else {
//           var newUser = new User();

//           newUser.username = username;
//           newUser.password = newUser.generateHash(password);
//           newUser.admin = Boolean(req.body.admin);
//           newUser.name = req.body.name;

//           newUser.save(function(err, user) {
//             if (err){
//               throw err;
//             }
//             req.login(user, function(err) {
//               if (err) {
//                 throw err;
//               }
//             });

//             return done(null, newUser);
//           });
//         }
//       });
//     });
//   }));

//   passport.use('local-login', new LocalStrategy({
//     usernameField : 'username',
//     passwordField : 'password',
//     passReqToCallback : true
//   },
//   function(req, username, password, done) {
//     User.findOne({ 'username' :  username }, function(err, user) {
//       if (err){
//         return done(err);
//       }

//       if (!user){
//         return done(null, false, req.flash('loginMessage', 'No user found.'));
//       }

//       if (!user.validPassword(password)){
//         return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//       }

//       return done(null, user);
//     });

//   }));
// };
