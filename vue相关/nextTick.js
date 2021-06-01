/** 
 * nextTick会在下一次DOM更新周期之后执行
 * created watched中需要操作dom可能会被用到
 * 
 * 当状态发生改变是，watcher会得到通知，然后触发虚拟DOM的渲染
 * watcher触发渲染的过程是异步的
 * 在vue中有一个队列，需要渲染时，会将watcher推送到这个队列中
 * 在一次事件循环中再让watcher触发渲染
 * */

const callbacks = [];
let pending = false;

function flushCallbacks(){
    pending = false;
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for(let i = 0; i < copies.length; i++){
        copies[i]()
    }
}

const timeFunc = function(){
    if(typeof Promise !== "undefined") {
        Promise.resolve().then(() => {
            flushCallbacks()
        })
    }else{
        setTimeout(()=>{
            flushCallbacks();
        },0);
    }
}

function nextTick(cb) {
    if(cb) {
        callbacks.push(() => {
            cb();
        })
    }
    if(!pending) {
        pending = true;
        timeFunc();
    }
}