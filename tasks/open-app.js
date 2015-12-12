module.exports = function(gulp, plugins) {
  return gulp.task('open-app', [ 'build-dist' ], function() {
    return gulp.src('dist/index.html')
      .pipe(plugins.open());
  });
}
