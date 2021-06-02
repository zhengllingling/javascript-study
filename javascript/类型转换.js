/** 
 * 1.基本类型转基本类型
 * 2.复杂类型转基本类型
*/

/** 
 * ToNumber 其他类型转换到number类型的规则
 * 
 * string - number规则
 * 只包含数字 转 对应的数值
 * 只包含16进制 转 对应的十进制
 * 字符串为空 转 0
 * 包含除上述以以外的其他字符 转 NaN
 * 
 * object - string
 * 先调用 toPrimitive 再调用 toNumber
 * 
 * symbol 抛出类型错误
 * 
 * 使用+可以将其他类型转为数值
 * */

+undefined // NaN
+null // 0
+true // 1
+false // 0
+"1" // 1
+"0x11" // 17
+"" // 0
+"a" // NaN
"b"+"a"+ +"a"+"a"; // baNaNa
+Symbol(1) // 报错


/** 
 * ToBoolean 
 * 可以使用Boolean(val)的方式转 或者 !val
 * 出 undefined null "" +0 -0 NaN转为false 其他都转为true
*/

/** 
 * ToString 
 * 可以使用模板字符串来实现
 * Symbol 会报类型错误
 * Object 先调用toPrimitive 再调用 toNumber方法
 * 其他都转为对应的字符串
*/


function getType(obj) {
    const res = Object.prototype.toString.call(obj);
    return res.substring(8, res.length-1);
}

function isPrimitive(obj) {
    const types = ["Null", "Undefined", "Number", "String", "Boolean"];
    return types.indexOf(getType(obj)) !== -1;
}

const ToPrimitive = (input, preferredType) => {
     // 如果input是原始类型，那么不需要转换，直接返回
     if (isPrimitive(input)) {
         return input;
     }
     let hint = '', 
         exoticToPrim = null,
         methodNames = [];
     // 当没有提供可选参数preferredType的时候，hint会默认为"default"；
     if (!preferredType) {
         hint = 'default'
     } else if (preferredType === 'string') {
         hint = 'string'
     } else if (preferredType === 'number') {
         hint = 'number'
     }
     exoticToPrim = input.@@toPrimitive;
     // 如果有toPrimitive方法
     if (exoticToPrim) {
         // 如果exoticToPrim执行后返回的是原始类型
         if (typeof (result = exoticToPrim.call(O, hint)) !== 'object') {
             return result;
         // 如果exoticToPrim执行后返回的是object类型
         } else {
             throw new TypeError('TypeError exception')
         }
     }
     // 这里给了默认hint值为number，Symbol和Date通过定义@@toPrimitive方法来修改默认值
     if (hint === 'default') {
         hint = 'number'
     }
     return OrdinaryToPrimitive(input, hint)
 }
 const OrdinaryToPrimitive = (O, hint) => {
     let methodNames = null,
         result = null;
     if (typeof O !== 'object') {
         return;
     }
     // 这里决定了先调用toString还是valueOf
     if (hint === 'string') {
         methodNames = [input.toString, input.valueOf]
     } else {
         methodNames = [input.valueOf, input.toString]
     }
     for (let name in methodNames) {
         if (O[name]) {
             result = O[name]()
             if (typeof result !== 'object') {
                 return result
             }
         }
     }
     throw new TypeError('TypeError exception')
 }


 /** 
  * ES6 之后提供了 Symbol.toPrimitive 方法，该方法在类型转换的时候优先级最高
  * 
  * 
  * 在进行类型转换的时候，一般是通过 ToPrimitive 方法将引用类型转为原始类型。
  * 如果引用类型上有 @@toPrimitive 方法，就调用 @@toPrimitive 方法，
  * 执行后的返回值为原始类型就直接返回，如果依然是对象，那么就抛出报错。
  * 如果对象上没有 toPrimitive 方法，
  * 那么就根据转换的目标类型来判断先调用 toString 还是 valueOf 方法，
  * 如果执行这两个方法后得到了原始类型的值，那么就返回。
  * 否则，将会抛出错误
 */