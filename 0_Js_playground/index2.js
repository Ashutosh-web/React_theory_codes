// Closure Demonstration

// Closure is function bundled together with its lexical
// environment

function x(){
    var a = 10;
    // function y(){
    //     console.log(a);
    // }
    // return y;
    return function y(){
        console.log(a);
    }
}

var z = x();

// now here we are calling function y through z , but the function y is not in global scope ?
// How it will behave ??
// function y() remember its own lexical environment , so, it will have the access to the variable a
z();


function counter1(){

    for(var i=1; i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Namaster Counter 1");
}

//counter1();

// in each loop , closure gets attached to the new , scope of i... since let variable is block scoped
function counter2(){

    for(let i=1; i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Namaster Counter 2");
}

//counter2();

function counter3(){

    for(var i=1; i<=5;i++){

        function timer(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        timer(i);
    }
    console.log("Namaster Counter 3");
}

counter3();

