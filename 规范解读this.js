/** 
 * ECMAScript中还有一种只存在规范中的类型，用于描述底层行为逻辑
 * Reference 包括三个部分
 * 1.base value
 * 2.referenced name
 * 3.strict referenced
 * 
 * (1) base value 是属性所在的对象或者是EnvironmentRecord
 * (2) referenced name 是属性的名称
 * */
var foo = 1;
var fooReference = {
    base: "EnvironmentRecord",
    referenced: 'foo',
    strict: false
}

var foo = {
    bar: function () {
        return this;
    }
};

foo.bar();
var barReference = {
    base: foo,
    referenced: 'bar',
    strict: false
}

/** 
 * 规范中提供了GetBase 和 IsPrototypeReferenced 来获取Reference组成
 * GetBase 返回 reference 的 base value
 * IsPrototypeReferenced 方法 如果base value 就返回 true
 * 
 * GetValue 获取属性真正的值
 * */

/** 
 * 函数调用，确定this的值
 * 1.计算MemberExpression的结果赋值给ref
 * 2.判断ref是不是一个Reference类型
 * （1）ref是reference，并且IsPrototypeReferenced(ref)是true，this为GetBase
 * （2）ref是reference，并且base value 是Environment Record，this为ImplicitThisValue(ref) ImplicitThisValue该函数始终返回 undefined
 * （3）不是reference， this为undefined
 * 
 * 什么是MemberExpression
 * PrimaryExpression  原始表达式 可以参见《JavaScript权威指南第四章》
 * FunctionExpression  函数定义表达式
 * MemberExpression[Expression] 属性访问表达式
 * MemberExpression.IdentifierName 属性访问表达式
 * new MemberExpression Arguments 对象创建表达式
 * */ 
function foo() {
    console.log(this)
}
foo(); // foo

function foo() {
    return function(){
        console.log(this)
    }
}
foo()(); // foo()

var foo = {
    bar: function() {
        return this
    }
}
foo.bar(); // foo.bar
// MemberExpression是()左边部分


var value = 1;
var foo = {
    value: 2,
    bar: function() {
        return this.value;
    }
}
console.log(foo.bar()) 
/** 
 * foo.bar
 * barReference = {
 *  base: foo,
 *  name: "bar",
 *  strict: false
 * }
 * IsPrototypeReferenced(barReference) => true => GetBase(ref) => foo(this) => this.value => 2
 * */ 
console.log((foo.bar)()) // 2
/** 
 * 没有对MemberExpression进行计算，所以结果上面一样
*/
// 在非严格模式下，this指向undefined就是指向全局对象window，所以下面返回的结果都是1
console.log((foo.bar = foo.bar)()) // 1
/** 
 * 有赋值操作 使用了GetValue
 * 根据规范使用了GetValue之后返回就不是reference类型了
 * 所以在严格模式下this为undefined
 * */
console.log((false || foo.bar)()) // 1
// 同样进行了||算法，调用了GetValue() this => undefined
console.log((foo.bar, foo.bar)()) // 1
// 同样进行了逗号操作符，调用了GetValue() this => undefined

function foo() {
    console.log(this)
}

foo(); 
/** 
 * 最基本的情况
 * fooReference = {
 *  base: EnvironmentRecord,
 *  name: "foo",
 *  strict: false
 * }
 * (2)ref是reference，并且base value 是Environment Record，this为ImplicitThisValue(ref) ImplicitThisValue该函数始终返回 undefined
 * 即this => undefind
 * */ 