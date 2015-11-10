var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var ejs = require("gulp-ejs");

gulp.task('build', ['ejs', 'less', 'browserify']);
gulp.task('default', ['connect', 'watch', 'watch-less', 'watch-ejs'])
