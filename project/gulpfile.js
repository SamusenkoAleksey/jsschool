var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename');

gulp.task('css', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/css/'));
});


gulp.task('js', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function() {
    gulp.watch("./public/css/*.css", ['css']);
    gulp.watch("./public/js/*.js", ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);