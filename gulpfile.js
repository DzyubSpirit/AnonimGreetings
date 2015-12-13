var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

fs.readdirSync('tasks').forEach(function(fileName) {
  require(path.join(__dirname, 'tasks', fileName))(gulp, plugins);
});

gulp.task('default', [ 'build-dist' ]);
gulp.task('build-dist', [ 'compile-app', 'compile-html', 'compile-partials', 'clean' ]);
gulp.task('compile-app', [ 'compile-css', 'concat-vendors', 'compile-js' ]);
