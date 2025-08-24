function FirstCall(Ball) {
    function SecondCall() {
        return console.log(`This is Result ${Ball}`);
        
    }
    return SecondCall();
}


// FirstCall("Tennis Ball");

//Arrow Function

const CalculateTotal = (Price, Quantity) => {
    return Price * Quantity
}

let TotalCost = CalculateTotal(20, 40);

// console.log(TotalCost);

//One Line Arrow Function.

const MySum = (Num1, Num2) => Num1 + Num2;

// console.log(MySum(20, 20));

//Higher order function

function Second(Surprise){
    return `What's the surprise : ${Surprise}`
}

function one(TheSecondfn) {
    return TheSecondfn("I am the Surprise");
}

let callme = one(Second);

// console.log(callme);

//Task

function createCake(){
    return function (cakeStyle) {
        return `I have a ${cakeStyle}`;
    }
}

const callCake = new createCake();

console.log(callCake("Choclate Cake"));

// console.log(createCake("Choco cake"));







