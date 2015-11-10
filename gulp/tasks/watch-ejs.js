var gulp = require('gulp');

gulp.task('watch-ejs', function() {
  gulp.watch(['./templates/**/*.ejs'], ['ejs'])
})
