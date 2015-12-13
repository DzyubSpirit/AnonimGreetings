var express = require('express');
var router = express.Router();
var passport;


module.exports = function (passport_) {
    passport = passport_;
    router.get('/', passport.authenticate('local-login', {
        successRedirect : 'loginSuccess', // redirect back to the previous page
        failureRedirect : 'loginFail', // redirect back to the previous page
        failureFlash : false
    }));
    return router;
}
