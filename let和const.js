/** 
 * 块级作用域
 * let 和 const 的特点
 * 1.不存在提升
 * 2.不能重复声明
 * 3.不会绑定全局作用域
 * let 和 const 的区别
 * const 用于声明常亮，一旦被设定，就不允许修改
*/

/** 
 * 临时性死区
 * */ 
var value = "global"

(function(){
    console.log(value)
    let value = "local";
}())

{
    console.log(value)
    const value = "local"
}