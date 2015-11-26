var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');

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