function* generator() {
    yield 1;
    yield 2;
    yield console.log("This is the last");  
}

// generator();

let FN  = generator();

console.log(FN.next().value);
console.log(FN.next().value);
console.log(FN.next().value);
