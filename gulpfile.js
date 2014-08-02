var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-ruby-sass');
gulp.task('styles', function(){
    gulp.src('scss/**/*.scss')
        .pipe(sass({
            style:'compressed'
        }))
        .pipe(gulp.dest('app/css/'));
});
gulp.task('uglify', function(){
    gulp.src('js-dev/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});
gulp.task('watch', function(){
    gulp.watch('js-dev/*.js', ['uglify']);
    gulp.watch('scss/**/*.scss', ['styles']);
});
gulp.task('default',['watch']);