module.exports=function(){
$.gulp.task('js-concat',function(){
	return $.gulp.src('./app/scripts/*.js')
	.pipe($.concat('all.js'))
	//.pipe($.minify())
	.pipe($.gulp.dest('./dist/js'));
	
	
})	
};