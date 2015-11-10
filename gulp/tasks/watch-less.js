var gulp = require('gulp');

gulp.task('watch-less', function() {
  gulp.watch(['./source/less/*.less'], ['less'])
})
