const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');



function compSass() {
    return gulp
        .src('src/assets/scss/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({cascade: false}))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css'));       
  }

function watch() {
    gulp.watch('src/assets/scss/app.scss', compSass);

}

function minificarImg(){
    return gulp
        .src('src/assets/img/**/*')
        .pipe(imagemin([], {}))
        .pipe(gulp.dest('dist/img'))
}

gulp.task('sass', compSass);
gulp.task('watch', watch);
gulp.task('minificarImg', minificarImg);
gulp.task('default', gulp.series('sass','watch'))