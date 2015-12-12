module.exports = function(gulp, plugins) {
  return gulp.task('clean', function() {
    return gulp.src('public/*.*', { read: false })
      .pipe(plugins.clean());
  });
}
