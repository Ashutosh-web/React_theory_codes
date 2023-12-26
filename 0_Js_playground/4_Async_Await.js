/*
1. What is async ?
2. What is await ?
3. How async await works behind the scenes ?
4. Example of async await  
5. Difference between async await and promise.then/.cathc
*/

 const p1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("p1 promise is resolved");
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
    // const val = await p1; : here program will wait for 5 seconds 
    const val = p1.then( (result) => console.log(result));
    console.log("I am here");
    console.log(val);
}

getData();
