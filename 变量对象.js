/** 
 * 每个执行上下文都会包含三个属性
 * 1.变量对象（VO）
 * 2.作用链
 * 3.this
 * 
 * 变量对象是与上下文相关的数据作用域，存储了上下文中定义的变量和函数声明
 * 全局上下文中的变量对象就是全局对象
 * 函数执行上下文的变量对象是活动对象，在进入函数执行上下文的时候，以arguments初始化激活
 * 
 * 执行上下文会分为两个阶段执行： 
 * 1.进入执行上下文
 * 2.执行代码
 * 
 * 进入执行上下文时的变量对象包括
 * 1.函数所有的形参 arguments
 * 2.变量声明
 * 3.函数声明
 * 代码执行的时候会根据代码更新变量对象的值
 * */
/** 
 * 下面这段代码在进入执行上下文时候的变量对象
 * AO = {
 *  arguments:{
 *      0: 1,
 *      length: 1
 *  },
 *  a: 1,
 *  b: undefined,
 *  c: refenerced to function c() {}
 *  d: undefined
 * }
 * 
 * 代码执行时
 * AO = {
 * arguments:{
 *      0: 1,
 *      length: 1
 *  },
 *  a: 1,
 *  b: 3,
 *  c: refenerced to function c() {}
 *  d: refenerced FunctionExpression "d"
 * }
 * */  
function foo(a) {
    var b = 2;
    function c() {}
    var d = function () {}
    b = 3;
}
foo(1)
