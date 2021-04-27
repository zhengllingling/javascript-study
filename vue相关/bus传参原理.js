/** 
 * Event是消息传递的一种方式，基于一个消息中心，订阅和发布消息的模式，就是发布订阅者模式
 * on('name', fn)订阅消息
 * emit('name', args)发布消息
 * 因为vue实现了这些方法
 * 所以直接new一个Vue实例就可以实现总线原理
 */
class Bus{
    constructor() {
        this.callbacks = {};
    }
    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn);
    }
    $emit(name, args) {
        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args));
        }
    }
}
const EventBus = new Bus();


EventBus.$on("fn", (args) => {
    console.log(args);
})

EventBus.$emit("fn", {
    a: 1
});