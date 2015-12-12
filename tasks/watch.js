module.exports = function(gulp, plugins) {
  return gulp.task('watch', function() {
    return plugins.watch('src/**/*.{js,html,css}', function() {
      gulp.start('build-dist');
    });
  });
};
