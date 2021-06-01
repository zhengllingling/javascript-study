/** 
 * 1.浅拷贝
 * Object.assign() 会合并对象返回一个新对象
 * 如果属性是基本类型 改变之后 新对象不会变
 * 如果属性是引用类型 改变之后 新对象也会变
 * 所以这个方法也是浅拷贝
*/
const obj = {
    a:1,
    b:2
}
const obj1 = Object.assign({}, obj);
obj.a = 3;
console.log(obj1.a);

const test = {
    a: {
        item: 1
    },
    b: 2
}
const test1 = Object.assign({}, test);
test.a.item = 3;
console.log(test1.a.item);

/** 
 * 2.深拷贝
 * （1）JSON.stringify + JSON.parse 实现深拷贝 不能拷贝函数
*/
const test2 = JSON.parse(JSON.stringify(test));
test1.a.item = 2;
console.log(test2.a.item);
 
// 第二种方式就是 浅拷贝 + 递归 的方式实现
function cloneDeep(source) {
    if(!isObject(source)) return source;
    const target = Array.isArray(source) ? [] : {};
    for(let key in source) {
        if(source.hasOwnProperty(key)) {
            if(isObject(source[key])) {
                target[key] = cloneDeep(source[key]);
            }else{
                target[key] = source[key];
            }
        }
    }
}

function isObject(target) {
    return typeof target === 'object' && target !== null;
}

const test3 = cloneDeep(test);