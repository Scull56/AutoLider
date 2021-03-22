const gulp = require('gulp'),
   browserSync = require('browser-sync'),
   sass = require('gulp-sass'),
   cleanCSS = require('gulp-clean-css'),
   autoprefixer = require('gulp-autoprefixer'),
   rename = require("gulp-rename"),
   // imagemin = require('gulp-imagemin'),
   htmlmin = require('gulp-htmlmin');

gulp.task('server', function () {
   browserSync({
      server: {
         baseDir: "src"
      }
   });
   gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
   return gulp.src("src/scss/**/*.+(scss|sass)")
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(rename({ suffix: '.min', prefix: '' }))
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

gulp.task('watch', function () {
   gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel('styles'));
   gulp.watch("src/*.html").on('change', gulp.parallel('html'));
   gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
   // gulp.watch("src/image/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
   return gulp.src("src/*.html")
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
   return gulp.src("src/js/**/*.js")
      .pipe(gulp.dest("src/js"))
      .pipe(browserSync.stream());
});

// gulp.task('images', function () {
//    // return gulp.src("src/image/**/*")
//    //    // .pipe(imagemin())
//    //    .pipe(gulp.dest("src/image"))
//    //    .pipe(browserSync.stream());
// });

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'html'));