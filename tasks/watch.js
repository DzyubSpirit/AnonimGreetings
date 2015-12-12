module.exports = function(gulp, plugins) {
  return gulp.task('watch', function() {
    return plugins.watch('src/**/*.{js,html,css,scss}', function() {
      gulp.start('build-dist');
    });
  });
};
