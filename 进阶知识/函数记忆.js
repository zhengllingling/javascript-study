/** 
 * 函数记忆：将上次计算结果保存起来，当下次遇到相同的参数，不用计算直接返回结果
 * 函数记忆是一种编程技巧，本质上是牺牲算法的空间复杂度来换取更优的时间复杂度
 * 使用场景：需要大量的重复计算或者大量计算又依赖之前的结果的时候
*/
function memoize(fn, hasher) {
    const memorize = function (key) {
        const cache = memorize.cache;
        const index = `${hasher ? hasher.apply(this, arguments) : key}`
        if(!cache[index]) {
            cache[index] = fn.apply(this, arguments)
        }
        return cache[index];
    }
    memorize.cache = {};
    return memorize;
}

function add(a, b, c) {
    return a + b + c;
}

// 注：箭头函数没有arguments
const memoizeAdd = memoize(add, function (){
    const key = JSON.stringify([].slice.call(arguments))
    console.log(arguments);
    return key;
});

console.log(memoizeAdd(1, 3, 3))
console.log(memoizeAdd(1, 2, 2))

let count = 0;
function fobinacii(n) {
    count++;
    return n < 2 ? n : fobinacii(n - 2) + fobinacii(n - 1);
}

fobinacii = memoize(fobinacii)

for(let i = 0 ; i <= 10; i++) {
    fobinacii(i);
    // fo1(i)
}
console.log(count);