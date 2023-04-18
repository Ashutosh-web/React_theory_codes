
/* 0. everything inside js happens inside a excecution context 
    i.e. memeory component and code component.
*/

// 1. Hoisting : Accessing variables and functions even before its declaration
// is called hoising in javascript.
console.log(b);    
a();


var b = 10;

function a(){
    console.log("Inside funcation call of a");
}

console.log(b);
console.log(window.b);
console.log(this.b);
/* all the above three logs points to the same varible a */
/* window is a global object gets created in empty js file also */
