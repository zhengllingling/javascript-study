/** 
 * 偏函数：固定一个函数的一些参数，产生更小元的函数
 * 元： 函数参数个数
*/
function partial(fn) {
    const args = [].slice.call(arguments, 1);
    return function() {
        const newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    }
}