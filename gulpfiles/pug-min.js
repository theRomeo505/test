module.exports = function(){
$.gulp.task('pug-min',function(){
return $.gulp.src('./app/*.pug')
.pipe($.gp.pug({pretty: false}))
.on('error',$.gp.notify.onError(function(error){
	console.log(error.message);
	return {
		title: 'Pug'
		
	}
}))
.pipe($.gulp.dest('./dist'))
});
};