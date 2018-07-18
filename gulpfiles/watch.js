module.exports=function(){
	$.gulp.task('watch',function(){
		$.gulp.watch('./app/css/*.scss', $.gulp.series('sass-min'));
		$.gulp.watch('./app/*.pug',$.gulp.series('pug-min'));
		
		$.gulp.watch('./app/scripts/*.js',$.gulp.series('js-concat'));
		
	});
};