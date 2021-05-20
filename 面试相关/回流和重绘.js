/** 
 * 当一个元素自身的宽高、布局、显示或隐藏，或者元素内部的文字结构发生变化，导致需要重新构建页面的时候，就产生了回流
 * 
 * 当一个元素自身的宽高、布局及显示或隐藏没有改变，只是改变了元素的外观风格的时候，就产出了重绘
 * 
 * 什么时候会进行回流？
 * 1.添加或删除可见的DOM元素
 * 2.元素的位置发生改变
 * 3.元素的尺寸发生改变
 * 4.内容改变
 * 5.页面第一次渲染的时候
 * width height line-height padding margin
 * border top position float font-size
 * overflow等
 * 
 * 什么时候会进行重绘
 * 相关样式：
 * color background background-size visibility box-shadow等
 *
 * 怎么进行性能优化
 * 1.transform 代替 top left margin 这些
 * 2.分离读写操作
 * 3.样式集中改变
 * 4.缓存布局信息
 * 5.元素批量操作
*/

/** 
 * 1.虚拟DOM可以减少DOM操作次数
 * 将重复的操作合并为一次操作，减少操作次数
 * 借助DOM diff对比找出更新过的节点，只操作更新的节点，省略操作次数
 * 2.可跨平台渲染
 * 虚拟DOM本质是一个json对象
 * 
 * DOM diff 是虚拟DOM对比算法
 * 
 * 其实就是对比新旧两颗DOM树，并将差异放在一个对象中，只对有差异的进行
 * DOM操作，减少了DOM操作，改善了浏览器的性能问题
 * 
*/