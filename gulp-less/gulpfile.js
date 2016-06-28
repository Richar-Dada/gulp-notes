var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

//简单的编译less
gulp.task('startLess',function(){
	gulp.src('less/base.less')
	.pipe(less())
	.pipe(gulp.dest('css'));
});

/*-------------华丽分割线------------------*/
//编译多个文件
gulp.task('startLess2',function(){
	//src可以传一个数组的
	gulp.src(['less/base.less','less/index.less'])
		.pipe(less())
		.pipe(gulp.dest('css')); //css将会有两个文件
});

/*-------------华丽分割线------------------*/
//匹配符“！” “*” “**” “{}”
gulp.task('startLess3',function(){
	//匹配less文件夹下所有的less文件
	//除了index.less、base.less两个
	gulp.src(['less/*.less','!less/**/{index,base}.less'])
		.pipe(less())
		.pipe(gulp.dest('css'));//这里只有一个文件
})

/*-------------华丽分割线------------------*/
//调用多模块
gulp.task('startLess4',function(){
	gulp.src('less/index.less')
		.pipe(less())
		.pipe(cssmin({compatibility:'ie7'}))//兼容IE7及以下需设置compatibility属性
		//.pipe(cssmin()) 
		.pipe(gulp.dest('css'));
})

/*-------------华丽分割线------------------*/
//当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
gulp.task('startLess5',function(){
	gulp.src('less/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'));
})

/*-------------华丽分割线------------------*/
//监听less文件变化，自动编译
gulp.task('watchLess',function(){
	gulp.watch('less/*.less',['startLess']);
})

/*-------------华丽分割线------------------*/
//异常处理
gulp.task('testLess', function () {
    gulp.src('less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('css'));
});
gulp.task('testWatch', function () {
    gulp.watch('less/*.less', ['testLess']);
});