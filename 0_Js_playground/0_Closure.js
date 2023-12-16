// Closure is a function bundled together with its lexical scope
// This will happen when a inner function is using some outer variable

// Example 1st

function makeAddr(x)    {
    return function sum (y){
        return x + y;
    }
}

const add2 = makeAddr(2);
const add3 = makeAddr(3);

console.log(add2);
console.log(add3);

console.log(add2(10));
console.log(add3(10));

