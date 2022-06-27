// 1. new Array
// let arr = new Array(1, 2, 3, 4, 5, 6, 7);   // [1, 2, 3, 4, 5, 6, 7]
//只传一个变量，表示创建长度为该变量的每个值为undefined的数组
// let arr1 = new Array(1)  // [empty]


// 2. Array.of
// let arr = Array.of(1); // [1]  正常创建数组
// 3.  [1,2,3] //字面量

// 类型判断和转换 Array.isArray
let arr = [1, 2, 3, 4]
//转换字符串，String(arr)  arr.toString()  arr.join("|")
//把具有length属性的类型转换成数组

//console.log("student,study".split(","));  //) ['student', 'study']
//console.log(Array.from("student"));  //) ['student', 'study']
let obj = {
    0: "gaoxueling",
    1: "guochengyu",
    length: 2
}
//console.log(Array.from(obj));

let div = document.getElementsByTagName("div");
let text = Array.from(div, function (item) {  //DOM 使用数组方法1
    return item.innerHTML
});

Array.prototype.map.call(div, (item) => {
    console.log(item)   // DOM 使用数组方法2
})

// ... 运算符
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1)
console.log(arr2)
console.log([...arr1, ...arr2])
console.log([...div])
let divs = [...div]; // DOM 使用数组方法3
divs.map(item => console.log(item))