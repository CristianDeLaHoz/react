const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Close navbar menu when a link is clicked
const navbarLinks = document.querySelectorAll('.navbar__link');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('show');
  });
});

// Update cart count
const cartCount = document.querySelector('.navbar__cart-count');
let cartItems = 0;

function updateCartCount() {
  cartCount.textContent = cartItems;
}

// Increment cart count when icon is clicked
const cartIcon = document.querySelector('.navbar__cart-icon');
cartIcon.addEventListener('click', () => {
  cartItems++;
  updateCartCount();
});