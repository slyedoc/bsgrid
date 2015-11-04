'use strict';

var path = require('path');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src('src/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
});
