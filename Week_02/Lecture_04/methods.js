// get and set properties
/*
let user = {
    first : 'Albert', 
    last : 'Pinto', 
    get full() {
        return this.first  + ' '+ this.last 
    }, 
    set full(f) {
        const parts = f.split(' ')
        this.first = parts[0]
        this.last = parts[0]
    }
}

console.log(user.full)
user.full = "Gabbar Singh"; 
console.log(`Now ${user.first} and ${user.last}`)
*/


// Function methods 
/*
let xx = {
    'a' : 5, 
    'b' : 'hello', 
    'add' : function(x,y) {
        return x + y + this.a;
    }
}
// console.log(xx.add(10,8))

let z = xx.add

// call() : 
// console.log(z.call("",3,4))  <--- NaN
// console.log(z.call(xx,3,4)) 

// apply() : spreads the arguments - extra arguments will be ignored
console.log(z.apply(xx, [1,2,3,4]));

// bind() : closure 
let z2 = z.bind(xx, 2); 
console.log(z2(3))
*/ 


// Prototypes - with the help of __proto__ we can use inherit properties of objects 
/*
const x = {a : 1, inc : function() {this.a++}}
console.log(x)
const y = {__proto__ : x, b:2}
console.log(y)
console.log(y.a)
y.inc();
console.log(y.a)
*/


// Classes

class Animal {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `${this.name} makes a sound ${this.sound}`
    }
}

// let x = new Animal('Jerry'); 
// console.log(x.describe())

class Dog extends Animal {
    constructor(name) {
        super(name); 
        this.sound = "Woof"; 
    }
}

let d = new Dog("Spike"); 
console.log(d.describe())   // "Spike makes a sound Woof" 