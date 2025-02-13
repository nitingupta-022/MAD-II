/* OBJECTS */

/*
// These objects can hold keys & values 
 
// create values
let obj = {
    plant : 'green', // properties
    1 : 100, 
    whatPlant : function() { // methods 
        console.log('this is obj')
    }
};   

// access values in obj
console.log(obj.plant);
console.log(obj['plant']); 
console.log(obj['1']);

// call methods inside obj
const i = obj.whatPlant();
console.log(i); // <--- undefined because in function there is no return statement.

// creating new prop/methods 
obj.a = "this is new prop";
console.log(obj.a);

// modifying properties 
obj.plant = "blue"; 
console.log(obj.plant)

// creating functions 
obj.func2 = function() {
    console.log("This is func2");
}
obj.func2();

// delete prop
delete obj.plant; 
console.log(obj.plant);
*/ 



/* PROPERTY V/S VARIABLES */ 
/*
let a = 10;  // variable (global)
console.log(a);

window.a = 20; // property  (different in node.js)
console.log(window.a);
console.log(this.a);

var b = 100; // creates variable and property in browser (in globla space) (not node.js)
console.log(b); // for variable
console.log(window.b); // for property
*/ 



/* FUNCTIONS */ 

// 1) Function expression : those functions which are stored in variable (hoisted based on decalaration keyword (let, const, var))

// a(); <--- cant't access function before declaration
// let a = function() {
//     console.log('a');
// }; 
// a();

// 2) Function declaration (hoisted and usable)
// b(); <--- we can access this 
// function b() {
//     // .....
//     console.log('b');
// }
// b();

// 3) Arrow Function : Arrow functions are always function expression
/*
let talk = () => {
    console.log('talking')
}
talk();

const person = {
    'fname' : 'Nitin', 
    talkk : function() {     // regular function
        console.log(`${this.fname} talks too much`)
    },
    arrowtalkk : () => {     // arrow function
        console.log(`${this.fname} talks too much`)  // problem
    },
    talkk2() {}, // shorthand of talkk
}

person.talkk(); 
person.arrowtalkk();
*/ 

// regular function 
/*
function abc() {
    console.log(this)
}

abc(); // who is calling this function (one the left hand side).
// If nothing then global object is called (this -> gloabl)
// In regular function
*/ 

// case 2  obj.xyz(): object inside a function --> if prop calls this then it will call windows object
/*
obj = {
    a : this,
    xyz() {
        console.log(this)
    }
}
obj.xyz()
*/ 

// case 3 obj.obj2.pqr() :  
/*
const obj = {
    obj_name : `object 1`, 
    obj2 : {
        obj_name : 'object_2',
        pqr() {
            console.log(this)
        }
    }
}
obj.obj2.pqr();  // who is calling on the left side of the function ?   So, I get obj2
*/ 

/*
function abc() {   // <--- regular function
    console.log(this);
}

const obj = {
    meth1 : abc, 
}

// this inside regular functions are dependent who is calling it. 

abc(); // window 
obj.meth1(); // obj object
*/ 


// arrow this

// case 1 : arrowfunc()
// let arrowfunc = () =>  {
//     console.log(this)
// }
// arrowfunc(); // window object 


// in regular function we print obj.regularFunc() than we get object but in arrow function we print obj.arrowFunc() we get window 
// case 2 : obj.arrowFunc()
/*
obj = {
    obj_name : 'first', 
    a : this;
    arrowFunc : () => {
        console.log(this);  // this fixed at creation
    }
}
obj.arrowFunc();   
*/ 

// case 3 : 
/*
const obj = {
    obj_name : 'obj',
    outFunc() {
        let arrow = () => {
            console.log(this);
        }
        arrow();
    }
}
obj.outFunc();
*/

/*
const obj1 = {
    obj_name :'obj1', 
    ouFunc() {
        let normal = function() { // <--- normal function
            console.log(this);
        }
        normal()   // whenever we call this in  normal function whatever is on the left hand side is this object if there is nothing then this inside becomes the window object
        // here left hand side is nothing so it's a window object
    }
}
obj1.ouFunc();
*/ 

const obj = {
    obj_name : 'obj', 
    outFunc() {
        const obj2 = {
            normal : function() {
                console.log(this);
            }
        }
        obj2.normal();
    }
}

const obj3 = {
    obj_name : 'obj3', 
    // this ?  
    arrow : () => {
        console.log(this);
    }
}

obj.outFunc();  // normal   (object) 
obj3.arrow();   // arrow    (window)

// 1) In arrow function : at the time of creation this will be decided
// 2) In normal function : whatever is on the left hand side of the normal function