// // 变量提升
// var foo = function() {
//     console.log("foo1")
// }

// foo();

// var foo = function() {
//     console.log("foo2")
// }

// foo();


// // 函数提升
// function foo() {
//     console.log("foo1")
// }

// foo();

// function foo() {
//     console.log("foo2")
// }

// foo();

/** 
 * 当执行到一个函数时，就会生成一个执行上下文，并压入执行上下文栈，函数执行完毕就从执行上下文栈中弹出
 * 执行上下文栈用EStack表示，EStack = []
 * */ 
// 最开始压入一个全局执行上下文 EStack.push(globalContext)
function fun3(){
    console.log("fun3")
}
function fun2(){
    // (3) 执行fun3函数，压入fun3的执行上下文 EStack.push(<fun2> functionContext)
    fun3();
    // （4） fun3函数执行完毕，从执行上文栈中弹出 EStack.pop()
}
function fun1(){
    // (2) 执行fun2函数，压入fun2的执行上下文 EStack.push(<fun2> functionContext)
    fun2();
    // （5） fun2函数执行完毕，从执行上文栈中弹出 EStack.pop()
}
// （1）执行fun1函数，压入fun1的执行上下文 EStack.push(<fun1> functionContext)
fun1();
// （6） fun1函数执行完毕，从执行上文栈中弹出 EStack.pop()
// 接着执行下面的代码，执行上下文栈底部永远有一个全局执行上下文

/** 
 * 上一篇词法作用域中最后有两个函数根据词法作用的定义，两段代码返回的结果是一样的，但是这两段代码所以结果但是还是有点区别，那就是执行上下文栈不一样
 * */ 
// EStack.push(globalContext)
 var scope = "global scope"
 function checkscope() {
     var scope = "local scope"
     function f() {
         return scope;
     }
     // (2) EStack.push(<f> functionContext)
     return f();
     // (3) EStack.pop();
 }
 // (1) EStack.push(<checkscope> functionContext)
 checkscope()
 // (4) EStack.pop()
 
 // EStack.push(globalContext)
 var scope = "global scope"
 function checkscope() {
     var scope = "local scope"
     function f() {
         return scope;
     }
     return f;
 }
// (1) EStack.push(<checkscope> functionContext)
// (2) EStack.pop()
// (3) EStack.push(<f> functionContext)
 checkscope()()
 // (4) EStack.pop()