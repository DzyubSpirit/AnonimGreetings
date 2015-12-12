module.exports = function(gulp, plugins) {
  return gulp.task('concat-vendors', function() {
    return gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/ui-router/release/angular-ui-router.js',
        'node_modules/angular-mocks/angular-mocks.js'
      ])
      .pipe(plugins.concat('vendors.js'))
      // .pipe(plugins.md5(10))
      .pipe(gulp.dest('public'));
  });
};
