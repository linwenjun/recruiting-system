var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./public/css/main.css', './index.html'], ['html']);
});

gulp.task('less', function() {
  gulp.src('./source/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch-less', function() {
  gulp.watch(['./source/less/*.less'], ['less'])
})

gulp.task('build', ['less'])
gulp.task('default', ['connect', 'watch', 'watch-less'])
