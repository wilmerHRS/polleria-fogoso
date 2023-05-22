
/* 
    * Configurando botón del nav
*/

const navBurguer = document.querySelector('.nav__burguer');
const mobileNav = document.querySelector('.mobilenav');

navBurguer.addEventListener('click',function () {
    this.classList.toggle('nav__burguer--pressed');
    mobileNav.classList.toggle('mobilenav--active');
});

//! Evento que detecta si se agrando la pantalla para quitar el mobilenav
window.addEventListener('resize',()=>{
    if(window.innerWidth >= 990 ){
        navBurguer.classList.remove('nav__burguer--pressed')
        mobileNav.classList.remove('mobilenav--active');
    }
});

/* 
    * Configurando el boton para el popup
*/

const navUser = document.querySelector('.nav__user');
const popup = document.querySelector('.popup')
const main = document.querySelector('.main');
const subNav = document.querySelector('.subnav');

// ! activando y/o mostrando el popup
navUser.addEventListener('click',()=>{
    popup.classList.toggle('popup--active');
    subNav.classList.toggle('subnav--active');
})

// ! evento para que se oculte popup al hacer click fuera de este
window.addEventListener('click',(e)=>{
    if (!navUser.contains(e.target) && !popup.contains(e.target)){
        popup.classList.remove('popup--active');
        subNav.classList.remove('subnav--active');
    }
})
