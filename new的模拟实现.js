/** 分以下四步：
 * 创建对象
 * 对象原型执行构造函数原型
 * 执行构造函数
 * 返回对象
 * */ 

function objectFactory() {
    const obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype
    const res = Constructor.apply(obj, arguments);
    return typeof res === 'object' ? res : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("测试1", 11);
console.log(person1)

const person2 = objectFactory(Person, "小王", 12);
console.log(person2)