let teaFlavours = ["green tea", "black tea", "oolong tea"]

// console.log(teaFlavours[0]);

let firstTea = teaFlavours[0];

console.log(firstTea);

//Quest 2nd

let Cities = new Array("London", "Tokyo", "Paris");

const FavoriteCity = Cities[2];

console.log(FavoriteCity);


//Quest 3rd

let TeaTypes = new Array("Herbal Tea", "White Tea", "Masala Chai");

TeaTypes[1] = "Jasmine Tea";

console.log(TeaTypes[1])

//Quest 4th

let CitiesVisited = ["Mumbai", "Sydney"];

// CitiesVisited[2] = "Berlin"

// CitiesVisited[CitiesVisited.length] = "Berlin"

CitiesVisited.push("Berlin~")

console.log(CitiesVisited[2]);


//Quest 5th

let TeaOrders = ["Chai", "Iced tea", "Matcha", "Earl Grey"];

let LastOrder = TeaOrders.pop();

console.log(TeaOrders);


console.log(LastOrder);

//Quest 6th //Notes: Object and Array when reffered it doesn't go to variable it directly goes to source.(vd.44, 19:12)

let GreatTeas = ["Chai", "Iced tea", "Matcha", "Earl Grey"];

let SoftCopyGreatTeas = GreatTeas;

console.log(SoftCopyGreatTeas);
console.log(GreatTeas);

//Quest 7th //Did not referred source took from variable

let BestCity = ["Mumbai", "Pune", "Delhi"];

// let HardCity = [...BestCity];

let HardCity = BestCity.slice();

BestCity.pop();

console.log(BestCity); console.log(HardCity);

//Quest 8th 

let EuropeanCities = ["Berlin", "London"];

let AsianCities = ["Mumbai", "Shanghai"];

let WorldCities = EuropeanCities.concat(AsianCities)

console.log(WorldCities);


//Quest 9th

let choclate = ["Dark Chocolate", "Milky Bar", "Kit Kat"];

let ChocoLength = choclate.length;

console.log(choclate);

//Quest 10th

let Choco = ["Dark choclate", "Dairy Milk", "Kinder Joy", "Kit Kat"];

let isKitKatInList = Choco.includes("Kit Kat");

console.log(isKitKatInList);









