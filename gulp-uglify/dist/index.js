var fibonacci=function(i){return 0===i?0:1===i?1:fibonacci(i-1)+fibonacci(i-2)};if(require.main==module){
//如果直接执行main.js，则进入此处
//如果main.js被其他文件require，则此处不会执行
var n=Number(process.argv[2]);console.log("fibonacci("+n+") is",fibonacci(n))}