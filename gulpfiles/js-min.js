module.exports=function(){
$.gulp.task('js-min',function(){
return $.gulp.src('./dist/js/all.js')
	.pipe($.minify())
	.pipe($.gulp.dest('./dist/js'));

})	
};