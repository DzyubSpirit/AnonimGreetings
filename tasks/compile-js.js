module.exports = function(gulp, plugins) {
  return gulp.task('compile-js', function() {
    return gulp.src([
        'src/app/modules.js',
        'src/app/*.js'
      ])
      .pipe(plugins.concat('app.js'))
      // .pipe(plugins.md5(10))
      .pipe(gulp.dest('public'));
  });
};
