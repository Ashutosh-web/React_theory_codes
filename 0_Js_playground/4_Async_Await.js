/*
1. What is async ? : 
    * Async is a keyword used before the function to make it asynchronous 
    * It always returns a promise. 
    * If we are simply returning a value it will wrap it inside a promise

2. What is await ? : 
    * await Can be used inside a async function
    * It can also be used before a call to a function that returns a promise
    * This makes the code wait at that point unitil the promise is settled
3. How async await works behind the scenes ? :

4. Example of async await :
    * See below code sample

5. Difference between async await and promise.then/.catch :

*/

 const p1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("p1 promise is resolved");
    },1000);
 });

 const p2 = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve("p2 promise is resolved");
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

async function getData () {
    
    //const val = p1.then( (result) => console.log(result));
    console.log("Hello World");
    const val = await p1; 
    console.log("I am here promise 1");
    console.log(val);
 
    const val2 = await p2;
    console.log("I am here promise 2");
    console.log(val2);
}

getData();


