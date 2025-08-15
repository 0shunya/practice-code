class vehicle {

    constructor (brand, colorr) {
        this.brand = brand;
        this.colorr = colorr;
    }

    start (){
        return `My ${this.brand} is a ${this.colorr} Car`
    }
}

class car extends vehicle {
    drive (){
        return `${this.brand} is an example of inheritance`
    }
}

let MyCar = new car("Tesla", "Black");

console.log(MyCar.start());
console.log(MyCar.drive());


//Encapsulation

class BankAccount {
     #Balancee = 0;

     Deposit(amount){
        this.#Balancee = this.#Balancee += amount;
     }

     getBalance (){
        return `$${this.#Balancee} is my Balance`
     }
}

let MyMoney = new BankAccount()

MyMoney.Deposit(100)

// console.log(MyMoney.getBalance());

//2nd example 

class Shlok {
    #Skils = 10;

    time (sec) {
       return this.#Skils += sec
    }

    getAll (){
        return `${this.#Skils} is good`
    }
}

let All = new Shlok();

All.time(100)

console.log(All.getAll());

//Abstraction

// Abstraction means hiding complex internal steps from the user.

// The user only calls makeCoffee() and doesn't need to know how prepareCoffee() or serveCoffee() work.

// The internal logic is abstracted inside the class methods.

class CoffeeMachiine {

    constructor(){
        this.coffee = ""; // internal property
    }

    PrepareCoffee(coffee){
        this.coffee = coffee;
        return `Getting Ready to make ${this.coffee}. `
    }

    ServeCoffee (){
        return `Time to serve ${this.coffee}.`
    }

    MakeCofee (){
        // Abstracted process
        let one = this.PrepareCoffee(this.coffee);
        let two = this.ServeCoffee();

        return   one + two;
    }
}

let Machine = new CoffeeMachiine()

Machine.PrepareCoffee("Black cofee");

console.log(Machine.MakeCofee())

//Polymorphism

class Bird {
    Fly () {
        return `Bird can Fly..`
    }
}

class Penguin {
    Fly () {
        return `Penguins can't Fly..`
    }
}

let bird = new Bird();

let penguin = new Penguin();

console.log(bird.Fly());
console.log(penguin.Fly());

//Setters

class PLuss {
    static add (a,b){
        return a + b;
    }
}

console.log(PLuss.add(2, 5));

//Getters and Setters

class Person {

    constructor(name){
        this._name = name;
    }

    //Getter
    get name() {
        return `${this._name}`
    }

    //Setter
    set name(NewName){
        if(NewName.length > 0){
            this._name = NewName;
        }
        else {
            console.log("Invalid Name");
            
        }
    }
}

let p = new Person("Shlok")

console.log(p.name);


p.name = "Singh"


console.log(p.name);

p.name =  "";