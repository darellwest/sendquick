var {src, dest} = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');
	

function css(){
	return src('./app/assets/styles/*.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	.pipe(dest('./app/temp/styles')).pipe(browserSync.stream());	
}