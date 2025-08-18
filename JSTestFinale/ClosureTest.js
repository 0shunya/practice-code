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
