const { src } = require('vinyl-fs');
const { series, parallel, dest, watch} = require ('gulp');

const
    //html
    gulp = require('gulp'),
    pug  = require('gulp-pug'),
    //css
    sourcemaps =require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer =require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

    //html
    function htmlTask(){
        return src("stage/html/*.pug")
        .pipe(pug({pretty:true}))
        .pipe(dest('dest'))
        .pipe(livereload())
    }
    //css
    function CssTask() {
        return src(["stage/css/**/*.css" , "stage/css/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(minify())
        .pipe(dest('dest/css'))
        .pipe(livereload())
    }  
    function jsTask() {
        return src("stage/js/*.js")
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(dest('dest/js'))
        .pipe(livereload())
    }

    exports.default = function(){
        require("./server.js");
        livereload.listen();
        gulp.watch("stage/html/**/*.pug", parallel(htmlTask));
        gulp.watch(["stage/css/**/*.css" , "stage/css/**/*.scss"], parallel( CssTask));
        gulp.watch(["stage/js/*.js"], parallel( jsTask));


    }; 