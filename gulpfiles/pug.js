module.exports = function(){
$.gulp.task('pug',function(){
return $.gulp.src('./app/*.pug')
.pipe($.gp.pug({pretty: true}))
.on('error',$.gp.notify.onError(function(error){
	console.log(error.message);
	return {
		title: 'Pug'
		
	}
}))
.pipe($.gulp.dest('./dist'))
});
};