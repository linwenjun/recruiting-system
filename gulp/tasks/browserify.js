var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify('./source/scripts/index.js')
      .bundle()
      .pipe(source('index.js'))
      .pipe(gulp.dest('./public/scripts/'));

  browserify('./source/scripts/logon.js')
      .bundle()
      .pipe(source('logon.js'))
      .pipe(gulp.dest('./public/scripts/'));

  return browserify('./source/scripts/start.js')
      .bundle()
      .pipe(source('start.js'))
      .pipe(gulp.dest('./public/scripts/'));
});
