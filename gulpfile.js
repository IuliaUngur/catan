var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var processes = {server: null};

// SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});

gulp.task('start:server', function (cb) {
    if(processes.server === null) {            
        processes.server = nodemon({
            script: "dist/server.js",
            ext: "js"
        });
        
        cb();
    }
});

// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/es6/dev/src/testing/shims_for_IE.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js'
] 

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
    
    //Let's copy our images dependencies into a dist/images
    var copyImagesDependencies = gulp.src(['client/images/**/*.*'], {base:'./client/images'})
        .pipe(gulp.dest('dist/images'))
        
    //Let's copy our style dependencies into a dist
    var copyStyleDependencies = gulp.src(['client/css/**/*.*'], {base:'./client/css'})
        .pipe(gulp.dest('dist/css'))
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyImagesDependencies, copyStyleDependencies, copyIndex];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});

gulp.task('build', function(callback){
    console.log('Build STARTED -------------------------------- ');
    runSequence('clean', 'build:server', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build', 'watch']);

gulp.task('watch',['build'], function () {
    gulp.watch(['client/**/*.*','server/**/*.*'] , ['build']);
});