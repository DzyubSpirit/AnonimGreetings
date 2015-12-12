var fs = require('fs');
var data = fs.readFileSync(__dirname+'/database.txt');
var strings = data.toString().split('\n');
var config = []
for (var i in strings) {
    var tokens = strings[i].split('=');
    if (tokens.length == 2) {
        config[tokens[0]] = tokens[1];
    }
}

module.exports = config;