// Basic import 
// Note - How this file itself must be included as type=module
// import {c} from './module1.js'
// console.log(c);

// Import from module1
/*
import {c, energy} from './module1.js';
console.log(c);
console.log(energy(c));
// console.log(sq(10));   <--- throws an error because in module1.js I didn't use export keyword before sq function.
*/


// Renaming imports
/*
import {c as speedoflight} from './module1.js';
console.log(speedoflight);
*/

// Importing default export 
/*
import energy from './module1.js';
console.log(energy(10));
*/

import {x, inc_x} from './module1.js';
console.log(x);
// x++; <--- throws an error 
inc_x();
console.log(x);