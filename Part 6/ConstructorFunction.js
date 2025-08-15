//Constructor Function


//Think of these as forms place holder/Labels where multiple ppl submit different value

function Man(name, purpose) {
        this.name = name;           //Place Holder variable i.e Labels   
        this.purpose = purpose;     //Place Holder variable i.e Labels
}

let Shlok = new Man("Shlok", "Strong");

console.log(Shlok);

//2nd example

function Tea(type){
    this.type = type;
    this.describe = function () {
        return `This is a ${this.type}`
    };
}

let lemon  = new Tea("Lemon tea");

console.log(lemon);
console.log(lemon.describe());

//3rd constructot w/ prototype


function Animal(Species){
    if(!new.target){
        throw new Error("Place new before calling the object")
    }
    this.Species = Species;
}

Animal.prototype.sound = function (){
    return `${this.Species} barks ferociously`
}

let dog = new Animal("dog");
let Cat = Animal("Cat")

console.log(dog);
