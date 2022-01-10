
const navOpen = ()=>{
// hidden nav links
const nav = document.getElementById('nav');
// burger
const burger = document.getElementById('burger');

// burger Click Eventlistener
burger.addEventListener('click', ()=>{
    nav.classList.toggle('opened-nav');
// animate burger
burger.classList.toggle('toggle');
});


}

// Envoke navOpen Function
navOpen();

