//Quest 1


function sumOfN(n) {
    
    let GG = null;
    
     for (var i = 0; i < n; i++) {
         GG = n*(n+1)/2
     }
  return GG;
}

console.log(sumOfN(5));

//Quest 2nd



function printMultiplicationTable(n) {
    let Table = [] 

    for (let i = 1; i <= 10 ; i++) {
        Table.push(`${n} x ${i} = ${n*i}`);
        
    }

  return Table;
}

console.log(printMultiplicationTable(2));

//Quest 3

function countVowels(str) {

    let vowels = ["a","e","i","o","u"];

    let my = []

    let arrstr = [...str]

    for(let i = 0; i < arrstr.length; i++){
           if(vowels.includes(arrstr[i].toLowerCase())){
             my.push(arrstr[i]);
             
             //if added a vomel then don't stop complete the name
        }
        
        
        

    }

  return my;
}

console.log(countVowels("shloka"));
