document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Milk", price: 29.99 },
    { id: 2, name: "Bread", price: 19.99 },
    { id: 3, name: "Cheese", price: 59.999 },
  ];

  const cart = [];

  // Product list container
const productList = document.getElementById("product-list");

// Cart section
const cartItems = document.getElementById("cart-items");
const emptyCartMsg = document.getElementById("empty-cart");

// Cart total section
const cartTotal = document.getElementById("cart-total");
const totalPrice = document.getElementById("total-price");

// Checkout button
const checkoutBtn = document.getElementById("checkout-btn");

products.forEach(product => {
  const ProdDiv = document.createElement('div');
  ProdDiv.classList.add("product");
  ProdDiv.innerHTML = `<span> ${product.name} -$${product.price.toFixed(2)} </span>
                       <button data-id="${product.id}"> Add to Cart </button> `;
  productList.appendChild(ProdDiv);
});

productList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // console.log("CLicked");
    
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find(p => p.id === productId);
    
    addToChart(product);
  }
});

function addToChart(product){
  cart.push(product)
  renderCart()
}

function renderCart(){
  cartItems.innerText = "";
  let tPrice = 0;

  if (cart.length > 0){
    emptyCartMsg.classList.add('hidden');
    cartTotal.classList.remove('hidden');

    cart.forEach((item, index) => {
      tPrice += parseFloat(item.price.toFixed(2));
      const cartItem = document.createElement('div');
        cartItem.innerHTML = ` ${item.name} - $${item.price.toFixed(2)} - <button class="del" > delete </button>`
        cartItems.appendChild(cartItem);
        totalPrice.textContent = `${tPrice.toFixed(2)}`

        const delBtn = cartItem.querySelector(".del");
        delBtn.style.marginTop = "6px";


        delBtn.onclick = () => {
        cart.splice(index, 1);
        renderCart(); // re-render cart        
      }
    })
  } else {
      emptyCartMsg.classList.remove('hidden');
  }
}



checkoutBtn.onclick = () => {
  debugger;
  cart.length = 0;
  cartTotal.classList.add('hidden')
  
  alert(`Check out successful!`)
  renderCart()
}
  
});
