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


/**
 * 1.通过defineProperty的getter/setter对数据进行劫持
 * 2.在需用定阅的地方(模板编译complier)，添加观察者，并会触发getter ，进行依赖搜集
 * 3.然后改变数据触发setter方法的时候，进行notify 通知给所有观察者进行相应的更新
 * 
 * 观察者模式：
 * 就好比知乎，知乎上有很多作者（相当于data的很多属性）
 * 我们就是订阅者（watcher）角色,我们关注了很多作者，那么作者更新了
 * 就会通知我们这些订阅者
 * 
 * Vue3.0
 * Proxy 替换 Object.defineProperty
 * 好处：
 * 1.可以解决vue现存的两个问题
 * 不能响应对象属性的添加和删除的问题
 * 不能直接操作数组下标的问题
 * 2.Proxy支持拦截的操作有13中
 * get set has deleteProperty ownKeys definePropertye等
 * 3.Proxy不会操作对象本身，而是会返回一个新的对象
 * 4.直接监听对象而不是对象属性
 * 
 * 不好的地方
 * 1.兼容性问题 这个兼容性问题babel还无法解决
 * 
 * 
 * MVVM
 * Model-View-ViewModel
 * ViewModel负责把Model的数据同步到View显示出来，还负责把View对数据的修改同步到Model中
 * Model作为数据层只关心数据本身
 * View作为视图层负责把数据转换成UI界面展示给用户
 */ 

