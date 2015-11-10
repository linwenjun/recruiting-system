var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('./source/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
})
