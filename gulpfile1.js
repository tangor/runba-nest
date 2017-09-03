
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var tslint = require("gulp-tslint");

gulp.task('jslint', () =>
  gulp.src(['./**/*.js', '!node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.report())
);

gulp.task("tslint", () =>
  gulp.src(['./**/*.ts', '!node_modules/**'])
    .pipe(tslint({
      formatter: "verbose",
      extends: "tslint-config-typings"
      }))
    .pipe(tslint.report())
);

gulp.task('compile', () =>

)

gulp.task('schema:sync', () =>

);

gulp.task('run', function () {
  nodemon({
    script: 'app.js',
    ext: 'ts js json',
    execMap: { js: "node --harmony" },
    env: { NODE_ENV: 'development' },
    ignore: [".git", "node_modules/**/node_modules"],
  });
})

// gulp.task('start', ['jslint', 'tslint', 'run']);
gulp.task('start', [ 'tslint', 'run']);
