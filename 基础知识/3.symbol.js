/** 
 * ES6引入的一种原始数据类型
 * Symbol代表独一无二的值
 * 在ES5中，对象的键值一般都只能为字符串类型的，但是现在也可以为Symbol类型的
 * 当你想为一个对象添加一个属性，但不确定属性是否会冲突，就可以使用Symbol类型,
 * 还可以用作常量的定义，这样就能确保常量永远不会与其他值相同
 * Symbol生成的是一种原始数据类型，而不是对象，所以不能使用new
*/
let s = Symbol(); // s就代表了一个独一无二的值
// Symbol传入的参数是对Symbol的描述
let s1 = Symbol("foo");
let s2 = Symbol("foo");
console.log(s1 === s2); // false

// Symbol不能与其他值一起运算，会报错

// Symbol用作对象时不能使用点.操作符

// 定义属性时需要放在[]中定义
const obj = {
    [s1]: 111
}
obj[s1]; // 111

/** 
 * Symbol属性名不会被for...in for...of循环
 * 也不会被Object.keys, Object.getOwnPropertyNames, JSON.stringfiy返回
 * 可以使用Object.getOwnPropertySymbols返回所有的Symbols属性
*/

// Symbol.for() 传入相同的参数，创建相同的Symbol值
let s1 = Symbol.for("foo");
let s2 = Symbol.for("foo");
console.log(s1 === s2);

// Symbol.keyFor() 返回Symbol值的字符串描述

const key = Symbol.keyFor(s1) // foo