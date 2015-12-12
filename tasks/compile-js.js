var es = require('event-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');

module.exports = function(gulp, plugins) {
  return gulp.task('compile-js', function() {
    var templates = gulp.src('src/**/*.html')
      .pipe(plugins.templateCache({ standalone: true }));

      var js = browserify({
        debug: true,
        entries: globby.sync([
          'src/lib/**/*.js',
          'src/config/**/*.js',
          'src/app/*/config/**.js',
          'src/app/**/*.js'
        ])
      })
      .transform(babelify.configure({
        presets: [ 'es2015' ],
      }))
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer());

    return es.merge(js, templates)
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.md5(10))
      .pipe(gulp.dest('dist'));
  });
};
