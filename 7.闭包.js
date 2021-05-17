/** 
 * 闭包：能够访问自由变量的函数
 * 自由变量：在函数中使用，但既不是函数参数又不是函数局部变量的变量
 * 
 * 从技术角度说： JavaScript中的所有函数都是闭包
 * 从实践角度说，满足下面两条才是闭包：
 * （1）即使创建它的上下文销毁，它仍存在
 * （2）在代码中引用了自由变量
 * */

// var data = [];
// for(var i = 0; i < 3; i++) {
//     data[i] = function() {
//         console.log(i);
//     }
// }
// data[0]()
// data[1]()
// data[2]()

var data = [];
for(var i = 0; i < 3; i++) {
    data[i] = (function(i){
        return function() {
            console.log(i);
        }
    })(i)
}
data[0]()
data[1]()
data[2]()

/** 
 * 1.模块封装
 * 2.ES5，在循环中使用闭包，防止取到意外的值
*/