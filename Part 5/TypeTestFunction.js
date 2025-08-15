//Quest 1

// function StringToNumber(input){
//   const num = Number(input);
//   return isNaN(num) ? "Not a Number":num;
// }

// const userinput = prompt("Enter a Number");
// const result = StringToNumber(userinput);

// console.log(result);

//Quest 2

function flipBoolean(input) {
  return !input;
}

let MyBool = flipBoolean(0);
console.log(MyBool);


//Quest 3

function WhatamI(input){
    return `I am a ${typeof(input)}`
}

let MyType = WhatamI(true);
console.log(MyType);

//Quest 4th

function isItTruthy(input) {
    return `I am ${Boolean(input)}ly`;
}

let MyTruth = isItTruthy(1);
console.log(MyTruth);