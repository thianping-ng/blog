const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', ()=> {
    navbar.classList.toggle('active')
})