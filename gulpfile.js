
global.$ = {
	path: {
		task: require('./gulpfiles/tasks.js')
	},
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	del: require('del'),
	browserSync: require('browser-sync').create(),
	imagemin: require('gulp-imagemin'),
	concat: require('gulp-concat'),
	minify: require('gulp-minify'),
};
$.path.task.forEach(function(taskPath){
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series('clean',$.gulp.parallel('sass-min','pug-min','img','font'),'js-concat','jslib','csslib',$.gulp.parallel('watch','serve')));


