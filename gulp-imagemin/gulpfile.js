var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');

//普通压缩
gulp.task('imageMin',function(){
	gulp.src('images/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist'));
})

//其他参数
gulp.task('imageMin2',function(){
	gulp.src('images/*.jpg')
		.pipe(imagemin({
			optimizationLevel : 5, //类型：Number 默认：3 取值范围：0-7
			progressive : true, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced : true, //类型：Boolean 默认：false 隔行扫描git进行渲染
			multipass : true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest('dist'));
})

//深度压缩
gulp.task('imageMin3',function(){
	gulp.src('images/*.jpg')
		.pipe(imagemin({
			progressive : true,
			svgoPlugins : [{removeViewBox:false}],
			use : [pngquant()]
		}))
		.pipe(gulp.dest('dist'));
})

//只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片，没有必要压缩所有图片，
//使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取
gulp.task('imageMin4',function(){
	gulp.src('images/*.jpg')
		.pipe(cache(imagemin({
			progressive : true,
			svgoPlugins : [{removeViewBox:false}],
			use : [pngquant()]
		})))
		.pipe(gulp.dest('dist'))
})