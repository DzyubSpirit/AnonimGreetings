var db;
var bcrypt   = require('bcrypt-nodejs');
var lib = {};

function addPasswordValidation(user) {
    user.validPassword = function(password, callback) {
        db.validPassword({
            'id': user['id'],
            'password': password
        }, callback);
    }

}

lib.findOne = function(user_obj, callback) {
    // console.log(1);
    db.findUser(user_obj, function(err, user) {
        if (err) {
            console.log(err);
            // callback(err);
            return;
        }
        addPasswordValidation(user);
        // console.log(user);
        callback(null, user);
    });
}

lib.findById = function(user_id, callback) {
    db.findUserById(user_id, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        // console.log(data);
        addPasswordValidation(user);
        // console.log(data);
        callback(null, user);
    });
}

lib.create = function(user_obj, callback) {
    db.createUser(user_obj, callback);
}

module.exports = function(database) {
    db = database;
    return lib;
}