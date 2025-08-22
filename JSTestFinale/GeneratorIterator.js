function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let print = numberGenerator();

console.log(print.next().value);
console.log(print.next().value);
console.log(print.next().value);
