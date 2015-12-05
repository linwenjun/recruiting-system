var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var watchify = require('watchify');

gulp.task('watchify', function(done) {
  glob('./source/scripts/*.js', function(err, files) {
    if (err) done(err);

    var tasks = files.map(function(entry) {
      var opts = {
        entries: [entry],
        debug: true
      };
      var w = watchify(browserify(opts)
        .transform('babelify', {
          presets: ['es2015', 'react']
        }));

      (function(w, entry) {
        w.on('update', function() {
          var start = new Date().getTime();
          console.log('Start fast build...')
          w.bundle()
            .pipe(source(entry))
            .pipe(rename(function(path) {
              path.dirname = "";
            }))
            .pipe(gulp.dest('./public/scripts/'))
            .on('end', function() {
              console.log('Complete fast build...' + (new Date().getTime() - start) + 'ms');
            });
        })
      })(w, entry)

      return w.bundle()
        .pipe(source(entry))
        // .pipe(buffer())
        // .pipe(sourcemaps.init({
        //   loadMaps: true
        // }))
        // .pipe(uglify())
        // .pipe(sourcemaps.write('./'))
        .pipe(rename(function(path) {
          path.dirname = "";
        }))
        .pipe(gulp.dest('./public/scripts/'));
    });

    es.merge(tasks).on('end', done);
  })
});
