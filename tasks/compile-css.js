module.exports = function(gulp, plugins) {
  return gulp.task('compile-css', function() {
    return gulp.src([
        'src/**/*.css'
      ])
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.md5(10))
      .pipe(gulp.dest('public'));
  });
};
