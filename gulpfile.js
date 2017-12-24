var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    htmlmin      = require('gulp-htmlmin');

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
});

gulp.task('minify', function() {
  return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'));
});


// Watch asset folder for changes
gulp.task("watch", ["scss", "minify"], function () {
    gulp.watch("src/scss/**/*", ["scss"]);
    gulp.watch("public/*.html", ["minify"]);
});

// Set watch as default task
gulp.task("default", ["watch"])
