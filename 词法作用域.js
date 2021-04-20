/** 
 * 作用域是指对变量的访问权限
 * JavaScript采用的是词法作用域，也就是说函数作用域在函数定义的时候就决定了
 * EStack = [
 *  globalContext
 * ]
 * foo.[[scope]] = {
 *  globalContext.VO
 * }
 * bar.[[scope]] = {
 *  globalContext.VO
 * }
 * EStack = [
 *  barContext,
 *  globalContext
 * ]
 * barContext = {
 *  AO: {
 *      arguments: {
 *         length: 0
 *      },
 *      value: 2
 *  }
 *  scope: [AO, bar[[scope]]]
 * }
 * EStack = [
 *  fooContext,
 *  barContext,
 *  globaleContext
 * ]
 * fooContext = {
 *  AO: {
 *      arguments: {
 *          length: 0
 *      } 
 *  },
 *  scope: [AO, foo[[scope]]]
 * }
 * EStack.pop() ==> [
 *  barContext,
 *  globaleContext
 * ]
 * 
 * EStack.pop() ==> [
 *  globaleContext
 * ]
 * 
 * */

const value = 1;
function foo() {
    console.log(value)
}
function bar() {
    const value = 2;
    foo();
}
bar();

/** 
 * 下面两段代码是典型的词法作用域的例子
 * 因为函数作用域在函数定义的时候就决定了
 * 所以下面两段代码返回的都是local scope
 * */ 

var scope = "global scope"
function checkscope() {
    var scope = "local scope"
    function f() {
        return scope;
    }
    return f();
}
console.log(checkscope())

var scope = "global scope"
function checkscope() {
    var scope = "local scope"
    function f() {
        return scope;
    }
    return f;
}
console.log(checkscope()())