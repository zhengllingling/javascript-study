/** 
 * 惰性函数：避免多次判断，重写函数，只判断一次
 * 需要条件判断，但其实只需要判断一次，接下来的使用方式就不需要判断了，就可以想想是否可以考虑使用惰性函数方式
 * 如：做兼容的时候可以考虑
*/

const foo = (function(){
    var t;
    return function(){
        if(t) return t;
        t = new Date();
        return t;
    }
})()
console.log(foo())
console.log(foo())

function foo1() {
    const t = new Date();
    foo1 = function() {
        return t;
    }
    return foo1();
}
console.log(foo1())
console.log(foo1())


function addEvent (type, el, fn) {
    if (window.addEventListener) {
        el.addEventListener(type, fn, false);
    }
    else if(window.attachEvent){
        el.attachEvent('on' + type, fn);
    }
}

function addEvent1(type, el, fn) {
    if(window.addEventListener) {
        addEvent1 = function (type, el, fn) {
            console.log(11);
            el.addEventListener(type, fn, false)
        }
    }else if(window.attachEvent){
        addEvent1 = function (type, el, fn) {
            el.attachEvent(`on${type}`, fn)
        }
    }
    return addEvent1(type, el, fn);
}