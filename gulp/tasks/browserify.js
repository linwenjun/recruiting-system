var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');

gulp.task('browserify', function(done) {
    glob('./source/scripts/*.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            var a = browserify({
              entries: [entry],
              debug: true
            })
            .transform('babelify', {presets: ['es2015', 'react']})
            .bundle();

            return a.pipe(source(entry))
                    .pipe(buffer())
                    .pipe(sourcemaps.init({loadMaps: true}))
                    .pipe(uglify())
                    .pipe(sourcemaps.write('./'))
                    .pipe(rename(function(path) {
                      path.dirname = "";
                    }))
                    .pipe(gulp.dest('./public/scripts/'));
        });
        es.merge(tasks).on('end', done);
    })
});
