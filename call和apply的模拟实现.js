/** 
 * call apply 两者唯一不同的是传入参数的形式不一样
 * 1.改变this指向
 * 2.执行函数
 * */ 
const foo = {
    value: 1
}

function bar() {
    console.log(this.value)
}

bar.call(foo)

Function.prototype.call2 = function(context) {
    context = context || window;
    context.fn = this;
    const args = [];
    for(let i = 0; i < arguments.length; i++) {
        args.push(`arguments[${i}]`)
    }
    const result = eval(`context.fn(${args})`);
    delete context.fn;
    return result;
}
bar.call2(foo);

Function.prototype.apply2 = function(context, arr) {
    context = context || window;
    context.fn = this;
    const args = []
    let result = null;
    if(!arr) {
        result = context.fn()
    } else {
        for(let i = 0; i < arr.length; i++) {
            args.push(`arr[${i}]`)
        }
        result = eval(`context.fn(${args})`)
    }
    delete context.fn;
    return result;
}

function bar(a) {
    if(!a) a=0
    console.log( this.value + a )
}

bar.apply2(foo, [1])
