var config = require('./config/config.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config['host'],
    user: config['user'],
    password: config['password'],
    database: config['database']
});
connection.connect();

exports.findUser = function(user_obj, callback) {
    var sql =
"SELECT * FROM `users` WHERE login=?;";
    var inserts = [user_obj['username']];
    sql = mysql.format(sql, inserts, true);
    // console.log(sql);
    connection.query(sql, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        if (data.length == 0) {
            callback(null, false);
            return;
        }
        callback(null, data[0]);
    });
}

exports.findUserById = function(user_id, callback) {
    var sql =
"SELECT * FROM `users` WHERE id=?;";
    var inserts = [user_id];
    sql = mysql.format(sql, inserts, true);
    // console.log(sql);
    connection.query(sql, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        if (data.length == 0) {
            callback(null, false);
            return;
        }
        callback(null, data[0]);
    });
}


exports.validPassword = function(user_obj, callback) {
    var sql =
"SELECT * FROM `users` WHERE id=? AND password=?";
    var inserts = [user_obj['id'], user_obj['password']];
    sql = mysql.format(sql, inserts, true);
    console.log(JSON.stringify(user_obj));
    console.log(sql);
    connection.query(sql, function(err, data) {
        if (err) {
            return callback(err);
        }
        if (data.length === 0) {
            return callback(null, false);
        }
        return callback(null, true);
    });
}