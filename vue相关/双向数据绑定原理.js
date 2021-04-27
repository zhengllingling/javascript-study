/** 
 * Vue实现双向数据绑定主要是采用：数据劫持结合“发布-订阅”模式的方式，通过defineProperty的get和set，在数据变动时发布消息给订阅者触发监听
 */

 const obj = {};

 Object.defineProperty(obj, 'propertyname', {
    get: function(){
        return obj;
    },
    set: function(val) {
        console.log(val)
        // 修改input的value值
        // 修改对应的html显示内容
    }
 })

document.getElementById("input").onkeyup = e=> {
    obj.propertyname = e.target.value;
}