var path = require('path');
var gulp = require('gulp');

var debug = require('gulp-debug');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('clean', function () {
    return $.del(['dist/']);
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(debug())
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('bsgridCacheHtml.js', {
            module: 'bsgrid.tpls',
            root: 'template'
        }))
        .pipe(gulp.dest('.tmp/'));
});

gulp.task('css', function () {
    return gulp.src('src/*.css')
        .pipe(debug({title: 'css'}))
        .pipe($.sourcemaps.init())
        .pipe($.minifyCss({ processImport: false }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist'));
});


gulp.task('build', ['html', 'css'], function () {

    var errors = function(title) {
        'use strict';

        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    };


    //js
    return gulp.src([ '.tmp/*.js', 'src/*.js'])
        .pipe(debug({title: 'js'}))
        .pipe($.sourcemaps.init())
        .pipe($.concat('bsgrid.js'))
        .pipe($.ngAnnotate())
        .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', errors('Uglify'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe($.size({ title: 'dist/', showFiles: true }));
});

