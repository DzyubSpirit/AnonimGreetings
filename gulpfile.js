var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

fs.readdirSync('tasks').forEach(function(fileName) {
  require(path.join(__dirname, 'tasks', fileName))(gulp, plugins);
});

gulp.task('default', [ 'build-dist' , 'watch' ]);
gulp.task('build-dist', [ 'compile-app', 'compile-html', 'compile-partials', 'clean' ]);
gulp.task('compile-app', [ 'compile-css', 'concat-vendors', 'compile-js', 'compile-images' ]);
gulp.task('compile-good', [ 'compile-css', 'compile-html', 'compile-images', 'concat-vendors', ]);
