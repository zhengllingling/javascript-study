/** 
 * 在ES6前 js基本数据类型有Null Undefined String Number Boolean Object
 * 判断数据类型的方式有以下几种 
*/

// 1.typeof 可以区分基本数据类型 还可以识别出function类型 但是不封区分Null和Object 都返回object

typeof null;
typeof undefined;
typeof "11"
typeof 12
typeof true
typeof { a: 1}

// 2.Object.prototype.toString 方法可以区分null和Object类型数据 
// 它能区分js内部所有自带的类型，会返回一个以[object加class]形式的字符串，其中class就是类型
// 但是它不能区分自定义类型
// 有浏览器兼容性问题 不同浏览器返回的结果可能不同
Object.prototype.toString.call(null) // [Object Null]
Object.prototype.toString.call(undefined) // [Object Undefined]
Object.prototype.toString.call("11") // [object String]
Object.prototype.toString.call(12) // [object Number]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call({a: 11}) // [object Object]
Object.prototype.toString.call(Math) // [object Math]

function Person(name) {
    this.name = name;
}
var p = new Person("测试");
Object.prototype.toString.call(p); // [object Object]

// 根据上面两个方法生产第一版判断类型的函数
function type1(val) {
   if(typeof val === "object") {
        var str = Object.prototype.toString.call(val).split(" ")[1];
        return str.slice(0, str.length - 1).toLowerCase();
   }
   return typeof val;
}

// 3. instanceof 来判断Object是具体哪种类型

console.log(p instanceof Person) // true