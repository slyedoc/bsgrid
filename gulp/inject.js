'use strict';

var path = require('path');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

var errors = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};


gulp.task('inject', function () {
  var injectStyles = gulp.src(['test/*.css'], { read: false });

  var injectScripts = gulp.src(['test/*.js'])
  .pipe($.angularFilesort()).on('error', errors('AngularFilesort'));

  var injectOptions = {
    ignorePath: ['test'],
    addRootSlash: false
  };

  return gulp.src('test/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep({
      exclude: [],
      directory: 'bower_components'
    }))
    .pipe(gulp.dest('test'));
});
