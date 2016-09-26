var gulp = require('gulp');
var swig = require('gulp-swig');
var sass = require('gulp-sass');
var inlineCss = require('gulp-inline-css');


// compile html file src files to /temp
gulp.task('swig', function() {
  gulp.src('./src/*.html')
  .pipe(swig({ defaults: { cache: false } })) // turn off Swig caching
    .pipe(gulp.dest('./temp/'))
});


//compile sass files to temp as CSS file
gulp.task('sass', function() {
    return gulp.src('./src/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('./temp/'));
});

// compile temp files to /dist
gulp.task('inline', function() {
  return gulp.src('./temp/*.html')
    .pipe(inlineCss({
      applyTableAttributes: true,
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
    }))
    .pipe(gulp.dest('dist/'));
});


// Gulp Watch
gulp.task('watch', function() {
  // gulp.watch('',['']);
  gulp.watch('./src/**/*.html', ['swig']);
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./temp/**/*.**', ['inline']);
});


// default task
gulp.task('default', ['swig', 'sass' , 'inline', 'watch']);
