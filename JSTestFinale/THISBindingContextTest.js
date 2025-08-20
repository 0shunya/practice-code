const person = {
    name: "shlok",
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

// const callperson = person.introduce.bind({name: "aaru"});
// callperson();

//Task 2


function introduce(name, age) {
    this.name = name;
    this.age = age;

    // console.log(`I am ${this.name} and my age is ${this.age}`);    
}

let one = new introduce("Shlok", 22)
let two = new introduce("zafar", 23)
let three = new introduce("Amir", 21)

one;
 console.log(one);
// console.log(two);
// console.log(three);


// sum function using this.multiplier
function sum(a, b) {
  return (a + b) * this.multiplier;
}

// Define different context objects with multiplier values
const context1 = { multiplier: 2 };
const context2 = { multiplier: 5 };

// Call sum() with different contexts using apply()
const result1 = sum.apply(context1, [3, 4]); // (3 + 4) * 2 = 14
const result2 = sum.apply(context2, [3, 4]); // (3 + 4) * 5 = 35


console.log(result1);
console.log(result2);


