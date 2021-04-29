/** 
 * 1.工厂模式
 * 对象无法识别
 * */  
function createPerson(name) {
    const o = new Object();
    o.name = name;
    o.getName = function(){
        return this.name;
    }
    return o;
}
const person = createPerson("小王")
// 所有实例的原型都指向Object
console.log(Object.getPrototypeOf(person))
console.log(person.constructor === Object)

/** 
 * 2.构造函数模式
 * 对像可以被识别
 * 每次创建实例，方法都会被创建一次
 * */  
function Person(name) {
    this.name = name;
    this.getName = function(){
        return this.name;
    }
} 
const p1 = new Person("小一")
console.log(p1 instanceof Person)
console.log(p1.constructor === Person)

/** 
 * 3.原型模式
 * 所有属性和方法都共享
 * 不能初始化参数
 * */
function Person(name){
    
}
Person.prototype = {
    constructor: Person,
    name: "小二",
    getName: function(){
        return this.name;
    }
}

/** 
 * 4.组合模式 使用最广泛的方式
 * 私有和共享的分开
 * 但是分装性不够
*/
function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    getName: function(){
        return this.name
    }
}

/** 
 * 5.寄生构造函数模式
 * 实例不能指向构造函数
 * 在特殊情况下使用
 * */ 
function Person(name) {
    const o = new Object;
    o.name = name;
    o.getName = function(){
        return this.name
    }
    return o;
}
const p2 = new Person("小五")
console.log(p2 instanceof Person)
console.log(p2 instanceof Object)

/** 
 * 6.稳妥构造函数模式
 * 适用于一些安全的环境中
 * 方法不使用this
 * 创建对象不使用new
 * 无法识别对象类型
*/
function person(name) {
    var o = new Object();
    o.sayName = function(){
        console.log(name)
    }
}
const p3 = person("小七")