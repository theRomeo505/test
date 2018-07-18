module.exports=function(){
$.gulp.task('serve',function(){
	$.browserSync.init({
		open : false,
		server: './dist'
	});
	$.browserSync.watch('dist',$.browserSync.reload);
});	
};