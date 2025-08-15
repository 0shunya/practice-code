
// function filterNumbers(Mix) {
    
//     for (let l = 0; l < Mix.length; l++) {
//        if( typeof Mix[l] == "number") {
//           NumOnly.push(Mix[l])
//        }        
//     }
//   return NumOnly;
// }

// let Mix = ["One",2,"Three",4,"Five"]
// let NumOnly = []

// filterNumbers(Mix);

// console.log(NumOnly)

//Quest 2nd 

// let Num = ["Hello","Shlok", "Namaste", "World"];

// let RevNum = [];

// function reverseArray(Num) {
    
//     for (let k = 0; k < Num.length; k++) {

//         RevNum[k] = Num[Num.length - k - 1];
        
//     }

//   return RevNum;
// }
// reverseArray(Num);

// console.log(RevNum);


//Quest 3

// let MaxNum = [1,2,3,4,5,20,6]

// let NewMax = MaxNum[0] //Method 2


// function findMax(MaxNum) {

//   for (let M = 0; M < MaxNum.length; M++) {
      
//     // NewMax = Math.max(...MaxNum) //Method 1

//     //Method 2
//      if (MaxNum[M] > NewMax) {
//       NewMax = MaxNum[M];
//      }

    
//   }

//   return NewMax;
// }

// findMax(MaxNum);

// console.log(findMax(MaxNum))

//Quest 4 

let DupNum = [1,2,3,4,5,20,6,3]

//let NewDup = DupNum[0] //Method 2

let DUP = []

function removeDuplicates(DupNum) {

  let seen = {};

  for (let D = 0; D < DupNum.length; D++) { 

      let value = DupNum[D];

      if(seen[value]){
         if(!DUP.includes(value)){
          DupNum.pop(value)
          DUP.push(value)
         }
      } else {
         
        seen[value] = true;
      }
  }

  return DupNum;
}


removeDuplicates(DupNum);

console.log(removeDuplicates(DupNum));


//Quest 5

let FlatArr = [1,2,[3,[11,[20,10,30,40,[100,200,300]],12,13],4,5],6,7]

function flattenArray(FlatArr) {

  let OP = FlatArr.flat(Infinity);

  return OP;
}

console.log(flattenArray(FlatArr));