
module.exports= function(){
$.gulp.task('sass-min', function(){
	return $.gulp.src('./app/css/*.scss')
	.pipe($.concat('all.css'))
	.pipe($.gp.sourcemaps.init())
	.pipe($.gp.sass({outputStyle: "compressed"}))
	.on('error',$.gp.notify.onError({title: 'Style'}))
	.pipe($.gp.autoprefixer({
		browsers: [
			'last 3 version'
		]
		
	}))
	.pipe($.gp.sourcemaps.write())
	.pipe($.gulp.dest('./dist/css'));
});	
}

