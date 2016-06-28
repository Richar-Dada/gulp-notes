var gulp = require('gulp');
var jsmin = require('gulp-uglify');

gulp.task('jsmin',function(){
	gulp.src('js/index.js')
		.pipe(jsmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('jsmin2',function(){
	gulp.src('js/index.js')
		.pipe(jsmin({
			mangle : true, //类型：Boolean默认true  是否修改变量名
			//mangle : {except:['require','exports','module','$']} 排除混淆关键字
			compress : true, //类型 Boolean默认true 是否完全压缩
			preserveComments : 'all' //保留所有注释
		}))
		.pipe(gulp.dest('dist'));
})