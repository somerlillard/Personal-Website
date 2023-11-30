/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* menu show*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Mobile Menu */
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll Up Show*/
const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')    
}
window.addEventListener('scroll', scrollUp)

/* Scroll Reveal Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset
})
sr.reveal('.home__perfil', {origin: 'right'})
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info', {origin: 'left'})
sr.reveal('.projects__card', {interval: 100})