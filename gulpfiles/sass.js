
module.exports= function(){
$.gulp.task('sass', function(){
	return $.gulp.src('./app/css/*.scss')
	.pipe($.gp.sourcemaps.init())
	.pipe($.gp.sass({outputStyle: "expanded"}))
	.on('error',$.gp.notify.onError({title: 'Style'}))
	.pipe($.gp.autoprefixer({
		browsers: [
			'last 3 version'
		]
		
	}))
	.pipe($.gp.cssbeautify())
	.pipe($.gp.sourcemaps.write())
	.pipe($.gulp.dest('./dist/css'));
});	
}

