module.exports = function(gulp, plugins) {
  console.log(plugins)
  return gulp.task('clean', function() {
    console.log(plugins.clean)
    return gulp.src('dist', { read: false })
      .pipe(plugins.clean());
  });
}
