module.exports = function(gulp, plugins) {
  return gulp.task('compile-partials', function() {
    return gulp.src('src/partials/*.html')
      .pipe(gulp.dest('public/partials'));
  });
};
