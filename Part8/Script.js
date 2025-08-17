//Example 1

// let btn = document.getElementById("BTNChangeText")
// console.log(btn);

// console.log(this);

// console.log(document.getElementById("BTNShopList"))

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

document.getElementById("BTNClickMe").
addEventListener('click', function () {
    alert("I was clicked")
})



document.getElementById("teaList").
addEventListener('click', function (event) {
    if(event.target && event.target.matches(".teaitem")){
        alert("you have selected " + event.target.textContent)
    }
})

document.getElementById("feedbackForm")
.addEventListener('submit', function (event) {
    event.preventDefault();
    let fb = document.getElementById("feedback").value;
    console.log(fb);
    // let fb1 = document.getElementById("feedback");
    // console.log(fb1);
   let chngtt =  document.getElementById("feedbackOutput")

//    chngtt.textContent = `The text entered is ${fb}`;

//    chngtt.style.color = 'Red';
//    chngtt.style.fontSize = '24px';

chngtt.textContent = "The text entered is ";

// create a span for fb
let fbSpan = document.createElement("span");
fbSpan.textContent = fb;
fbSpan.style.color = "red";
fbSpan.style.fontSize = "24px";

// append span after the text
chngtt.appendChild(fbSpan);
})

//Example 9
document.addEventListener('DOMContentLoaded', function () {
    // alert("See it")
    document.getElementById('domStatus').textContent =
    "DOM is FULLY LOADED"
})


//Example 10 

document.getElementById("toggleHighlight")
        .addEventListener("click", function () {
   let DT = document.getElementById("descriptionText");
   console.log(DT);
   

   DT.classList.toggle("highlight");
} )