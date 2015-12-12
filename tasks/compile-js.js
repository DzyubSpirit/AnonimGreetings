var es = require('event-stream');
var browserify = require('gulp-browserify');
var globby = require('globby');

module.exports = function(gulp, plugins) {
  return gulp.task('compile-js', function() {
    var templates = gulp.src('src/**/*.html');

      var js = browserify({
        debug: true,
        entries: globby.sync([
          'src/lib/**/*.js',
          'src/config/**/*.js',
          'src/app/*/config/**.js',
          'src/app/**/*.js'
        ])
      })

  console.log( '>>>', plugins );
    return es.merge([ js, templates ])
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.md5(10))
      .pipe(gulp.dest('dist'));
  });
};
