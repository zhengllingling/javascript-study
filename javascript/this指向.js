/** 
 * this在执行的时候确认，在定义的时候不能确认
 * this指向最后调用它的那个对象
 * 全局环境下 非严格模式下 this是window 严格模式下 this是undefined
 * 构造函数中，this执行当前的实例对象
 * 箭头函数不会生成自己的this对象
 * 箭头函数的this指向定义时的外层执行环境的this对象
 * bind/call/apply this执行第一个参数
 * 箭头函数不能用作构造函数
 * 箭头函数没有自己的arguments
 * 箭头函数不能用call、apply、bind改变this
*/
// 1.
function foo() {
    console.log(a);
}
var a = 1;
foo(); // this => window

// 2.
function fn(){
    console.log(this);
}
var obj = {
    fn: fn
}
obj.fn(); // this => obj

// 3.
function Person(name, age){
    this.name = name;
    this.age = age;
}
const p = new Person("tony", 12); // this => p

// 4.
function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {
    a: 1,
    b: 2
}
add.call(o, 3, 4); // this => o 10
add.apply(o, [3, 4]); // this => o 10

let obj = {
    name: 'tony',
    age: 12,
    getName: function () {
        const a = () => { // this => obj
            console.log(this.name)
        }
        a();
    }
};
obj.getName(); // tony