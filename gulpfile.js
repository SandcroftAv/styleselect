// Run 'gulp' to do the important stuff
var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

var path = require('path');

gulp.task('sass', function () {
    gulp
        .src('./scss/styleselect.scss')
        .pipe(sass({
            paths: ['scss']
        }))
        .pipe(prefixer('last 5 versions', 'ie 9'))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
    gulp
        .src('./scss/main.scss')
        .pipe(sass({
            paths: ['scss']
        }))
        .pipe(prefixer('last 5 versions', 'ie 9'))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

// Watch files and run tasks if they change
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.*', ['sass']);
});

gulp.task('serve', function () {
    connect.server({
        port: 4242,
        livereload: true
    });
});

// The default task (called when you run `gulp`)
gulp.task('default', ['sass', 'watch', 'serve']);

