//Quest 1

let Teas = ["Iced tea", "Matcha", "Chai", "Earl Grey"];

let SelectedTeas = [];

for (let l = 0; l < Teas.length; l++) {
    
    if (Teas[l] === "Chai"){
        break;
    }
    SelectedTeas.push(Teas[l]);
    
}

// console.log(SelectedTeas);


//Quest 2

let Cities = ["Mumbai", "Pune", "Paris", "Delhi"];

let CitiesVisited = [];

for (let k = 0; k < Cities.length; k++) {
    
    if(Cities[k] === "Paris"){
        continue;
    }
    CitiesVisited.push(Cities[k]);
}

// console.log(CitiesVisited);


//Quest 3

let numbers = ["one", "two", "three", "four", "five"];

let GreatNumbers = [];

for (const num of numbers) {
    
    if(num === "four")
    {
        break;
    }
    GreatNumbers.push(num);

}

// console.log(GreatNumbers);

//QUest 4

let choclate = ["Dark Chocolate", "Milky Bar", "Oreo", "Kit Kat"];

let Gr8Choclate = [];

for (const choco of choclate) {
    
    if(choco === "Oreo"){
        continue;
    }
     Gr8Choclate.push(choco);
}

// console.log(Gr8Choclate);

//Quest 5

let Cities2 = {
    Berlin : 8000,
    London: 5000,
    "Shanghai": 9000,
    Mumbai: 12000,
    Delhi: 5000
};

let CopyCities = {};

for (const key in Cities2) {
    
    if(key === "Mumbai"){
        break;
    }

    CopyCities[key] = Cities2[key];

}

// console.log(CopyCities);

//Quest 6

let GenCities = {
    Berlin : 8000,
    London: 5000,
    "Shanghai": 9000,
    Mumbai: 12000,
    Delhi: 5000,
    Mira: 20000
};

let CopyGenCities = {};

for (const key in GenCities) {
    
    if(GenCities[key] <= 5000 ){
        continue;
    }

    CopyGenCities[key] = GenCities[key];

}

// console.log(CopyGenCities);

//Quest 7th

let Teas2 = ["Iced tea", "Matcha", "Chai", "Earl Grey"];

let SelectedTeas2 = [];

Teas2.forEach(function(teazzz) {
    
    if(teazzz === "Chai")
    {
         return;
    }
    SelectedTeas2.push(teazzz)

});

// console.log(SelectedTeas2);


//Quest 9 (8 was the same so skipped)

let MyNumbers = [2,4,7,9];

let MyNum = [];

for (let l = 0; l < MyNumbers.length; l++) {
    
    if(MyNumbers[l] == 7)
    {
        continue;
    }
    MyNum.push(MyNumbers[l]*2)
}

// console.log(MyNum);

//Quest 10

let MyChai = ["Tea", "jasmine Tea", "Black Tea", "oolong Tea"];

let MyFavChai = [];

for (const cup of MyChai) {
    
    if(cup.length > 10)
    {
        break;
    }
    MyFavChai.push(cup);

}

console.log(MyFavChai);


