// ITERATION 
/*
let x = [1, 'b', a => a+1]
x.length = 5;

// Iteration 
for (let i=0; i <x.length; i++) {
    console.log(`x : ${x[i]} of type ${typeof(x[i])}`)
}

// // 'in' iteration - skips undefined entries 
for (const i in x) {
    console.log(`x : ${x[i]} of type ${typeof(x[i])}`)
}

// 'of' iteration - takes values
for (const i of x) {
    console.log(`x : ${i} of type ${typeof(i)}`)
}
*/

// Are objects iterable ? 
/*
// in operator
let x = {'a':1, 'b':'alpha', 'c':[3,2,1]}; 
for (const i in x) {
    console.log(x[i])
}

//of operator  (It gives error : x is not iterable)
// let y = {'a':1, 'b':'alpha', 'c':[3,2,1]};
// for (const i of x) {
//     console.log(i);
// }

let y = {'a':1, 'b':'alpha', 'c':[3,2,1]};
for (const[k,v] of Object.entries(y)) {
    console.log(k,v);
}
*/

// Creating arrays with holes
/*
let x = new Array(5);
x[1] = 10; 
x[3] = 'hello';
// for (const[k,v] of x.entries()) {
//     console.log(`Index ${k}, value: ${v} of type ${typeof(v)}`);
// }

for (const i in x) {
    console.log(`Index ${i}, value : ${x[i]} of type ${typeof(x[i])}`)
}
*/

// SPREADING 
/*
let x = [1,2,3]
let y = [0, ...x, 4];   // ... <--- spreading operator
console.log(x);
console.log(y);
*/

// ITERATION AND TRANSFORMATION
/*
let x = [1,-2, 3, -4, 5, 6, -7, 8];
let y = x.find (t => t < 0);
console.log(x)
// console.log(y)

// console.log(x.filter(t => t < 0));

// console.log(x.map(t => t > 0 ? '+' : '-'));

// console.log(x.reduce((a,i) => a+i, 0)); 
// 0+1=1 , 1+(-2)=-1 , -1+3=2, 2+(-4)=-2, -2+5=3, 3+6=9, 9+(-7)=2, 2+8=10    --> 10 
// console.log(x.reduce((a,i) => a*i, 1));  // <--- -40320

console.log(x.sort())  // doing lexical based sorting

console.log(x.sort((a,b) => a-b));
*/

// DESTRUCTURING 
let x = [1,2,3]; 
let [a,b] = x; 
// console.log(a);
// console.log(b);

// object destructuring 
const person = {
    firstName : "Albert", 
    lastName : "Pinot", 
    age : 25, 
    city : "Mubmai"
}

// const {firstName : fn, city : c} = person;
// console.log(fn);
// console.log(c);

// const {lastName, age} = person;
// console.log(lastName);
// console.log(age);

const {firstName , ...rem} = person;
console.log(firstName);
console.log(rem)