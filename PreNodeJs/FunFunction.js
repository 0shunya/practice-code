//Reverse String

function Rvs(str) {
    return str.split("").reverse().join("");
}

// console.log(Rvs("kolhs"));

//Find Max

function findMax(arr) {
  const Maxx = Math.max(...arr)
  return Maxx;
}
// console.log(findMax([3, 7, 2, 9, 5])); // 9

//Pailendrome

function isPalindrome(str) {
  const one = str.toLowerCase()
  const two = str.split("").reverse().join("");
  return one === two;
}
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false


function charCount(str) {
    let count = {}

    for(let char of str) {
        if(count[char])
        {
            count[char]++
        }
        else {
            count[char] = 1;
        }
    }
    return count;
}

// console.log(charCount("hello")); // { h:1, e:1, l:2, o:1 }

function charCount2(str) {
    return str.split("").reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1
        return acc
    }, {})
}

// console.log(charCount2("hello")); // { h:1, e:1, l:2, o:1 }

//factorial 

function facto(n){
    if(n === 0 || n === 1) return 1;

    return n * facto(n-1);
}

// facto(5)

console.log(facto(5))