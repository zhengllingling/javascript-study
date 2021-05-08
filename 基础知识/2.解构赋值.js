/** 
 * 按照某种模式，从数组和对象中提取值，并赋值给变量
*/

// 1.数组的解构赋值（只要一个变量具有Iterator接口就可以）

const [a, b] = [1, 2];
const [c, d] = [, 3];
function test(a, b){
    const [e, f] = arguments;
    console.log(e, f);
    return e+f;
}
test(1, 2);
const [e, f] = new Set([1, 2]);
console.log(e, f);

// 2.默认值（只有提取的值严格等于undefined，默认值才会生效）

const [t1=1, t2=2] = [undefined,null];
console.log(t1, t2);


// 3.对象的解构赋值（两边解构相同，不需要顺序，匹配的是同名属性）
const {t2, t3} = {t3: 1, t2: 2};
let t4;
({t4} = {t4: 1})
// 别名和默认值
let {t5: t6=1} = {t5: 1};

/** 
 * 解构赋值的规则，只有右边不是对象或数组，都会先将其转化为对象之后再进行解构赋值
*/

/** 
 * 用途：
 * （1）交换变量的值
 * （2）从函数返回多个值
 * （3）函数参数定义
 * （4）提取JSON数据
 * （5）遍历Map解构
 * （6）从模块中取出对应的方法
*/