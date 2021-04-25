/** 
 * defineProperty实现对对象属性劫持
*/
// 用defineProperty实现一个简单的数据监听函数
const watch = function (obj, key, callback) {
    let _value = obj[key];
    Object.defineProperty(obj, key, {
        get(){
            return _value;
        },
        set(newVal){
            const oldVal = _value;
            _value = newVal;
            callback && callback(newVal, oldVal);
        }
    })
}

const obj = {
    a: 1,
    b: 2
}

watch(obj, "a", (newVal, oldVal) => {
    console.log(newVal, oldVal, '0000');
});

obj.a = 10;

/** 
 * Proxy创建代理 实现基本操作的拦截和自定义
*/
// 用Proxy实现一个简单的数据监听函数
const watch1 = function (obj, callback) {
    return new Proxy(obj, {
        get: (obj, property) => {
            return obj[property]
        },
        set: (obj, property, value) => {
            const oldVal = obj[property];
            obj[property] = value;
            callback && callback(value, oldVal);
        }
    })
}

const proxyObj = watch1(obj, (newVal, oldVal) => {
    console.log(newVal, oldVal);
});
proxyObj.a = 11;

/** 
 * defineProperty和Proxy的区别
 * 1.defineProperty不能监听数组变化, Proxy可以
 * 2.defineProperty不可以劫持整个对象， Proxy可以
 * 3.defineProperty操作是对源对象操作，Proxy不是，需要对Proxy实例操作
 * 4.defineProperty可劫持的操作只有get和set，而Proxy有get、set、defineProperty、has等13中方法
 * 5.defineProperty支持IE8以上的主流浏览器，Proxy不支持IE
 * */