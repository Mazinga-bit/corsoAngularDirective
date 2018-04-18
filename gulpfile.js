var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cleanCSS = require('gulp-clean-css'),
    uncss = require('postcss-uncss');


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
    var plugins = [
        uncss({
            html: ['../index.html', 'posts/**/*.html', 'http://example.com']
        }),
    ];
    gulp.src('./dev/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //.pipe(postcss(plugins))
        //.pipe(minify-css())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('uncss', function () {
    var plugins = [
        uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }),
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
    gulp.watch('./dev/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['connect','watch']);