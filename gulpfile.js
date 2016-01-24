var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var util = require('gulp-util');

gulp.task('less', function() {
    return gulp.src('app/style/less/*.less')
      .pipe(less().on('error', util.log))
      .pipe(gulp.dest('app/style/generated_css'))
});
gulp.task('watch', function() {
    gulp.watch('app/style/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task
