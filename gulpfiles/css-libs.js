var cssLibs=['node_modules/jquery/dist/jquery.min.js'];
module.exports=function(){
	$.gulp.task('csslib',function(){
		return $.gulp.src(cssLibs)
		.pipe($.concat('libs.css'))
		.pipe($.gulp.dest('dist/css'));
	})
};