var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');

//gulp.task('browserify', function() {
//  browserify('./source/scripts/index.js')
//      .bundle()
//      .pipe(source('index.js'))
//      .pipe(gulp.dest('./public/scripts/'));
//
//  browserify('./source/scripts/logon.js')
//      .bundle()
//      .pipe(source('logon.js'))
//      .pipe(gulp.dest('./public/scripts/'));
//
//  browserify('./source/scripts/start.js')
//      .bundle()
//      .pipe(source('start.js'))
//      .pipe(gulp.dest('./public/scripts/'));
//
//    browserify('./source/scripts/answer.js')
//        .bundle()
//        .pipe(source('answer.js'))
//        .pipe(gulp.dest('./public/scripts/'));
//
//    browserify('./source/scripts/progress.js')
//        .bundle()
//        .pipe(source('progress.js'))
//        .pipe(gulp.dest('./public/scripts/'));
//
//    return browserify('./source/scripts/dojo.js')
//        .bundle()
//        .pipe(source('dojo.js'))
//        .pipe(gulp.dest('./public/scripts/'));
//
//});

gulp.task('browserify', function(done) {
    glob('./source/scripts/*.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            var a = browserify({ entries: [entry] })
                .bundle();
            var file_index = entry.lastIndexOf('/')+1;
            var new_entry = entry.slice(file_index);
            return a.pipe(source(new_entry))
                .pipe(gulp.dest('./public/scripts/'));
        });
        es.merge(tasks).on('end', done);
    })
});