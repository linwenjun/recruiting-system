var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  var b = browserify({
    entries: './source/scripts/index.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('index.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/'));
});
