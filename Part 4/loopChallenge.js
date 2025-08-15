let sum = 0;

let i = 1;

while (i <= 5) {
    sum = sum +i;
    // sum +=1;
    i++;
}

console.log(sum);

//Quest 2nd

let CountDown = [];
let j = 5;

while (j > 0) {
    CountDown.push(j)
    j--;
}

console.log(CountDown);


//Quest 3rd

// let FoodCollection = [];

// let Food;

// do {
    
//     Food = prompt(`Enter your favourite food(Press "stop" to finish)`);

//     if (Food != "stop") {
//         FoodCollection.push(Food);
//     }

// } while (Food != "stop");

//Quest 4th

let total = 0;
let k = 1;

do {
    total += k;
    k++;
} while (k <= 3);

console.log(total);

//Quest 5th

let MultipliedNumbers = [];
let Numbers = [2,4,6];

for (let l = 0; l < Numbers.length; l++){
   let TakeNumb = Numbers[l] * 2;
    MultipliedNumbers.push(TakeNumb);
}

console.log(MultipliedNumbers);


//Quest 6th

let BigCities = ["Tokyo", "Kyoto", "Shanghai", "Delhi"];

let MyCities = [];

for (let l = 0; l < BigCities.length; l++){

     MyCities.push(BigCities[l]);

}

console.log(MyCities);

