Function.prototype.bind2 = function(context) {
    const self = this;
    const args = Array.prototype.slice(arguments, 1);
    const fN = function(){}
    const f = function () {
        const bindArgs = Array.prototype.slice(arguments);
        return self.apply(this instanceof f ? this : context, args.concat(bindArgs))
    }
    fN.prototype = this.prototype;
    f.prototype = new fN();
    return f;
}

var foo = {
    value: 1
}

function bar() {
    console.log(this)
}
const a = new bar();

const Bar = bar.bind2(foo);
Bar.prototype.name = 11;

console.log(a.name)


Bar(); // this => foo 1
const b = new Bar(); 