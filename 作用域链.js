/** 
 * 查找一个变量时，会先从当前上下文的变量对象中找，如果找不到就从父级的变量对象中找，如果还找不到就从父级的父级直到全局上下文的变量对象
 * 这个由多个上下文的变量对象构成的链表就是作用域链
 * 
 * 词法作用域中讲到，函数作用域在函数创建额时候就决定了
 * 因为函数有一个[[scope]]属性，函数创建
 * 里面了函数所有父变量对象
*/

/** 
 * foo[[scope]] = [
 *  globalContext.VO
 * ]
 * bar[[scope]] = [
 *  fooContext.AO,
 *  globalContext.VO
 * ]
 * */ 
function foo(){
    function bar(){

    }
}

/** 
 * 函数激活，进入函数上下文，创建AO，就会将活动对象添加到作用域链前端
 * scope = [AO].concat([[scope]])
 * 作用链创建完毕
*/


var scope = "global scope"
function checkscope() {
    var scope2 = "local scope";
    return scope2;
}
checkscope();
/** 
 * 1. checkscope.[[scope]] = [
 *     globalContext.VO
 *    ]
 * EStack = [
 *  globalContext
 * ]
 * 2.EStack = [
 *  checkscopeContext,
 *  globalContext
 * ]
 * 3.checkscopeContext = {
 *  scope: checkscope.[[scope]]
 * }
 * 4.checkscopeContext = {
 *  AO: {
 *      arguments: {
 *          length:0 
 *      },
 *      scope2: undefined 
 *  },
 *  scope: checkscope.[[scope]]
 * }
 * 5.checkscopeContext = {
 *  AO: {
 *      arguments: {
 *          length:0 
 *      },
 *      scope2: undefined 
 *  },
 *  scope: [AO, checkscope.[[scope]]]
 * }
 * 6.checkscopeContext = {
 *  AO: {
 *      arguments: {
 *          length:0 
 *      },
 *      scope2: "local scope" 
 *  },
 *  scope: [AO, checkscope.[[scope]]]
 * }
 * 7. EStack = [
 *  globalContext 
 * ]
 * */ 

