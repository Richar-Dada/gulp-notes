var gulp = require('gulp');
var rename = require('gulp-rename');

//名字加上一个时间撮
gulp.task('rename',function(){
	gulp.src('index/*.cfg')
		.pipe(rename(function(path){
			var time = new Date().getTime();
			path.basename += '_' + time;
		}))
		.pipe(gulp.dest('dist'));
})

//设置文件名详细参数
gulp.task('rename2',function(){
	gulp.src('index/*.cfg')
		.pipe(rename({
			dirname : 'main/text/ciao', //文件夹路径
			basename : 'aloha', // 文件名字
			prefix : 'bonjour-', //文件名前缀
			suffix : '-hola', //文件名后缀
			extname : '.md' //文件拓展名
		}))
		.pipe(gulp.dest('dist'));
})