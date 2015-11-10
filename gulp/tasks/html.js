var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});
