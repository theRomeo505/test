var jsLibs=['node_modules/jquery/dist/jquery.min.js'];
module.exports=function(){
	$.gulp.task('jslib',function(){
		return $.gulp.src(jsLibs)
		.pipe($.concat('libs.js'))
		.pipe($.gulp.dest('dist/js'));
	})
};