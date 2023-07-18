const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
btnCart.addEventListener('click', () => {
containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');
let allProducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
productsList.addEventListener('click', (e) => {
if (e.target.classList.contains('btn-add-cart')) {
const product = e.target.parentElement;
const infoProduct = {
quantity: 1,
title: product.querySelector('h2').textContent,
price: product.querySelector('p').textContent,
};
const exists = allProducts.some((product) => product.title === infoProduct.title);
if (exists) {
const products = allProducts.map((product) => {
if (product.title === infoProduct.title) {
product.quantity++;
return product;
} else {
return product;
}
});
allProducts = [...products];
} else {
allProducts = [...allProducts, infoProduct];
}
guardarCarrito();
showHTML();
}
});
rowProduct.addEventListener('click', (e) => {
if (e.target.classList.contains('icon-close')) {
const product = e.target.parentElement;
const title = product.querySelector('p').textContent;
allProducts = allProducts.filter((product) => product.title !== title);
guardarCarrito();
showHTML();
}
});
const showHTML = () => {
if (!allProducts.length) {
cartEmpty.classList.remove('hidden');
rowProduct.classList.add('hidden');
cartTotal.classList.add('hidden');
} else {
cartEmpty.classList.add('hidden');
rowProduct.classList.remove('hidden');
cartTotal.classList.remove('hidden');
}
rowProduct.innerHTML = '';
let total = 0;
let totalOfProducts = 0;
allProducts.forEach((product) => {
const containerProduct = document.createElement('div');
containerProduct.classList.add('cart-product');
containerProduct.innerHTML = `
<div class="info-cart-product">
<span class="cantidad-producto-carrito">${product.quantity}</span>
<p class="titulo-producto-carrito">${product.title}</p>
<span class="precio-producto-carrito">${product.price}</span>
</div>
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="icon-close">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
</svg>
`;
rowProduct.append(containerProduct);
total = total + parseInt(product.quantity * product.price.slice(1));
totalOfProducts = totalOfProducts + product.quantity;
});
valorTotal.innerText = `$${total}`;
countProducts.innerText = totalOfProducts;
};
let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
let searchInput = document.getElementById('searchInput').value;
console.log('Se ha realizado la búsqueda de:', searchInput);
});
function guardarCarrito() {
localStorage.setItem('carrito', JSON.stringify(allProducts));
}
function cargarCarrito() {
const carrito = localStorage.getItem('carrito');
if (carrito) {
allProducts = JSON.parse(carrito);
showHTML();
}
}
window.addEventListener('DOMContentLoaded', cargarCarrito);
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
searchInput.addEventListener('input', function() {
const searchTerm = searchInput.value;
performSearch(searchTerm);
});
function performSearch(searchTerm) {
searchResults.innerHTML = '';
const resultsArray = juegos.filter(function(juego) {
return juego.toLowerCase().includes(searchTerm.toLowerCase());
});
displayResults(resultsArray);
}
function displayResults(resultsArray) {
resultsArray.forEach(function(result) {
const resultItem = document.createElement('div');
resultItem.textContent = result;
searchResults.appendChild(resultItem);
});
}
function fetchJuegos() {
fetch('../json/juegos.json')
.then(response => response.json())
.then(data => {
const juegos = data.juegos;
displayResults(juegos);
})
.catch(error => {
console.error('Error al obtener la lista de juegos:', error);
});
}
window.addEventListener('DOMContentLoaded', fetchJuegos);
