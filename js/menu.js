const mobileMenuIcon = document.querySelector('.mobile-nav-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const fadeLayer = document.querySelector('.fade-layer')

mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    fadeLayer.classList.toggle('visible');
});

fadeLayer.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    fadeLayer.classList.remove('visible');
});