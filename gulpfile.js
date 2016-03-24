const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
	return gulp.src(['src/server/**/*.js','src/server/app.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('src/lib'));
});
