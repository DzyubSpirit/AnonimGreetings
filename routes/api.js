var express = require('express');
var router = express.Router();
var db;

router.get('/quests', function(req, res) {
    // res.write('What? Always okay now!');
    // res.end(JSON.stringify(req.user));
    if (!req.isAuthenticated()) {
        res.end('No authenticated');
    }
    db.getQuests(req.user.id, function(err, quests) {
        if (err) {
            throw err;
        }
        res.end(JSON.stringify(quests));
    });
});

module.exports = function(database) {
    db = database;
    return router;
}
