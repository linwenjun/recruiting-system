var gulp = require('./gulp')([
  'browserify',
  'connect',
  'html',
  'less',
  'watch-less',
  'watch'
]);

gulp.task('build', ['less', 'browserify']);
gulp.task('default', ['build', 'connect', 'watch', 'watch-less'])
gulp.task('server', ['build', 'connect', 'watch', 'watch-less'])
