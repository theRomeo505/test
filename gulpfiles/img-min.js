module.exports=function(){
	$.gulp.task('img-min',function(){
		return $.gulp.src('./app/img/*.*')
	.pipe($.imagemin())
	.pipe($.gulp.dest('./dist/images'));
	})
   
};