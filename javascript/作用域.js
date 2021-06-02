/** 
 * js采用的是词法作用域也就是静态作用域
 * 即js函数作用域在函数定义的时候就决定了
*/
var a = 1;

function foo() {
    console.log(a)
}

function bar() {
    var a = 2;
    foo();
}

bar(); // 1

/** 
 * 执行上下文栈：当执行到一个函数时，就会创建一个执行上下文，并压入执行上下文栈，函数执行完毕，就从执行上下文栈中弹出
*/
function fun2() {
    console.log("fun2")
}
function fun1() {
    fun2()
}
fun1();
/* 
    EStack.push(globalContext);
    EStack.push(fun1<context>);
    EStack.push(fun2<context>);
    EStack.pop();
    EStack.pop();
*/

/** 
 * 每个执行上下文包含三个属性：
 * 1.变量对象
 * 2.作用域链
 * 3.this
 * 
 * 变量对象是与上下文相关的数据作用域，包含了上下文中定义的变量和函数声明
 * 全局上下文中的变量对象就是全局对象
 * 函数执行上下文中的变量对象就是活动对象，在进入执行上下文中时，以arguments初始化激活
 * 
 * 执行函数分为两个阶段
 * 1.进入执行上下文
 * 2.执行函数
 * 
 * 进入执行上下文时，变量对象包括
 * 1.函数所有的形参 arguments
 * 2.变量声明
 * 3.函数声明
 * 执行代码时，会根据代码更新变量对象的值
 * */ 

function foo(a) {
    var b = 2;
    function c() {}
    var d = function () {}
    b = 3;
}
foo(1)
/* 
    1.进入
    AO = {
        arguments: {
            0:1,
            length: 1
        },
        a: 1,
        b: undefined,
        c: refenced to function (){},
        d: undefined
    }
    2.执行
     AO = {
        arguments: {
            0:1,
            length: 1
        },
        a: 1,
        b: 3,
        c: refenced to function (){},
        d: refenerced FunctionExpression "d"
    }
*/

/** 
 * 作用域链
 * 
 * 查找一个对象，会先从当前上下文的变量对象中找，
 * 如果找不到，就从父级的变量对象中找，
 * 如果还找不到，就从父级的父级的变量对象中找
 * 直到查到全局上下文中的变量对象
 * 这个由多个上下文的变量对象构成的链表就是作用域链
 * 
 * 在词法作用域中讲到：js的函数作用域在函数定义的时候就决定了
 * 是因为函数有一个[[scope]]属性，函数创建时[[scope]]里包含了所有的父变量对象
 * 
 * 函数激活，进入函数上下文，创建AO，就会将AO添加到作用域链最前端
 * scope = [AO].concat([[scope]]);
 * 函数作用域链创建完毕
 * */ 
 var scope = "global scope"
 function checkscope() {
     var scope2 = "local scope";
     return scope2;
 }
 checkscope();
 /* 
    1. checkscope.[[scope]] = [
        globalContext.VO
    ]
    EStack = [
        globalContext
    ]
    2. EStack = [
        checkscopeContext,
        globalContext
    ]
    checkscopeContext = {
        scope: checkscope.[[scope]]
    }
    3. checkscopeContext = {
        AO: {
            arguments: {
                length: 0
            },
            scope2: undefined
        },
        scope: [AO, checkscope.[[scope]]]
    }

    4. checkscopeContext = {
        AO: {
            arguments: {
                length: 0
            },
            scope2: "local scope"
        },
        scope: [AO, checkscope.[[scope]]]
    }
    
    5. EStack = [
        globalContext
    ]
 */