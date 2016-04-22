const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// use eslint check style
gulp.task('eslint', () => gulp.src(['**/*.js', '!node_modules/**', '!src/public/bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
