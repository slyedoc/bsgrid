var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
    return gulp.src('/src/**/*.html')
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('bsgridCacheHtml.js', {
            module: 'bsgrid.tpls',
            root: 'template'
        }))
        .pipe(gulp.dest('dist'));
});