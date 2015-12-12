module.exports = function(gulp, plugins) {
  return gulp.task('clean', function() {
    return gulp.src('dist', { read: false })
      .pipe(plugins.clean());
  });
}
