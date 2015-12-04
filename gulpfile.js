var gulp = require('./gulp')([
  'browserify',
  'connect',
  'html',
  'less',
  'watch-less',
  'watch-browserify',
  'watch'
]);

gulp.task('build', ['less', 'browserify']);
gulp.task('default', ['build', 'connect', 'watch', 'watch-less', 'watch-browserify'])
gulp.task('server', ['build', 'connect', 'watch', 'watch-less', 'watch-browserify'])
