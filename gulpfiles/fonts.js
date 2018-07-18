module.exports=function(){
$.gulp.task('font',function(){
	return $.gulp.src('./app/fonts/*.*')	
	.pipe($.gulp.dest('dist/fonts'));
})
	
};