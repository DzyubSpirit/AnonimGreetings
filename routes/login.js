var express = require('express');
var router = express.Router();
var passport;


module.exports = function (passport_) {
    passport = passport_;
    router.get('/', passport.authenticate('local-login', {
        successRedirect: 'loginSuccess', // redirect back to the previous page
        failureRedirect: 'loginFail', // redirect back to the previous page
        failureFlash: false
    }));
    router.post('/', passport.authenticate('local-regist', {
        successRedirect: 'loginSuccess',
        failureRedirect: 'loginFail',
        failureFlash: false
    }));
    return router;
}
