/** 
 * Promise
 * (1) 状态不受外界影响 只有三种状态 pending fulfilled rejected
 * (2) 状态一旦改变就不会再变 改变状态只有两种可能 一种是pending-fulfilled 一种是pending-rejected
 * 
 * Promise一旦创建就会立即执行 不能取消
 * Promise再pending状态下不知道什么什么状态 是刚刚开始还是即将完成
*/

const promiseTest = new Promise(function(resolve, reject) {
    // promise是一旦创建就会立即执行 所以控制台最先会打印这句话
    console.log("promise-test")
    // 异步操作
    // 如果异步操作成功 调用resolve传值 
    // resolve的功能是将pending状态转为fulfilled 
    // 可以传入异步操作成功之后的结果值
    resolve();
    // 如果异步操作失败 调用reject reject的功能是将pending状态转为rejected
    // 可以传入错误数据
    reject()
})

function timeout(ms){
    return new Promise(function(resolve, reject){
        console.log("start")
        setTimeout(resolve, ms, "done")
    })
}

// Promise 实例方法then接收两个参数 状态改变的回调 
// then方法会返回一个新的Promise对象 所以可以采用链式方法调用
// 一个是Promise从pending-fulfilled的回调
// 一个是pending-rejected的回调
// 两个函数都接收传出的值作为参数
timeout(100).then(function(res){
    console.log(res);
}, function(err){
    console.log(err);
})

console.log("end")

function loadImageAsync(url) {
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.onload = function(){
            resolve()
        }
        image.onerror = function(err){
            reject(err);
        }
        image.src = url;
    })
}

// 如果resolve传入另外一个Promise对象， 那这个状态就取决与这个Promise的状态
const p1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'p1');
    // setTimeout(reject, 100, new Error("111"))
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("p2");
        resolve(p1)
    }, 3000)
})

p2.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

new Promise(function(resolve){
    resolve({
        a: 1
    });
}).then(function(res){
    return res.a
}).then(function(res){
    console.log(res);
})

// Promise.prototype.catch 处理捕获错误的回调函数
// Promise.prototype.finally 不管状态如何都会执行 不接收任何参数
// Promise.all
// Promise.race
// Promise.allSettled
// Promise.any
// Promise.resolve 转为Promise对象
// Promise.reject