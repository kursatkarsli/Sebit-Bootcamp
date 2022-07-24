const hamburger = document.getElementById('hamburger-menu')
const image = document.querySelector('#header-picture')
const items = document.querySelector('#menu-items')
const hamburgerItems = document.querySelector('.hamburger-items')


hamburger.addEventListener('click', () => {
    hamburgerItems.classList.toggle('hamburger-items')

})
