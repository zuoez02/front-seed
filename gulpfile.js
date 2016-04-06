const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('babel', () => gulp.src(['src/server/**/*.js', 'src/server/app.js'])
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('src/lib'))
);

gulp.task('eslint', () => gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
