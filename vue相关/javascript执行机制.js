/** 
 * javascript事件循环
 * 1.同步任务
 * 主线程中执行
 * 2.异步任务
 * 放入注册事件队列中，等待主线程任务执行完毕，会从事件队列中读取
 * 对应的函数进入主线程中执行
 * 上述过程中会不断重复，就是事件循环的概念
*/

// setTimeout
setTimeout(()=>{
  console.log("1..........")
},0)
console.log("2.........")

// setInterval
setInterval(() => {
  console.log("3..........")
}, 3000)

/** 
 * 宏任务：整体代码script setTimeout setInterval
 * 微任务：Promise process.nextTick
*/

console.log('1');

setTimeout(()=>{
    console.log("2")
    process.nextTick(()=>{
        console.log(3);
    })
    new Promise(resolve => {
        console.log("4");
        resolve()
    }).then(() => {
        console.log("5")
    })
})
process.nextTick(() => {
    console.log("6");
})
new Promise((resolve) => {
    console.log("7");
    resolve();
}).then(() => {
    console.log("8");
})
setTimeout(() => {
    console.log("9");
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})