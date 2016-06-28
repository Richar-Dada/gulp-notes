var gulp = require('gulp');
var concat = require('gulp-concat');

//concat 合并文件比较简单，只要设置合并后的名字就好
gulp.task('concat',function(){
	gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'));
});