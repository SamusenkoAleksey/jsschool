var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');
    // concatCss = require('gulp-concat-css'),
    // cssmin = require('gulp-cssmin'),



gulp.task('js', function () {
    return gulp.src(['./public/js/Helper.js', './public/js/App.js', './public/js/_components/Iframe.js'])
        .pipe(concat('bundle_js.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function() {
    gulp.watch("./public/js/_components/Iframe.js", ['js']);
    gulp.watch("./public/js/App.js", ['js']);
    gulp.watch("./public/js/Helper.js", ['js']);
});

gulp.task('default', ['js', 'watch']);




// gulp.task('css', function () {
//   return gulp.src('./public/css/*.css')
//     .pipe(concatCss("bundle.css"))
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./build/css/'));
// });