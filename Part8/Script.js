//Example 1

// let btn = document.getElementById("BTNChangeText")
// console.log(btn);

// console.log(this);

console.log(document.getElementById("BTNShopList"))

//Points at the personal element
document.getElementById("BTNChangeText").
addEventListener('click', function () {
    // console.log(this);
   let para = document.getElementById("myParagraph");
   console.log(para);
   para.textContent = "I have been changed";
   console.log(para);
})

// // Still logs the window object
// document.getElementById("BTNChangeText").
// addEventListener('click',  () => {
//     console.log(this);
// })


//Example 2

document.getElementById("HGLFirstCity").
addEventListener('click', function () {
    document.getElementById("cities").
    firstElementChild.classList.add("highlight")
    
})

document.getElementById("BTNChangeCoffee").
addEventListener('click', function () {
    // console.log(this);
   let btn = document.getElementById("BTNChangeCoffee")
   let para = document.getElementById("CoffeeType");
   console.log(para);
   
   if(para.textContent == "Espresso") {
    para.textContent = "Latte";
    btn.textContent = "Change Order to Espresso"
   }
   else {
    para.textContent = "Espresso";
    btn.textContent = "Change Order to Latte"
   }
})




document.getElementById("BTNShopList").
addEventListener('click', function () {

    let newItem = document.createElement('li')
    newItem.textContent = "Mayo"
    document.getElementById("shoppingList").appendChild(newItem)
})

//example 5



document.getElementById("BTNRemove").
addEventListener('click', function () {

    let RemoveItem = document.getElementById('tasks')
     
    // RemoveItem.firstElementChild.remove();
    RemoveItem.lastElementChild.remove();
})
