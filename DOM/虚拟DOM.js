/** 
 * 虚拟DOM：用js对象表示DOM信息和结构
 * 虚拟DOM算法：element diff path
 * (1) 用JS对象结构表示DOM树结构。然后用这个树构建一个真正的DOM树，插到文档当中
 * (2) 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两颗树差异
 * (3) 把(2)所记录的差异应用到步骤(1)所构建的真正的DOM树上，视图旧更新了
*/

// 1.用JavaScript来表示DOM节点
const el = require("./element");

const ul = el('ul', {
    id: 'list',
}, [
    el('li', { class: 'item' }, ['Item 1']),
    el('li', { class: 'item' }, ['Item 2']),
    el('li', { class: 'item' }, ['Item 3'])
])

const ulRoot = ul.render();
document.body.appendChild(ulRoot);

// 2.比较两颗虚拟DOM树的差异 diff算法
/** 
 * (1) 深度优先遍历，记录差异
 * (2) 差异类型
*/

// 3.把差异应用到真正的DOM树上
