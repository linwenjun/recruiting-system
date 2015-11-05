var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var ejs = require("gulp-ejs");

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('browserify', function() {
  var b = browserify({
    entries: './source/scripts/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/'));
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
