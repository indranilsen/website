var config = require('./gulp_config/config.js');
var gulp = require('gulp');
var exec = require('child_process').exec;
var fs = require('fs');
var autoprefixer = require('gulp-autoprefixer');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var inject = require('gulp-inject');
var argv = require('yargs').argv;
var stream = require('merge-stream');
var stream = require('add-stream');
var cleanCSS = require('gulp-clean-css');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('clean', function() {
	return del([config.prod.main_folder]);
});

gulp.task('img-copy', function(cb) {
	console.log('---------- Images Copy');
	gulp.src(config.img.tasks.src, {read: true})
	.pipe(gulp.dest(config.prod.main_folder+'/'+config.folders.img));
	cb();
});

gulp.task('assets-copy', function(cb) {
	console.log('---------- Assets Copy');
	gulp.src(config.assets.tasks.src, {read: true})
	.pipe(gulp.dest(config.prod.main_folder+'/'+config.folders.assets));
	cb();
});

gulp.task('partials-copy', function(cb) {
	console.log('---------- Partials Copy');
	gulp.src(config.partials.tasks.src, {read: true})
		.pipe(gulp.dest(config.prod.main_folder+'/'+config.folders.partials));
	cb();
});

gulp.task('scripts',['partials-copy','img-copy', 'assets-copy'], function(){
	console.log('---------- scripts');

	gulp.src(config.js.tasks.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat(config.js.concat_file_name()))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest(config.prod.main_folder+'/'+config.folders.js));

});

gulp.task('styles', function () {
	console.log('---------- styles');

	var allToBeMinfied = gulp.src(config.css.tasks.styles)
		.pipe(cleanCSS())
		.pipe(autoprefixer())
		.pipe(concat(config.css.concat_file_name()))
		.pipe(gulp.dest(config.prod.main_folder+'/'+config.folders.css));

});

gulp.task('index',['styles','scripts'] ,function () {
	console.log('---------- index');

	var inject_prepend_css_url = 'css/';
	var inject_prepend_js_url = 'js/';

	var target = gulp.src('./public/' + config.LANDING_PAGE);

	var css_sources = gulp.src(config.css.tasks.styles, {read: true})
						.pipe(concat(inject_prepend_css_url+config.css.concat_file_name()));

	var js_sources = gulp.src(config.js.tasks.scripts, {read: true})
						.pipe(concat(inject_prepend_js_url+config.js.concat_file_name()));

	return target.pipe(inject(css_sources,config.inject.injectOptionsCss))
		.pipe(inject(js_sources,config.inject.injectOptionsJs))
		.pipe(gulp.dest(config.prod.main_folder));
});

gulp.task('nodemon', ['index'], function (cb) {
	var started = false;
	var port = argv.port || 3000;
	var prod = argv.prod  ? argv.prod :'';

	return nodemon({
		script: config.SERVER,
		ext: 'public/js public/html public/css src/js',
		args: ["--port="+ port ,"--prod="+ prod],
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
			gulp.src(config.SERVER)
				.pipe(notify('App Started...'));
		}
	}).on('restart', function(){
		// when the app has restarted
	});
});

gulp.task('start-prod', ['index'], function(cb) {
	exec('pm2 start server.js -- --prod=true', function (err, stdout, stderr) {
		if(err) {
			console.log(err);
		} else if (stderr) {
			console.log(stderr);
		} else {
			console.log(stdout);
		}
	    cb();
	  });
});

gulp.task('stop-prod', function(cb) {
	exec('pm2 stop all; pm2 delete all', function (err, stdout, stderr) {
		if(err) {
			console.log(err);
		} else if (stderr) {
			console.log(stderr);
		} else {
			console.log(stdout);
		}
	    cb();
	  });
});

gulp.task('default', ['nodemon']);
