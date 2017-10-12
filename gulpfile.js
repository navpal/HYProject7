const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

//a task to compile our sass
gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles'));
});

//a task to compile our javascript
gulp.task('scripts', () => {
	return gulp.src('./dev/scripts/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/scripts'));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: '.'
  })
});

//a task to watch all of my other tasks
gulp.task('watch', () => {
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/scripts.js', ['scripts']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['browser-sync', 'styles', 'scripts', 'watch']);