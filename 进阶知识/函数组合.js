const curry = require("./函数柯里化");
/** 
 * 函数组合：将多个函数组合成一个函数，让代码从右向左执行
*/
function toUpperCase(name) {
    return name.toUpperCase();
}

function hello(name) {
    return `Hello ${name}`;
}

function greet(name) {
    return hello(toUpperCase(name))
}

/** 
 * greet函数可以用toUpperCase, hello这两个函数组个起来创建
 * 先创建一个第一版的组合函数
 * */ 
function compose1(f, g) {
    return function(){
        return f(g.apply(this, arguments))
    }
}

const greet1 = compose1(hello, toUpperCase);
console.log(greet1('qzw'))

/** 
 * 但是第一版组合函数只支持两个函数组合，
 * 第二版组合函数 支持多个
 * */
function compose() {
    const args = arguments;
    const start = arguments.length - 1;
    return function() {
        let i = start;
        let result = args[start].apply(this, arguments);
        while(i--) {
            result = args[i].call(this, result);
        }
        return result;
    }
}

const greet2 = compose(hello, toUpperCase);
console.log(greet2('zll'))

/** 
 * pointfree是指函数无需知道参数是什么样的
 * 实现pointfree，可以先定义基本运算，因为可以封装起来复用
 * 使用通用的函数，组合出复杂的运算
 * 上层运算不要直接操作数据，通过底层函数处理
 * */
// function initials(name) {
//     return name.split(" ").map(compose(toUpperCase, head)).join(".")
// }

// pointfree
// 先定义基本函数
const split = curry(function(separator, str){
    return str.split(separator)
});
function head(str) {
    return str.slice(0, 1);
}
const join = curry(function(separator, arr){
    return arr.join(separator);
})
const map = curry(function(fn, arr) {
    return arr.map(fn)
});

const initials = compose(join('.'), map(compose(toUpperCase, head)), split(" "));

console.log(initials("zs ls ww mz"))