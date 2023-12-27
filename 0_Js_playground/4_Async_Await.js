/*
1. What is async ? : 
    * Async is a keyword used before the function to make it asynchronous 
    * It always returns a promise. 
    * If we are simply returning a value it will wrap it inside a promise

2. What is await ? : 
    * await Can be used inside a async function
    * It can also be used before a call to a function that returns a promise
    * This makes the code wait at that point unitil the promise is settled , it does not stops the js engine execution , for that particular period it will go out of the 
    * call and once the promise is resolved , the promise handler again comes to the call stack.
3. How async await works behind the scenes ? :
    * Need to understand what happens behind the scenes when we use async keyword before the functio 

4. Example of async await :
    * See below code sample

5. Difference between async await and promise.then/.catch :

*/

 const p1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("p1 promise is resolved after 1 sec");
    },1000);
 });

 const p2 = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve("p2 promise is resolved after 5 seconds");
    },5000);
 });

//  const value = p1.then( (result) =>{
//     console.log(result); 
//     console.log("I am here");
//  });

// setTimeout( () => {
//     console.log(value);
// }, 2000); 

// console.log(value);

async function promiseHandler () {
    
    //const val = p1.then( (result) => console.log(result));
    console.log("Hello World");
    const val = await p1; 
    console.log("I am here promise 1");
    console.log(val);
 
    const val2 = await p2;
    console.log("I am here promise 2");
    console.log(val2);
}
 
promiseHandler();

console.log("I am here executed before the promises are resolved");


/* below example i variable is not declared again and again */
// counter = () =>{
//     let i; 
//     for( i=1;i<=5;i++){
//         setTimeout( () => {
//             console.log(i);
//         },i*1000);
//     }
// }

// counter();

/* below example i variable is  declared again and again */
// counter = () =>{
//     for(let i=1;i<=5;i++){
//         setTimeout( () => {
//             console.log(i);
//         },i*1000);
//     }
// }

//counter();

const API_URL = "https://api.github.com/users/anoyash";

// using async in arrow functions looks like this
githubCaller = async () => {
    console.log("Inside github call");

    try {
        const data = await fetch(API_URL);
        console.log(data);
        console.log(typeof(data));
        const jsonData = await data.json();
        console.log(jsonData);
        console.log(typeof(jsonData));
    } catch( error ) { 
        console.log(error);
    }
} 

githubCaller();

// another way of handling error is, because githubCaller is asynchronous function and 
// it will return a promise because we are using async in it.
// githubCaller().catch((error) => {
//     console.log(error);
// });
