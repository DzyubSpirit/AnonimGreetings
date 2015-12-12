var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res) {
    User.findOne({ username:'Gimly'}, function(err, data) {
        if (err) {
            res.end(err.message);
            return;
        }
        res.write(JSON.stringify(req.isAuthenticated()));
        res.write(JSON.stringify(data));
        res.write('\n');
        // res.write(data);
        // res.write(data[0]['password']);
        data.validPassword({
            'id': data.id,
            'password': data['password']
        }, function(err, data) {
            if (err) {
                res.end(err.message);
                return;
            }
            res.end(JSON.stringify(data));
        });
    });
    // res.render('index', { title: 'Express' });
});

module.exports = router;
