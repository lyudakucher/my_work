/**
 * Created by air on 01.09.16.
 */
var gulp = require('gulp');

gulp.task('build',
    [
        'scss',
        'nunjucks',
        'imagemin',
        'imagemin-pic',
        'copy'
    ]
);