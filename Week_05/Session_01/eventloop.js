// Structure :  call stack -> Web API -> Task queue/ callback queue



// ********************** Asynchronous Programming **********************

/*
console.log("Start"); 
setTimeout(() => console.log("Timeout 1"), 0); 
setTimeout(() => console.log("Timeout 2"), 0); 
console.log("End"); 
*/

/*
console.log("Start");
setTimeout(() => {
    setTimeout(() => console.log("Nested 1"), 0); 
    setTimeout(() => console.log("Nested 2"), 0); 
}, 0); 
setTimeout(() => console.log("Timeout 1"))
setTimeout(() => console.log("Timeout 2"), 0); 
console.log("End"); 
*/

/*
// Waiting part is done in Web API
console.log("Start");
setTimeout(() => {
    setTimeout(() => console.log("Nested 1"), 200);
    setTimeout(() => console.log("Nested 2"), 0);
}, 0);
setTimeout(() => console.log("Timeout 1"), 0)
setTimeout(() => console.log("Timeout 2"), 1000);
console.log("End")
// Start, End, T1, N2, N1
*/

/*
console.log("Start");
setTimeout(() => {
    setTimeout(() => {
        console.log("Nested 1");
        setTimeout(() => console.log("Nested 2"), 0);
    }, 200)
}, 0);
setTimeout(() => console.log("Timeout 1"), 0); 
setTimeout(() => console.log("Timeout 2"), 1000);
console.log("End")
// Start, End, T1, N1, N2, T2
*/



// ***************** Callback Functions *************
/*
function abc(cb) {
    // timeconsuming operation 
    for (let i=0; i< 10; i++) {
        console.log(i); 
    }
    let data = 10; 
    cb(data); // <--- cb is a function. cb will be called whenever my function gets executed. 
}

function done(data) {
    console.log(`here's the ${data}`)
}

abc(done); 
*/
