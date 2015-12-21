var gulp = require('./gulp')([
  'connect',
  'html',
  'less',
  'watch-less',
  'watchify',
  'watch',
  'browserify',
]);

gulp.task('build', ['less', 'browserify']);
gulp.task('default', ['build', 'connect', 'watch', 'watch-less', 'watchify']);
gulp.task('server', ['build', 'connect', 'watch', 'watch-less', 'watchify']);
gulp.task('combo',['watch-less', 'watchify']);