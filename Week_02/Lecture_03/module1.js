// Direct one line export 
// export const c = 3000000;


// Explicit named exports
// Internal function - not exported 

/*
function sq(x) {
    return x*x; 
}

export const c = 299792458;
export function energy(m) {
    return m*sq(c);
}   

const speedoflight = 299792458;
function e(m) {
    return m * sq(speedoflight);
}
export {
    speedoflight as c, e as energy
}
*/

// Default export 
/*
const c = 299792458; 
export default function (m) {
    return m * c * c; 
}
*/

// Read-only variable imports !
export let x = 0; 
export function inc_x() {
    x++
}