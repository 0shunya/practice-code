 
const a = 18;
const b = 24;

//My Version

function add(a,b) {
    let input = a+b;
    return input;
}


console.log(add(a,b));

//AI

// function add(a, b) {
//     return a + b;
// }


function multiply(a,b) {
    return a*b;
}

console.log(multiply(a,b));

function divide(a, b) {
    return a/b;
}

console.log(divide(a,b));

// Increase value of a by 1
function increment(a,b) {
    
    return [a+1, b+1];
}

console.log(increment(a,b));

// Decrease value of b by 1
function decrement(a, b) {
    return [a-1, b-1];
}

console.log(decrement(a,b));

// Divide larger value by small to find the reminder
function reminder(a, b) {
    return b % a;
}

console.log(reminder(a,b));
