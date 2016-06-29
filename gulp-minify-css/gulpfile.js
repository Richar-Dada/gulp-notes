
/*使用gulp-minify-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存。
重要：gulp-minify-css已经被废弃，请使用gulp-clean-css，用法一致。*/
var gulp = require('gulp');
var cssmin = require('gulp-clean-css');
var cssbgversion = require('gulp-make-css-url-version');

//基本压缩
gulp.task('cssmin',function(){
	gulp.src('css/index.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
})

gulp.task('cssmin2',function(){
	gulp.src('css/index.css')
		.pipe(cssmin({
			advanced : false, // 类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
			compatibility : 'ie7', // 保留ie7及以下兼容写法 类型：string 默认：'or' [启用兼容模式；'ie7'：IE7兼容模式]
			keepBreaks : true, //类型：Boolean 默认：false [是否保留换行]
			keepSpecialComments : '*' // 保留所有特殊前缀，当你用autofixer生成浏览器前缀，如果不加这个参数，有可能会删除你的部分前缀
		}))
		.pipe(gulp.dest('dist'));
})

gulp.task('cssmin3',function(){
	gulp.src('css/index.css')
		.pipe(cssbgversion()) //给css文件里引用文件加版本号（文件MD5）
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
})
