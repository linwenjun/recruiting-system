var gulp = require('./gulp')([
  'connect',
  'html',
  'less',
  'watch-less',
  'watchify',
  'watch'
]);

gulp.task('build', ['less', 'watchify']);
gulp.task('default', ['build', 'connect', 'watch', 'watch-less', 'watchify'])
gulp.task('server', ['build', 'connect', 'watch', 'watch-less', 'watchify'])
