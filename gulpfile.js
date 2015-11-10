var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var ejs = require("gulp-ejs");

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

gulp.task('watch-ejs', function() {
  gulp.watch(['./templates/**/*.ejs'], ['ejs'])
})

gulp.task('build', ['ejs', 'less', 'browserify']);
gulp.task('default', ['connect', 'watch', 'watch-less', 'watch-ejs'])
