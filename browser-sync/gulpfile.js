/**
 * Created by Administrator on 2016/6/26 0026.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

var options = {
    removeComments: true,//Çå³ýHTML×¢ÊÍ
    collapseWhitespace: true,//Ñ¹ËõHTML
    collapseBooleanAttributes: true,//Ê¡ÂÔ²¼¶ûÊôÐÔµÄÖµ <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//É¾³ýËùÓÐ¿Õ¸ñ×÷ÊôÐÔÖµ <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//É¾³ý<script>µÄtype="text/javascript"
    removeStyleLinkTypeAttributes: true,//É¾³ý<style>ºÍ<link>µÄtype="text/css"
    minifyJS: true,//Ñ¹ËõÒ³ÃæJS
    minifyCSS: true//Ñ¹ËõÒ³ÃæCSS
};

gulp.task('html',function(){
    gulp.src('src/index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('startWatch',function(){
    browserSync.init({ //初始化浏览器同步
        server : 'dist', //服务器的根目录
        files : ["src/index.html"] // 监视改变的文件
    });
    gulp.watch('src/index.html',["html"]); //监视index.html文件，有改动就执行html任务
    gulp.watch('dist/index.html').on('change',function(){ 
        //监视dist的index文件，如果有变化刷新浏览器
       browserSync.reload();
    });
});