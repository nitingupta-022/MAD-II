// Basic array declaration - mixed mode
// let x = [1,2,3]
// console.log(`${typeof(x)} : ${x} with length = ${x.length}`)
// console.log(x[0])

// Mixed element types 
// let y = [1,'b', a => a+1]
// console.log(`${typeof(y)} : ${y} with length = ${y.length}`)
// console.log(x.length, y.length)

// Deleting
let x = [1,2,3]
x = [] 
console.log(`${typeof(x)} : ${x} with length = ${x.length}`)

// Holes 
let y = [1,'b', a => a+1];
y.length = 10;
console.log(`${typeof(y)} : ${y} with length = ${y.length}`);