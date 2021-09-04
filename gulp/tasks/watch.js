var {series} = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

function html(){
	browserSync.reload();
	console.log('html changes detected');
}

function refresh(){
	browserSync.reload();
}

function watches(){
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	watch('./app/**/*.html', html);
	watch('./app/assets/styles/**/*.css', series(css));
	watch('./app/assets/scripts/**/*.js', series(scripts, refresh));
}

exports.watcher = watches;
