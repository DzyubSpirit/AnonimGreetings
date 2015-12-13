module.exports = function(gulp, plugins) {
  return gulp.task('compile-images', function() {
    return gulp.src('src/images/*.jpg')
      .pipe(gulp.dest('public/images'));
  });
};
