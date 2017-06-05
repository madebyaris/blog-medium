//defining base path
var basePaths = {
	node: './node_modules/',
	scss: './assets/css/scss/',
	scripts: './assets/js/src/',
	distAssets: './assets/'
};

// Defining requirements
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var cleanCSS	= require('gulp-clean-css');
var sourcemaps	= require('gulp-sourcemaps');
var browsersync = require('browser-sync');


// Convert sass to css
gulp.task('styles', function (){
	return gulp.src([
		basePaths.node + 'photonkit/sass/photon.scss',
		basePaths.scss + '*.scss'
		])
	.pipe( sass( {style: 'compressed'} ).on('error', sass.logError) )
	.pipe( concat('main.min.css') )
	.pipe(cleanCSS({debug: true}, function(details) {
		console.log(details.name + ': ' + (details.stats.originalSize / 1000) + 'KB' );
		console.log(details.name + ': ' + (details.stats.minifiedSize / 1000) + 'KB' );
	}))
	.pipe( sourcemaps.write() )
	.pipe( gulp.dest( basePaths.distAssets + 'css/' ) );
});
