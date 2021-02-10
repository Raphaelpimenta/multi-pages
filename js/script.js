(function(){
    'use strict'

    //Menu Hamburguer
    let nav = document.querySelector('nav');
    let btn = document.querySelector('.hamburger');

    let ariaControl = btn.getAttribute('aria-controls');

    let menu = document.getElementById(ariaControl);

    nav.classList.remove('no-js');
    nav.classList.add('js')

    btn.addEventListener('click', function(){
        nav.classList.toggle('menu-opened');

        let ariaExpanded = this.getAttribute('aria-expanded') === 'true';

        btn.setAttribute('aria-expanded', !ariaExpanded);
        menu.setAttribute('aria-expanded', !ariaExpanded);
    })
    
})()