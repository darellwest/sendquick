var gulp = require('gulp'),
	webpack = require('webpack');

	function wps(err, stats){
		if(err){
			console.log(err.toString());
		}

		console.log(stats.toString());
	}

function scripts(callback){
	webpack(require('./webpack.config.js'), wps);	
	callback();
}

exports.scripts = scripts;