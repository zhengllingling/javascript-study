/** 
 * JavaScript是动态弱类型
 * */ 
// 原始类型

// 1.undefined 声明未定义的变量初始值 
let a;
console.log(a); // undefined

// 2.Boolean 布尔值 true/false

// 3.Number 数值类型 有效值在-2^53-1 ~ 2^53-1之间
+Infinity
-Infinity
+0 === -0 // true
Number.isSafeInteger()
Number.MAX_SAFE_INTEGER // 最大的安全浮点数
Number.MIN_SAFE_INTEGER // 最小的安全浮点数
Number.MAX_VALUE // 最大值
Number.MIN_VALUE // 最小值

Number.isSafeInteger(Number.MAX_VALUE); // false

// 4.String 字符串类型
// es6新增方法
// String.fromCharCode(0x1122)
String.fromCodePoint(0x22909) // code => char
String.raw`a\n${1+1}b`;
// String.codeAt(0)
String.codePointAt(0)
const str = "112233";
str.includes("22")
str.startsWith("11")
str.endsWith("33")
str.repeat(2) // 112233112233
str.padStart()
str.padEnd()
str.trimEnd()
str.trimStart()
str.matchAll
str.replaceAll

// 5.BigInt 用来表示大整数 不能与Number类型一起操作
const a1 = 1n;
const a2 = BigInt(1);
1n === 1 // false
1n == 1 // true

// 6.Symbel 参考基础知识下的symbol.js文件

// 7.null 表示不存在或空值

// 8.Object 一组键值对集合
// es6对象新增方法
/** 
 * 比较方法： 
 * 1. == 会做类型转换
 * 2. === 不会做类型转换 但是-0等于0 NaN不等于NaN
 * */
Object.is() // 同值相等算法 -0不等于0 NaN等于NaN

function Person(name, age){
    this.name = name;
    this.age = age;
}

// typeof 不能区分null和内置类型和用户自定义类型
typeof undefined // undefined
typeof null // object
typeof 1 // number
typeof "aa" // string
typeof Symbol("1") // symbol
typeof 1n // bigint
typeof false // boolean
typeof {} // object
typeof new Date() // object
typeof function(){} // function
typeof new Person("tony", 12) // object

const p1 = new Person("tony", 12);

// Object.property.toString() 可以区分基本类型、引用类型和内置类型 但是不能区分用户自定义类是具体哪一类
// 基本类型没有toString方法可以使用call方法改变toString函数中的this指向，从而使得基本类型也可以使用toString方法
// 调用该方法会返回[object + class]形式的字符串 class就是类型
Object.prototype.toString.call("aa"); // [object String] 
function type(val) {
    if(typeof val === "object") {
        const result = Object.prototype.toString.call(val);
        return result.substring(8, result.length-1).toLowerCase();
    }
    return typeof val;
}
type(new Person("p1")) // Object

// instanceof 判断具体哪一个类型 

p1 instanceof Person // true

/** 
 * 注：typeof安全机制
 * 未定义和未声明变量执行都返回undefined
 * 未声明变量执行typeof不会报错;
*/