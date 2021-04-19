/** 
 * 构造函数的property属性指向构造函数实例的原型
 * JavaScript中每个对象在创建的时候都会链接与之关联的另一个对象，这个对象就是原型，每个对象都会继承原型中的属性
 * 实例的__proto__属性也指向实例原型
 * 实例原型的contrustor指向构造函数
 * */  
function Person(name) {
    this.name = name;
}
Person.prototype.name = "小文";
const person1 = new Person("小明");

console.log(Person.prototype === person1.__proto__)
console.log(Person.prototype.constructor === Person)

// 读取实例的属性，如果找不到就会查找实例的原型，还找不到就会找原型的原型，一直向上查找，直到最顶层为止 -这个关系指向就是原型链

console.log(person1.name);
delete person1.name
console.log(person1.name)

// 实例中是没有constuctor属性，读取的原型中的属性
console.log(person1.constructor === Person)

// __proto__ 绝大多浏览器都支持这个非标准访问属性的方法，但是他不是来自于Person.prototype 而是来自于Object.prototype 
// 访问obj.__proto__可以理解为返回了Object.getPrototypeOf(obj)
