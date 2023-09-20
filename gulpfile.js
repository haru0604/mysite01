var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var concat = require("gulp-concat");
var gcmq = require("gulp-group-css-media-queries");
var gulp = require("gulp");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
const sass = require("gulp-dart-sass");
var sassGlob = require("gulp-sass-glob");
var ejs = require("gulp-ejs");
var fs = require("fs");
var htmlSrc = "./src/ejs/**/*.ejs";
var sassSrc = "./src/css/**/*.scss";
var jsSrc = "./src/js/**/*.js";
const imagemin = require("gulp-imagemin");
var copySrc = [
  "./src/**/*+(.png|.jpeg|.jpg|.gif|.svg|.ico|.mp4|.pdf)",
  "./src/**/*.css",
  "./src/**/*.html",
  "./src/**/*.php",
];

// ejs template
gulp.task("ejs", function (done) {
  const json = JSON.parse(fs.readFileSync("src/ejs/meta/meta.json"));
  gulp
    .src([htmlSrc, "!" + "./src/ejs/**/_*.ejs"])
    .pipe(
      ejs(
        {
          json,
        },
        {}
      )
    )
    .pipe(
      rename({
        extname: ".html",
      })
    )
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream());
  done();
});

// sass
gulp.task("styles", function () {
  return gulp
    .src(sassSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError("<%= error.message %>"),
      })
    )
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return (
    gulp
      .src(jsSrc)
      .pipe(concat("script.js"))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      // .pipe(uglify({
      //   comments: /^!/
      // }))
      .on("error", function (e) {
        console.log(e);
      })
      .pipe(gulp.dest("./public/js"))
      .pipe(browserSync.stream())
  );
});

// 画像の圧縮と移動
gulp.task("images", function () {
  return gulp
    .src("./src/images/**/*.{png,jpg,jpeg,gif,svg}")
    .pipe(imagemin())
    .pipe(gulp.dest("./public/images"));
});

gulp.task("copy", function () {
  return gulp
    .src(copySrc)
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./public",
    open: true,
  });

  // gulp.watch("./public/*.html", ['bs-reload']);
  gulp.watch(htmlSrc, gulp.series(gulp.parallel("ejs")));
  gulp.watch(sassSrc, gulp.series(gulp.parallel("styles")));
  gulp.watch(jsSrc, gulp.series(gulp.parallel("scripts")));
  gulp.watch(
    "./src/images/**/*.+(jpg|jpeg|png|gif|svg)",
    gulp.series("images")
  );
});

gulp.task("default", gulp.series(gulp.parallel("watch")));

gulp.task("build", gulp.series(gulp.parallel("styles", "scripts", "images")));
