/** 
 * 递归定义参考： https://github.com/zhengllingling/leetcode-js/blob/main/%E9%80%92%E5%BD%92%E5%92%8C%E6%A0%88.js
 * 尾调用：是指函数内部最后一步是调用另一个函数
 * 尾调用优化：只保留内层函数的调用帧 
 * 只有不在用到外部函数的变量，内部函数调用帧才能取代外部函数调用帧，否则无法使用尾调用优化
 * chrome不支持尾调用优化
 * 尾递归：尾调用自身
 * */
// 阶乘
 function factorical(n, res) {
    if(n===1) return res;
    return factorical(n-1 , n * res);
 }
// 这种情况下使用尾调用优化，调用栈下只有一个调用帧
 console.log(factorical(3,1))