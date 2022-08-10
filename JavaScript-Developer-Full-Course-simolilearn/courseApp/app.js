const cart = document.querySelector('nav .cart');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const burger = document.querySelector('.burger');
const menuSidebar = document.querySelector('.menu-sidebar');
const closeMenu = document.querySelector('.close-menu');
const cartItemsTotal = document.querySelector('.noi');
const proceTotal = document.querySelector('.total-amount');
const cartUi = document.querySelector('.cart-sidebar .cart');
const totalDiv = document.querySelector('.total-sum');
const clearBtn = document.querySelector('.clear-cart-btn');
const cartContent = document.querySelector('.cart-content');

let Cart = [];
let buttonDOM = [];

cart.addEventListener('click', () => {
   cartSidebar.style.transform = 'translate(0%)';
   const bodyOverlay = document.createElement('div');
   bodyOverlay.classList.add('overlay');
   setTimeout(() => {
      document.querySelector('body').append(bodyOverlay);
   }, 300);
});

closeCart.addEventListener('click', () => {
   cartSidebar.style.transform = 'translate(100%)';
   const bodyOverlay = document.querySelector('.overlay');
   document.querySelector('body').removeChild(bodyOverlay);
});

burger.addEventListener('click', () => {
   menuSidebar.style.transform = 'translate(0%)';
});

closeMenu.addEventListener('click', () => {
   menuSidebar.style.transform = 'translate(-100%)';
});

class Product {
   async getProduct() {
      const resp = await fetch('products.json');
      const respData = await resp.json();

      let products = respData.items;
      products = products.map(item => {
         const { title, price } = item.fields;
         const { id } = item.sys;
         const img = item.fields.image.fields.file.url;
         return {title,price,id,image}
      })
      return products;
   }
}

class UI{
   displayProducts(products) {
      let result = '';
      products.forEach(product => {
         const productDiv = document.createElement('div');
         product.innerHTML = `<div class="product-cart">
                                 <img scr="${product.image}"alt="product>
                                 <span class="add-to-cart" data-id="${product.id}"</span>
                                 <i class="f"
                                 `
      });
   }
}

