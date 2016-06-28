var gulp = require('gulp');
var connect = require('gulp-connect');

//监听index文件夹里的文件，有变化就调用html任务
gulp.task('watch',function(){
	gulp.watch(['index/*.html'],['html']);
})

//开启服务器任务
gulp.task('connect',function(){
	connect.server({
		root:'index',//设置哪个文件夹是根目录
		livereload : true //设置能否刷新
	});
});

gulp.task('html',function(){
	gulp.src(['index/*.html'])
		.pipe(connect.reload());
});

//任务调用入口，命名为 default 时，在命令行输入gulp就可以
gulp.task('default',['connect','watch']);