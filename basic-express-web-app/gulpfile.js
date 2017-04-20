var gulp = require('gulp')
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');

gulp.task('scss', function() {
	return gulp.src('./src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
	.pipe(livereload());
})

gulp.task('js', function() {
	return gulp.src('./src/js/main.js')
	.pipe(browserify({
		insertGlobals : true,
		debug : !gulp.env.production
	}))
	.pipe(gulp.dest('./dist/js'))
	.pipe(livereload());
})

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./*.html').on('change', function() {
		livereload.reload()
	});
	gulp.watch('./src/scss/*.scss', ['scss']);
	gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['watch']);
