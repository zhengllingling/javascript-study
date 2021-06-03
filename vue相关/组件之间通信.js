/**
 * 单向数据源 
 * 
 * 1.父子组件之间
 * props/$emit
 * $parent/$children 组件实例可以访问到组件中的data $parent是对象 $children是数组
 * provide/inject 父组件provide提供变量 子组件inject注入变量 不管组件多深都可以用这个inject注入父组件提供的变量
 * ref/refs 用在普通DOM元素上就是普通DOM元素 用在子组件上代表的就是子组件实例
 * eventBus 事件总线 就是发布订阅者模式 vue中实现了这种模式 所以使用new Vue创建一个实例，用它来注册事件接收消息
 * 
 * 2.VUX
 * 状态管理器 不能直接更改状态  只能通过某种方式改变状态
 * state 数据存储，是store中唯一数据源
 * getters 类似vue中的computed, state数据的二次包装，用于数据的筛选以及多个数据计算
 * mutations 类似函数，改变数据的唯一途径，但是不能处理异步事件 因为当mutations函数触发时异步函数还没处理好，不能追踪状态的变化
 * actions 处理异步事件，提交mutations来改变数据
 * modules 命名空间，将项目中的各个模块分开来定义和操作
 * 
 * 3.$attrs/$listeners
*/