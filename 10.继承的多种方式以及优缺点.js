/** 
 * 1.原型链继承
 * 引用类型属性被所有实例共享
 * 创建子类实例时不能向父类传参
 * */  
function Parent() {
    this.name = ["小一"];
}
Parent.prototype.getName = function() {
    return this.name;
}
function Child() {}
Child.prototype = new Parent();
const c1 = new Child();
c1.name.push("小二")
const c2 = new Child();
console.log(c2.getName())

/** 
 * 2.借用构造函数继承
 * 避免了上面一种的缺点
 * 方法都放在构造函数中，每次创建实例都会创建一次方法
 * */ 
function Parent(name) {
    this.name = name;
}
function Child(name) {
    Parent.call(this, name)
}
const c3 = new Child("小一");
const c4 = new Child("小二")

/** 
 * 3.组合继承
 * 结合了原型继承和借用构造函数继承的优点，最常用的继承方式
*/
function Parent(name){
    this.name = name;
    this.colors = [];
}
Parent.prototype.getName = function(){
    return this.name;
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
const c5 = new Child("小一", 10)
c5.colors.push("red");
c5.getName();
const c6 = new Child("小二", 11);
console.log(c6.colors);
console.log(c6.getName())

/** 
 * 4. 原型式继承
 * 有原型链继承一样的缺点
 * 就是Object.create的模拟实现
*/
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F()
}
const person = {
    name: "11",
    color: []
}
const p1 = createObj(person)
const p2 = createObj(person);
p1.name = "22"
console.log(p2.name)
p1.color.push("yellow")
console.log(p2.color)

/** 
 * 5. 寄生式继承
 * 和借用构造函数一样的缺点，每次创建实例都会创建一次方法
 * */ 
function createObj(o) {
    const obj = Object.create(o);
    obj.sayName = function(){
        console.log(this.name)
    }
    return obj
} 

/** 
 * 6.寄生组合式继承
*/
function Parent(name) {
    console.log(11);
    this.name = name;
    this.colors = []
}
Parent.prototype.getName = function(){
    return this.name;
}
function Child(name, age) {
    Parent.call(this.name, name);
    console.log(33);
    this.age = age;
}
const F = function(){}
F.prototype = Parent.prototype;
Child.prototype = new F();
// Child.prototype = new Parent();
Child.constructor = Child;