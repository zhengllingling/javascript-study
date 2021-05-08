/** 
 * 遍历器：按某种次序访问数据解构
*/

const obj = {
    0:"a",
    1:"b",
    2:"c",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for(let key in obj) {
    console.log(obj[key]);
}

for(let value of obj) {
    console.log(value);
}