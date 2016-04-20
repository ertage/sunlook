'use strict';

var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	webserver = require('gulp-webserver');

livereload({ start: true })

// gulp.task('default', function () {
// 	return gulp.src('src/app.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('dist'));
// })

// Get one .styl file and render 
gulp.task('styles', function () {
  return gulp.src('./src/stylus/main.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
   gulp.watch('./src/stylus/*.styl', ['styles']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['styles','watch', 'webserver']);
