var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['./public/css/*.css', './public/scripts/*.js', './*.html'], ['html']);
});
