function Animal(sound) {
    this.sound = sound
}

Animal.prototype.makesound = function() {
    console.log(`Animal make sounds like ${this.sound}`);     
}

function Dog(sound) {
    Animal.call(this, sound);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.Bark = function () {
    console.log(`The dog barks like ${this.sound}`);
}

let Kutta = new Dog("Woof");

Kutta.makesound();
Kutta.Bark();


// Task 2
function Shape(color) {
    this.color = color
}

Shape.prototype.getColor = function() {
    console.log(`The color of the shape is ${this.color}`);
}

function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    Shape.call(this, color);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function() {
    console.log(`This is the width ${this.width}, height ${this.height} and color ${this.color}`);
}

let Shappe = new Rectangle(24,50, "Red");

Shappe.getColor();
Shappe.getArea();