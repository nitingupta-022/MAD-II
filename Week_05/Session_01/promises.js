// ***************** Promises *************
/*
Promises has three diferent states : 
1) Pending : When promise is created, this state is pending
2) Rejected : If it doen't gets a proper data back or an error then the promise status is rejected. 
3) Resolve : Once the promise gets a proper data back, than the promise state is resolve. 
*/


// const prom = new Promise(
//     (a, b) => {
//         // we call a when promise is resolved
//         // a("Hey we got data successfully") // <--- resolved
//         // we call b when promise is rejected 
//         // b() // <--- rejected 

//         setTimeout(() => b(), 1000); // <--- pending state 
//         // setTimeout(() => a("We are in function a"), 1000); 
//     }
// )
// console.log(prom) 

// First parameter is for reolved and second parameter is form rejected

// Case 1 : 
/*
prom.then(
    () => {
        console.log("it was resolved")
    },
    function () {
        console.log("it was rejected")
    }
); 
*/ 

// Case 2 : 
/*
prom 
    .then(() => {
        console.log("it was resolved"); 
    })
    .catch(() => {
        console.log("it was rejected")
    }) 
*/

// Case 3 : Whenever we chaining promises .then & .catch together. What happens is ? Whenever there is no error, than it will go to all .then 
/*
prom 
    .then(() => {
        console.log("it was resolved"); 
    })
    .catch(() => console.log("it was rejected"))
    .then(() => {console.log("2nd then")})
*/ 

// Case 4 : finally()
// Note : error will resolved in catch block, after that .then statement will be executed. 
/*
prom
    .then(() => {
        console.log("it was resolved"); 
        return new Promise((a) => a()); 
    })
    .catch(() => console.log("it was rejected")) 
    .finally(() => console.log("finally in between"))
    .then(() => console.log("2nd then"))
    .finally(() => console.log("I will execute no matter rej or res"))
*/ 

// Case 5 : If there is more than one .catch
// If there is any error after the first catch than the second catch will execute 
/*
prom
    .then(() => {
        console.log("it was resolved"); 
        return new Promise((a) => a() );    
    })
    .catch(() => console.log("it was rejected"))
    .finally(() => console.log("finally in between")) 
    .then(() => console.log("2nd then")) 
    .finally(() => console.log("I will execute no matter rej or res"))
    .catch(() => console.log("last catch"));
*/ 

// Case 6 : execute the last catch as a error
/*
prom
    .then(() => {
        console.log("it was resolved");
        return new Promise((a) => a());
    })
    .catch(() => console.log("it was rejected"))
    .finally(() => console.log("finally in between"))
    .then(() => {
        console.log("2nd then"); 
        throw new Error("this is manual error")

    })
    .finally(() => console.log("I will execute no matter rej or res"))
    .catch((e) => console.log(e));
*/



// ******* EXAMPLE 2 *********
/*
const p = new Promise((a,b) => {
    // a('resolved')
    b('rejected')
})

// Case 1 : .then.catch 
// Note : the second parameter in .then acts as a catch
// Note : Whenever we have two callback functions in .then the second one acts as a catch block. Below you will get example: we have two parameters in .then (success, fail) so fail here works as catch block
p.then((success) => {console.log('1')}, 
    (fail) => {
        // throw new Error('manual error')
        console.log('2')
    }).then(() => {console.log('5')})
    .catch((xyz) => {console.log('3')})
    .then(() => {
        console.log('4')
        throw new Error(); 
    })
    .finally(() => {console.log('finally blockx')})
*/ 



// ********* EXAMPLE 3 *********
/*
const prom = new Promise((resolve, reject) => {
    function abc(x) {
        if (x > 20) {
            resolve("x greater than 20")
        }
        else {
            reject('x less than 20')
        }
    }
    abc(22)
})

prom 
    .then((x) => 40)
    .catch(() => {console.log('catch'); return 10;})
    .finally((i) => {console.log('new finally', i)}) // <--- If i give a parameter to finally doesn't matter what happens, it always has a value of undefined
    .then((x) => {console.log("2nd then", x); return 30})
    .finally(() => console.log("finally will execute no matter what"))
    .then((z) => console.log("3rd then", z * z))
    .catch(() => {console.log("last catch"); return 6}) 
*/ 




// ************ Async & Await ***********

const prom = new Promise((resolve, reject) => {
    function abc(x) {
        // throw new Error()
        if (x > 20) {
            resolve("x greater than 20");
        } else {
            reject("x less than 20"); 
        }
    }
    abc(19);
}); 

// await : wait for promise to resolve and give me the result 

async function get_some_data() {
    // if rejected if will throw error
    try {
        const data = await prom; 
        console.log(data); 
    }
    catch {
        console.log("got error")
    }
}

prom.then((data) => console.log(data)).catch(() => console.log("got error")) 
get_some_data()

// both are equivalent