
// Define product
let productsDom = document.querySelector(".products");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartProductMenu = document.querySelector(".carts-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let products = JSON.parse(localStorage.getItem("products"));

// Open Cart Menu
shoppingCartIcon.addEventListener("click", openCartMenu);

// Display products
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {  
    return `
        <div class="product-item">
            <img src="${item.imageUrl}" class="product-item-img" alt="image" />
            <div class="product-item-desc">
                <a onClick="saveItemData(${item.id})"> ${item.title}</a>
                <p> Lorem ipsum dolor sit amet consectetur </p>
                <span> size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onClick="addedToCart(${item.id})">Add To Cart</button>
                <i class="favorite far fa-heart"></i>
            </div>
        </div>
    `;
  });
  productsDom.innerHTML = productsUI;
})(JSON.parse(localStorage.getItem("products")));

// Check if there is items in localStorage

let  addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (addedItem) {
  addedItem.map(item => {
    cartProductDivDom.innerHTML += `<p>${item.title}</p>`
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
};

// Add to cart
let allItems = [];
function addedToCart(id) {
  if(localStorage.getItem("username")) {
    let choosenItem = products.find((item) => item.id === id);
    let items = allItems.find((i) => i.id === choosenItem.id);
    if(item) {
      choosenItem.qty += 1;
    } else {
      allItems.push(choosenItem);
      console.log("a", allItems);
    }
    allItems.forEach(item => {

         cartProductDivDom.innerHTML += `<p>${choosenItem.title}</p>`;
    })
   // cartProductDivDom.innerHTML += `<p>${choosenItem.title}</p>`;
    addedItem = [...addedItem, choosenItem];
    localStorage.setItem('productsInCart', JSON.stringify(addedItem));
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html"

  }
  }

  // Open cart menu
function openCartMenu() {
 if(cartProductDivDom.innerHTML != "") {
   if(cartProductMenu.style.display == "block") {
     cartProductMenu.style.display = "none";
   } else {
     cartProductMenu.style.display = "block";
   } 
 }
}

function saveItemData(id){
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html"; 
}
// search function
let input = document.getElementById("search");
input.addEventListener("keyup", function(e) {
  if(e.keyCode === 13) {
    search(e.target.value, JSON.parse(localStorage.getItem("products")));
  }
  if(e.target.value.trim() === "") {
    drawProductsUI(JSON.parse(localStorage.getItem("products")));
  }
});  
function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
  drawProductsUI(arr);
}

