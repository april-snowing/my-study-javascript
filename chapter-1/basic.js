
// 1
// var 会声明一个全局变量，会造成全局污染,不推荐使用，仅供了解

// 理由1
console.log(window.screenLeft) //输出实际浏览器取屏幕左边的距离
var screenLeft = 0;
console.log(window.screenLeft) // var 声明的screnLeft 覆盖

//理由2
//var会提升到最前面
var web = "april";
function hd() {
    if (false) {
        var web = "gao"; //if中也会变量提升
    }
    console.log(web)  // undefined
}
hd();
//变量提升
//var a = 1..包含 1.变量的定义  2.变量的复制
// 变量提升，就是解析器先解析代码，把变量的定义升到最前面
console.log(a);  //undefined  定义
var a = 1;
console.log(a);

// 2
// 推荐使用let const,尽量不使用var
a2 = "name";
function hd_2() {
    console.log(a2);  //报错 Uncaught ReferenceError: Cannot access 'a2' before initialization
    let a2 = "gaoxueling" //let 在这个函数内产生了临时性死区，即使前面定义了a2，但是在let声明的作用域内必须先声明后访问
}
hd_2();