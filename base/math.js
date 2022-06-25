console.log("=================math==================");

//console.log(Math.ceil(0.9));  // 1 向上取整
//console.log(Math.floor(0.9))  // 0 向下取整
//console.log(Math.random())  // (0 - 1) 随机数

// [0 - 5]
//console.log(Math.floor(Math.random() * (5 + 1)));

// [0 - 5]
// console.log(2 + Math.floor(Math.random() * (5 - 2 + 1)));



function getCustomRandom(start, end) {
    //[start ,end]  
    return start + Math.floor(Math.random() * (end - start + 1))
}
// console.log(getCustomRandom(5, 8));

let student = ["张三", "李四", "赵云", "王五"];
console.log(student[getCustomRandom(0, 3)])