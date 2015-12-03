var gulp = require('gulp');

gulp.task('watch-less', function() {
  gulp.watch(['./source/scripts/*.js'], ['browserify'])
})
