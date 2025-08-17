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
