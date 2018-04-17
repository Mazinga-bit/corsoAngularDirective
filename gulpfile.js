var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cleanCSS = require('gulp-clean-css');

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8080
    });
});

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./dev/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(minify-css())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
    gulp.watch('./dev/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['connect','watch']);