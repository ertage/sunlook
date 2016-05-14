'use strict';

var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
  useref = require('gulp-useref'),
  server = require('gulp-server-livereload'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify');

var debug = require('gulp-debug');

gulp.task('styles', function () {
  return gulp.src('./src/stylus/main.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    //.pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    //.pipe(rename({suffix: '.min'}))
	  .pipe(gulp.dest('./dist/css'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*.*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('html', function() {
  return gulp.src('src/app/**/*.html')
      .pipe(gulp.dest('dist/app'));
});

gulp.task('watch', function() {
   gulp.watch('./src/**/*.*', ['dist']);
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('dist', ['styles', 'fonts', 'images', 'html'], function () {
    return gulp.src('src/index.html')
        .pipe(useref({ searchPath: ['src', 'dist', '.'] }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist', 'watch', 'webserver']);
