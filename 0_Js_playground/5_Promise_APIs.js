/*
Promise APIs

1. Promise.all()
        1.0 : Promise.all([P1,P2,P3])
        1.1 : It will wait for all of the promises to finish and return the result in the array
        1.2 : If any of the promises gets rejected , then Promise.all will throw an error
        1.3 : As soon as any of the promises gets failed , it will throw an error and it will not wait for any of the promises.
        1.4 : It is like a fail fast techinique 

2. Promise.allSettled()
        1.0 : Promise.allSettled([P1,P2,P3])
        1.1 : It will wait for all of the promises to finish and return the result in the array
        1.2 : If one of the promises gets rejected (LET'S say p2 gets rejected ), then in that case it will wait for other promises to get settled 
        1.3 : It will give object in return , [val1 , error , val3] 
        1.4 : In this API , it always returns the array of results 
        1.5 : This is safest of all the APIs 

3. Promise.race()
        1.0 : Promise.race([P1,P2,P3])
        1.1 : The first promise which gets resolved, so it will give the value of P2 , if P2 gets resolved first in respect to P1 and P3 
        1.2 : What If P2 gets rejected first , then in that case error will be thrown.
        1.3 : basically whatever happens first, it will return the reject / resolved value of that fastest promise.

4. Promise.any()
        1.0 : Promise.any ([P1,P2,P3])
        1.1 : Here we will wait for first successful fulfilled / resolved promise.
        1.2 : In case all the promises got failed, then the returned result will be aggregated error and this will be array [error1 , error2 , error3]
        1.3 : If first gets failed, it will wait for next success promise and so on..

Settled --> Got the Result : ( IT means both ways )
1.1 : Settled means it can be success / resolved / fulfilled
1.2 : Settled means it can be failure / rejected / rejected

*/

// creating the dummy promise , w/o using actual Api calls 
// resolve , reject 

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 success");
    },3000);
    // setTimeout(()=>{
    //     reject("p1 failed");
    // },3000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 success");
    },1000);
    // setTimeout(()=>{
    //     reject("p2 failed");
    // },3000);
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p3 success");
    },3000);
    // setTimeout(()=>{
    //     reject("p1 failed");
    // },3000);
});


Promise.all([p1,p2,p3])
.then( (result) =>{
    console.log(result); // this result will be an array / object in case of Promise.allSettled
})
.catch( (err) =>{
    console.error(err);
})
;

//  
