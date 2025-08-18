function createCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}

let cc = createCounter();

console.log(cc());
console.log(cc());
console.log(cc());


function rateLimiter(fn, limit) {
    let count = 0;
    let name;

    return function (...args) {
        if (count < limit) {
            count++;
            fn(...args) //Prints Hello, this is shlok" 1st and then zafar
            console.log(`Hello, this is ${name}`);
            console.log("we passed if");
        }
        else {
            console.log("Limit reached");
            
        }
    }
}

function greet(name) {
    console.log("Hello, this is " + name);
}

let start = rateLimiter(greet, 2);

start("shlok");
start("Zafar");
start("Amir");


function memoize(fn) {

    const cache = {

    }

    return function (...args) {
        const key = JSON.stringify(args);

        if(cache[key]) {
            console.log("Fecthing from cache..");
            return cache[key]
        }
        else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }


    }


} 

let memo =  memoize((n) => n*n);
console.log(memo(5));
console.log(memo(5));
console.log(memo(15));
