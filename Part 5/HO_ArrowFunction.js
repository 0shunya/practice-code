//QUEST 1 map()

let arr = [2,3,4,5,6,8]

// const squareNumbers = arr.map(x => (x*2));

// console.log(squareNumbers);

//QUEST 2 filter()

// const filterEvenNumbers = (arr) => arr.filter(x => x % 2 === 0);

// console.log(filterEvenNumbers(arr));

//Quest 3 filter() and reduce()

// const sumPositiveNumbers = (arr) => arr.filter(x => x > 0  ) .reduce((sum, num) => sum + num, 0);

// console.log(sumPositiveNumbers(arr));

//Quest 4
 
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const getNames = (people) => people.map(x => x.name);

console.log(getNames(people));

//quest 5

let name = ["a","n","m","o","T"]

const findLongestWord = (name) => name.reduce((sum,num) => sum+num,);


console.log(findLongestWord(name));

const person = {
    name: "Shlok",
    Age: 22
};


function outer(person) {
    return `HI I am ${person.name} and I am ${person.Age}`
}

console.log(outer(person));

