/** 
 * 作用域是指对变量的访问权限
 * JavaScript采用的是词法作用域，也就是说函数作用域在函数定义的时候就决定了
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