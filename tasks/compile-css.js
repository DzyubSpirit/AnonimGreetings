module.exports = function(gulp, plugins) {
  return gulp.task('compile-css', function() {
    return gulp.src([
        'src/css/**/*.{css,scss}',
        'src/{app,lib}/*/css/{default,index,component}.{css,scss}'
      ])
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.md5(10))
      .pipe(gulp.dest('dist'));
  });
};
