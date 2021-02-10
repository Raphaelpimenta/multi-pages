(function(){
    'use strict'

    //Slide
    let currentImageIndex = 0;
    let images = document.querySelectorAll('.slider img');
    let max = images.length;

    function nextImg(){

        images[currentImageIndex].classList.remove('selected');

        currentImageIndex++

        if(currentImageIndex >= max){
            currentImageIndex = 0
        }

        images[currentImageIndex].classList.add('selected');
    }

    function slide(){
        setInterval(function(){
            nextImg();
        }, 5000)
    }

    window.addEventListener('load', slide)

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