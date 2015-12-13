var gulp = require('gulp');

gulp.task('watch-browserify', function() {
  gulp.watch(['./source/scripts/*.js'], ['browserify'])
})
