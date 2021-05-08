/** 
 * 1.let和var
 * let变量只在声明的代码块内有效
*/
{
    let a = 1;
    var b = 2;
}
// console.log(a); // 会报错 a is not defined
console.log(b); // 2

/** 
 * 不存在变量提升
*/
console.log(c); // var会进行变量提升 所以这里输出undefined
var c = 0;

console.log(d); // let不会进行变量提升 所以这里会报错
let d = 1;

/** 
 * 暂时性死区
 * 只要在一个代码块内使用let声明一个变量，这个变量就会绑定当前作用域，不受外界影响
 * let变量只能在声明之后使用, 所以在声明之前，都属于变量的死区
*/

{
    console.log(a);
    let c = 1;
    console.log(c);
    // 以上部分都是a的死区
    let a = 2;
}

/** 
 * 在同一个代码块内不允许重复声明，let重复声明一个变量会报错
*/

/** 
 * 不绑定全局作用域
*/
var a = 1;
window.a; // 1

let test = 3;
window.test; // undefined

/** 
 * 块级作用域
*/

/** 
 * 2.let和const
 * const行为和let类似 只有一个const变量赋值之后就不允许改变了，
 * 所以const变量声明时就要初始化，否则变量的值会一直为undefined，不能修改
 * 实际上const不能改变的不是变量的值，而是变量指向的那个内存地址
*/
const a = 1;
// a = 2; // 报错， 不允许修改

const b = {
    a: 1
};
b.a = 2; // 允许修改， 因为没有改变存储的内存地址
// b = {  // 报错，不允许修改，因为变量存储的内存地址改变了
//     a: 2
// }


