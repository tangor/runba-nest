// // 参考：https://github.com/typeorm/typeorm/blob/master/gulpfile.ts
// import * as gulp from 'gulp';

import { Gulpclass, Task, SequenceTask, MergedTask } from "gulpclass";

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const del = require('del');
const tslint = require('gulp-tslint');
// const stylish = require('tslint-stylish');

@Gulpclass()
export class Gulpfile {

  @Task()
  test() {
    console.log("run test.")
  }

  @Task()
  clean(cb: Function) {
    return del(["./build/**"], cb);
  }

  @Task()
  tslint() {
    return gulp.src(["./src/**/*.ts", "./test/**/*.ts", '!node_modules/**'])
      .pipe(tslint())
      .pipe(tslint.report({
        emitError: false
      }))
      .pipe(tslint({
        configuration: "tslint.json"
      }))
  }

  @Task()
  run() {
    nodemon({
      script: 'app.js',
      ext: 'ts js json',
      execMap: { js: "node --harmony" },
      env: { NODE_ENV: 'development' },
      ignore: [".git", "node_modules/**/node_modules"],
    });
  }

  @Task()
  start() {
    this.tslint();
    this.run();
  }
}
