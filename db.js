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

exports.getQuests = function(user_id, callback) {
    var sql =
"SELECT user_quests.user_id, \
        user_quests.quest_id, \
        quests.text \
FROM `users` \
RIGHT JOIN `user_quests` \
ON users.id=? AND users.id=user_quests.user_id \
LEFT JOIN `quests` \
ON user_quests.quest_id=quests.id;"
    var inserts = [user_id];
    sql = mysql.format(sql, inserts, true);
    connection.query(sql, function(err, data) {
        if (err) {
            return callback(err);
        }
        if (data.length === 0) {
            return callback(null, false);
        }
        var res = {
            user_id: data[0]['user_id'],
            quests: {}
        };
        console.log(data);
        for (var i in data) {
            console.log(data[i]['quest_id']);
            console.log(data[i]['quest_text']);
            res.quests[data[i]['quest_id']] = data[i]['text'];
        }
        callback(null, res);
    });
}