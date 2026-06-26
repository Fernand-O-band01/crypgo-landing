document.addEventListener("DOMContentLoaded", () => {
    const burgerBTN = document.querySelector('.burguer-menu');
    const navbar = document.querySelector('.navbar');

    burgerBTN.addEventListener('click', () => {
        navbar.classList.toggle('active')
    })

})