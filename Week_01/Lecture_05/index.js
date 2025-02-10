// If - else condition
/*
let x = 5; 
if (x == 5) {
    console.log("What ? ")
} else {
    console.log("Of course 3 != 5")
}
*/ 

// Iteration 
/*
for(let x=0; x<5; x++) {
    console.log(x);
}
*/

// Iteration in array 
/*
const v = [1,2,3,4]
for(const x in v) {
    console.log(v[x])
}

const p = [1,2,3,4,5] 
for (const n of p) {
    console.log(n)
}
*/


// Function 
/*
// Regular Function 
function add(x,y) {
    return x + y
}

// Named Function 
let add_func = function(x,y) {
    return x + y; 
}

// Arrow Function 
let add_func2 = (x,y) => x + y; 

// console.log(add(20,30))
// console.log(add_func(50,30))
// console.log(add_func2(100,20))

// Anonymous Function  (IIFEs : Immediate Ivoke Function Execution)
// let n = function() {return "Hello"}    // <--- Anonymous bound
console.log(function(x,y){return x+y} (2,3))

let n = (function(){return "Hello"}())  // <--- Declare and invoke
*/ 


// Typeof 
/*
function add(x,y) {
    return x + y
}
console.log(typeof(add))
console.log(typeof(add(2,3)))
*/ 

const obj = {color : 'red'}
obj.changeColor = function(color) {this.color = color}

console.log(obj.color)