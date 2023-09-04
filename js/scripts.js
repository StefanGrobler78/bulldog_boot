/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarText')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })

const date = document.getElementById('date');
    date.innerHTML = new Date().getFullYear();

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarText')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        
            if(menuToggle.classList.contains('show')){
                bsCollapse.toggle()
            }
    })
})