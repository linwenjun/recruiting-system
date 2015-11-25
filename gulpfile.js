var gulp = require('./gulp')([
  'browserify',
  'connect',
  'ejs',
  'html',
  'less',
  'watch-ejs',
  'watch-less',
  'watch'
]);

gulp.task('build', ['less', 'browserify']);
gulp.task('default', ['connect', 'watch', 'watch-less'])
gulp.task('server', ['connect', 'watch', 'watch-less'])
