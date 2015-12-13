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

router.post('/quests', function(req, res) {
    if (!req.isAuthenticated()) {
        res.end('No authenticated');
    }

    if (!req.body.text) {
        res.statusCode(400);
        res.end('No text in request');
    }

    db.postQuest(req.body.text, function(err, data) {
        if (err) {
            throw err;
        }
        res.end('ok');
    });
});

router.put('/quests/:quest_id', function(req, res) {
    if (!req.isAuthenticated()) {
        res.end('No authenticated');
    }

    var quest_id = req.param('quest_id');
    if (!quest_id) {
        res.statusCode(400);
        res.end('No quest id');
    }
    var quest_text = req.body.text;
    if (!quest_text) {
        res.statusCode(400);
        res.end('No text');
    }    

    db.putQuest({
        'id': quest_id,
        'text': quest_text
    }, function(err, quest) {
        if (err) {
            throw err;
        }
        if (!quest) {
            res.statusCode(400);
            res.end('No such quest');
            return;
        }
        res.end('ok');
    });

})

module.exports = function(database) {
    db = database;
    return router;
}
