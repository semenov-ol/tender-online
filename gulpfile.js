const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require('gulp-sass');
const browserSync = require("browser-sync").create();
const tildeImporter = require("node-sass-tilde-importer");
const autoprefixer = require('gulp-autoprefixer');


gulp.task("sass", function (done) {
  gulp
    .src("app/scss/**/*.scss")
    .pipe(
      sass({
        importer: tildeImporter,
      }).on("error", sass.logError)
    )
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());

  done();
});

gulp.task("serve", function (done) {
  browserSync.init({
    server: "app/",
  });

  gulp.watch("app/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("app/js/*.js");


    gulp.watch("app/*.html").on("change", () => {
    browserSync.reload();
    done();
  });
  gulp.watch("app/js/*.js").on("change", () => {
    browserSync.reload();
    done();
  });

  done();
});

gulp.task("default", gulp.series("sass", "serve"));

gulp.task('build', async function () {
  gulp
      .src(["app/scss/styles.scss", "app/scss/reset.scss"])
      .pipe(
          sass({
            importer: tildeImporter,
          }).on("error", sass.logError)
      ).pipe(gulp.dest('./build/css/'));

  gulp.src('app/index.html').pipe(gulp.dest('./build'));

  gulp.src('app/images/*').pipe(gulp.dest('./build/images'));
});
