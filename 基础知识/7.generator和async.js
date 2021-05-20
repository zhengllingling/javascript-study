// /** 
//  * generator函数时ES6新增的异步编程方案
//  * 可以把它理解成一个状态机，里面封装了多个内部状态
//  * 会返回一个遍历器对象，所以也可以理解为遍历器对象生成函数，返回的对象可以依次遍历内部的每一个状态
//  * 分段执行
// */

// function * generatorTest(){
//     yield "1"
//     yield "2"
//     yield "3"
//     return "4"
// }

// const data = generatorTest();
// console.log(data.next())
// console.log(data.next())
// console.log(data.next())
// console.log(data.next()) 
// console.log(data.next())

// // let val = {};
// // while(!val.done) {
// //     val = data.next();
// //     console.log(val.value);
// // }

// // for(let value of generatorTest()) {
// //     console.log(value);
// // }

// /** 
//  * yeild表达式就是暂停标志
//  * 只有执行next()之后才会执行yeild后面的表达式
//  * */

// function test() {
//     return new Promise(resolve => {
//         resolve(11);
//     })
// }

// async function *test1() {
//     yield await test()
// }

// const val1 = test1();
// console.log(val1.next());

// /** 
//  * async 自带执行器
//  * 返回Promise对象
// */

// generator的异步编程方式
const fs = require("fs");

function readFile(url){
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', function(err, res){
            if(err){
                console.log(err);
                reject(err);
                return;
            }
            console.log(11);
            resolve(res);
        })
    })
}

// function *generatorReadFile(){
//     yield readFile("./基础知识/5.promise.js");
// }

// const data = generatorReadFile();
// data.next().value.then(res => {
//     console.log(res, "res");
// });
// console.log("33");

// async时generator函数的语法糖 await自定执行器 async函数返回一个Promise对象可以进行链式调用
async function asyncReadFile(){
    const data = await readFile("./基础知识/5.promise.js");
    console.log(data, "data...");
    return 99;
} 
asyncReadFile().then(res => {
    console.log(res, 11);
});
console.log("11111");



