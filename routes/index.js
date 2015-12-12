var express = require('express');
var router = express.Router();
var User;
var db;

/* GET home page. */
router.get('/', function(req, res) {
    User.findOne({ username:'Gimly'}, function(err, data) {
        if (err) {
            throw err;
        }
        // res.write(JSON.stringify(req.isAuthenticated()));
        // res.write(JSON.stringify(data));
        // res.write('\n');
        // res.write(data);
        // res.write(data[0]['password']);
    });
    // res.render('index', { title: 'Express' });
});

module.exports = function(database) {
    db = database;
    User = require('../models/user.js')(db);
    return router;
}
