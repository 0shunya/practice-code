function Animal() {} //A constructor (Not a function as 'new' is used for making it a object
    //Animal is a constructor function. Every constructor function in JavaScript has a special object called prototype

    //The name speak here is not a traditional function name like function speak() {...} —
    // instead, speak is the name of the property (or method) being assigned to the Animal.prototype object.

    //By writing Animal.prototype.speak = ..., you are adding a method called speak to the prototype of Animal.
    Animal.prototype.speak =  function () {
        return `Animal Speaking`
    }   


function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return 'Woof!';
};

// Demonstration
const myDog = new Dog();
// console.log(myDog.speak()); // 'Animal speaking'
// console.log(myDog.bark());  // 'Woof!'


function Person(name, age) {
    this.name = name
    this.age = age
}

 Person.prototype.greet = function () {
    if(this.name.length > 0) {
        return `This is my name ${this.name} and my age is ${this.age} `
    }
     else {
        throw new Error `Wrong value`
     }
    }

let Name = new Person("shlok", 22);

// console.log(Name.greet());

//Coding Exercise 39 : Encapsulation with getters and setters

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  get balance () {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
        throw new Error("Balance cannot be negative.");
    }
    this._balance = amount;
  }

  deposit(amount){
    if(amount <= 0) {
        throw new Error("Amount must be in positive");
    }
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount) {
    if (amount > this._balance) {
        throw new Error("Insufficient Balance");
    }

    if (amount <= 0) {
        throw new Error("Withdrawal must be positive");
    }
    this._balance -= amount;
    return this._balance;
  }
}

const account = new BankAccount(2000);

// console.log("Initial balance:", account.balance);
// console.log("After depositing 500:", account.deposit(500));
// console.log("After depositing 500:", account.withdraw(1000));

//Task 2
class Shape {
  area() {
    return 0;
  }

}

class Circle extends Shape {

  constructor(radius){
    super();
    this.radius = radius;
  }
   area() {
     return Math.PI * this.radius * this.radius;
  }

}

class Rectangle extends Shape {

  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}


const circle = new Circle(5);
const rect = new Rectangle(2,5);

console.log("Circle area", circle.area());
console.log("Rectangle area", rect.area());