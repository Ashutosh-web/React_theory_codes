/*

1. everything inside js happens inside a excecution context   i.e. memeory component ( variable env. ) and code component (thread of execution)

2. Hoisting inside javascript : Accessing variables and functions even before its declaration

3. undefined and Not defined are different in JavaScript.
3.1 : undefined is the special keyword , which signifies memory allocation to variables and proper function during the memory component phase.
3.2 : not deifned means not declaration .

4. window object : it gets created everytime even in a single empty js file.

5. Temporal Dead Zone : It is the time from which let variables are declared till the time of its execution. Till that time we cannot access the variables.
So, we will get uncaught reference error : Cannot access variables before its initialization.

6. Uncaught reference error : Cannot access variables before its initialization Vs Uncaught reference error : not defined. Both these errors are different.

7. let and const declarations are also hoiseted. But they are in different memory space , not in global space. It Can not be used, since it is in temporal dead zone. Cannot 
be access from window global object.

8. Const declaration is more strict : 
8.1 : Missing intialization in const declaration
8.2 : Uncaught type Error : Assignment to const variable

9. With var , we can re - declare a variable
var a = 10;
var a = 100;

10. with let , we cannot re - declare
let a = 1;
let a = 100;   // this is not correct , not allowed


*/