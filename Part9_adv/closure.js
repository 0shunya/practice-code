//Closure means when a function retains a valuee
// That inner function will "remember" the count variable even after createCounter() has finished running —
// that’s what we call a closure.


function outro () {
    let count = 1;
    return function () {
        count++
        return count;
    }
}

let plusone = new outro();

console.log(plusone());
console.log(plusone());
console.log(plusone());
console.log(plusone());
