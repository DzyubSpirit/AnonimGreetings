var db = require('../db.js');
var bcrypt   = require('bcrypt-nodejs');

// var userSchema = mongoose.Schema({
//   name: String,
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   admin: Boolean
// });

// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

// module.exports = mongoose.model('User', userSchema);

module.exports.findOne = function(user_obj, callback) {
    db.findUser(user_obj, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        data.validPassword = function(user_obj, callback) {
            db.validPassword(user_obj, callback);
        }
        // console.log(data);
        callback(null, data);
    });
}

module.exports.findById = function(user_id, callback) {
    db.findUserById(user_id, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        data.validPassword = function(user_obj, callback) {
            db.validPassword(user_obj, callback);
        }
        // console.log(data);
        callback(null, data);
    });
}