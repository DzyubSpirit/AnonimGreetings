module.exports = function(gulp, plugins) {
  return gulp.task('compile-css', function() {
    return gulp.src([
        'node_modules/ui-select/dist/select.min.css',
        'src/css/**/*.{css,scss}',
        'src/{app,lib}/*/css/{default,index,component}.{css,scss}'
      ])
      .pipe(plugins.sass({ outputStyle: 'compressed' }).on('error', plugins.sass.logError))
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.md5(10))
      .pipe(gulp.dest('dist'));
  });
};
