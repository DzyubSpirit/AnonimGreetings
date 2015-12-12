var es = require('event-stream');
var browserify = require('gulp-browserify');
var globby = require('globby');

module.exports = function(gulp, plugins) {
  return gulp.task('compile-js', function() {
      var js = browserify({
        debug: true,
        entries: globby.sync([
          'src/lib/**/*.js',
          'src/app/*.js'
        ])
      })

    return es.merge(js)
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest('public'));
  });
};
