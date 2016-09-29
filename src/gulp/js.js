var gulp = require('gulp');

gulp.task('copy', function() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});
gulp.task('copy', function() {
    return gulp
        .src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('build/css'));
});

gulp.task('copy:watch', function () {
    gulp.watch('src/js/**/*.js', ['copy'])
});