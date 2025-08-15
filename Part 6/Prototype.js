// How does __proto__ work?

// __proto__ forms a chain called the prototype chain.

// When a property or method is not found directly on the object,
//  JavaScript follows __proto__ to the next object up the chain. 
//  This is how inheritance works in JavaScript

let comp = {
    CPU: 120
}

let ACER = {
    Screen: "HD",
    __proto__: comp
}

console.log(`ACER `,ACER.__proto__);

console.log(ACER);


//2nd way and best

let Car = {
    tyres: 4
}

let MyCar = {
    color: "Green"
}

Object.setPrototypeOf(MyCar, Car); // MyCar now inherits from Car

console.log(Object.getPrototypeOf(MyCar));

