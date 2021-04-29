/** 
 * 执行上下文具体处理过程
 * */ 
// 第一段
var scope = "global scope"
function checkscope() {
    var scope = "local scope"
    function f() {
        return scope;
    }
    return f();
}
checkscope()
/** 
 * (1) EStack = [globalContext]
 * (2) globalContext = {
 *      VO: [global],
 *      scope: [globalContext.VO],
 *      this: globalContext.VO
 *     }
 * (3) checkscope[[scope]] = {
 *      globalContext.VO
 *     }
 * (4) EStack = [checkscopeContext, globalContext]
 * (5) checkscopeContext = {
 *      AO: {
 *          arguments: {
 *              length: 0 
 *          },
 *          scope: 'local scope',
 *          f: referenced to function(){} 
 *      }
 *      scope：[AO, globalContext.VO]
 *      this: undefined
 *     }
 * (6) f[[scope]] = {
 *      checkscopeContext.AO,
 *      globalContext.VO
 *     }
 * (7) EStack = [fContext, checkscopeContext, globalContext]
 * (8) fContext = {
 *      AO: {
 *          arguments: {
 *              length: 0
 *          }
 *      },
 *      scope: [AO, checkscopeContext.AO, globalContext.VO],
 *      this: undefined
 *     }
 * (9) EStack = [checkscopeContext, globalContext]
 * (10) EStack = [globalContext]
 * */  

 var scope = "global scope";
 function checkscope(){
     var scope = "local scope";
     function f(){
         return scope;
     }
     return f;
 }
 checkscope()();

/** 
 * (1) EStack = [globalContext]
 * (2) globalContext = {
 *      VO: [global],
 *      scope: [globalContext.VO],
 *      this: globalContext.VO
 *     }
 * (3) checkscope[[scope]] = {
 *      globalContext.VO
 *     }
 * (4) EStack = [checkscopeContext, globalContext]
 * (5) checkscopeContext = {
 *      AO: {
 *          arguments: {
 *              length: 0 
 *          },
 *          scope: 'local scope',
 *          f: referenced to function(){} 
 *      }
 *      scope：[AO, globalContext.VO]
 *      this: undefined
 *     }
 * (6) f[[scope]] = {
 *      checkscopeContext.AO,
 *      globalContext.VO
 *     }
 * (7) EStack = [globalContext]
 * (8) EStack = [fContext, globalContext]
 * (9) fContext = {
 *      AO: {
 *          arguments: {
 *              length: 0
 *          }
 *      },
 *      scope: [AO, checkscopeContext.AO, globalContext.VO],
 *      this: undefined
 *     }
 * (10) EStack = [globalContext]
 * */  