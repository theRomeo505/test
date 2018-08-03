module.exports=function(){
module.exports=function(){
	$.gulp.task('img',function(){
		return $.gulp.src('./app/img/*.*')
	.pipe($.gulp.dest('./dist/images'));
	})
   
};