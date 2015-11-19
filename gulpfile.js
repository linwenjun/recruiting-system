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

gulp.task('build', ['ejs', 'less', 'browserify']);
gulp.task('default', ['connect', 'watch', 'watch-less', 'watch-ejs'])
gulp.task('server', ['connect', 'watch', 'watch-less', 'watch-ejs'])
