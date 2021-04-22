/** 
 * 柯里化：将一个有多个参数的函数转化为一系列使用一个参数的函数的技术
 * 目的是：降低通用性，提高适用性
*/
function sub_curry(fn) {
    const args = Array.prototype.slice.call(arguments,1);
    return function(){
        const newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs);
    }
}

function curry(fn, length) {
    length = length || fn.length;
    const slice = Array.prototype.slice;
    return function(){
        if(arguments.length < length) {
            const combined = [fn].concat(slice.call(arguments))
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments);
        }
    }
}

// /** 
//  * 使用场景
//  * */ 
// const arr = [
//     {
//         name: 1
//     },
//     {
//         name: 2
//     }
// ];

// const names = arr.map(function(item){
//     return item.name
// })

// /** 
//  * 可以转化为以下方式
// */
// function getprops(key, item) {
//     return item[key]
// }

// const getNameProps = curry(getprops, "name")

// const names1 = arr.map(getNameProps)

// console.log(names, names1)

module.exports = curry;