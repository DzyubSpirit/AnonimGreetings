module.exports = function(gulp, plugins) {
  return gulp.task('compile-html', [ 'compile-app' ], function() {
    var files = gulp.src([
      'public/vendors_*.js',
      'public/app_*.js',
      'public/app_*.css'
    ], { read: false });

    return gulp.src('src/index.html')
      .pipe(plugins.inject(files, { relative: true }))
      .pipe(gulp.dest('public'));
  });
};
