function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let print = numberGenerator();

// console.log(print.next().value);
// console.log(print.next().value);
// console.log(print.next().value);

function rangeIterator(start, end) {
    let nxtStart = start;
    
    return {
        next() {
             
             if(nxtStart <= end){
                 return { value: nxtStart++, done: false}
             } else {
                return { value: undefined, done: true}
             }
        }
    };
}

const range = rangeIterator(3, 7);
// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);
// console.log(range.next().value);

function* fibonacciGenerator() {
     let one = 0, two = 1;
     while(true){
        yield one;
        [one, two] = [two, one + two];
     }
}

let fiboNacci = fibonacciGenerator();

console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
console.log(fiboNacci.next().value);
