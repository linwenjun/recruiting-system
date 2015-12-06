var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');

gulp.task('browserify', function(done) {

  var needUglify = process.env.NODE_ENV === 'production'
  console.log(needUglify ? "true" : 'false');
  glob('./source/scripts/*.js', function(err, files) {
    if (err) done(err);

    var tasks = files.map(function(entry) {

      var opts = {
        entries: [entry],
        debug: !needUglify
      };

      return browserify(opts)
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source(entry))
        .pipe(gulpif(needUglify, buffer()))
        .pipe(gulpif(needUglify, uglify()))
        .pipe(rename(function(path) {
          path.dirname = "";
        }))
        .pipe(gulp.dest('./public/scripts/'));
    });

    es.merge(tasks).on('end', done);
  })
});
