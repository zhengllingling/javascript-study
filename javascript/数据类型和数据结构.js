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
Object.is() // 同值相等算法 