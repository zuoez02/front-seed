const gulp = require('gulp');
const eslint = require('gulp-eslint');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const less = require('gulp-less');
const path = require('path');
const del = require('del');

const mocha = require('gulp-mocha');
const shell = require('gulp-shell');

require('babel-core/register');

// use eslint check style
gulp.task('eslint', () => gulp.src([
  '**/*.js', '!node_modules/**', '!src/public/bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// compile less to css and compress to front-seed.min.css
gulp.task('css', ['less'], () => {
  gulp.src('src/public/stylesheets/css/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('src/public/stylesheets/cssmin'));
  del(['src/public/stylesheets/css/']);
});


gulp.task('less', () => gulp.src('src/public/stylesheets/less/front-seed.less')
  .pipe(less({
    paths: [path.join(__dirname, 'less', 'includes')],
  }))
  .pipe(gulp.dest('src/public/stylesheets/css')));

// test tasks
gulp.task('mocha:unit', () => gulp.src(['test/server/*.spec.js'], { read: false })
  .pipe(mocha({
    reporter: 'mocha-html-reporter',
  }).once('end', () => {
    process.exit();
  }))
);

gulp.task('back:unit', shell.task(['bash node-unit-test.sh']));

gulp.task('back:coverage', shell.task(['bash node-coverage-test.sh']));
