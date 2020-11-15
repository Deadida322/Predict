document.addEventListener("DOMContentLoaded", function() {
    window.scrollBy(-100,-100);
  });


addEventListener('mousemove', function parallax(){
    window.scrollBy(-100,-100);
    e = window.event;
    let mstars = $('.background__littleStars');
    let posX = e.clientX;
    let posY = e.clientY;
    mstars.css({
        transform: `translate(${posX/100}%,${posY/100}%)`
    });
});
$(document).mousemove(function(event){
    e = event;
    let mstars = $('.background__little-stars');
    let bstars = $('.foreground');
    let h1 = $('h1');
    let nav = $('nav');
    let posX = e.clientX;
    let fgR = $('.fgR');
    let posY = e.clientY;
    mstars.css({
        transform: `translate(${posX/1500}%,${posY/750}%)`
    });
    fgR.css({
        transform: `translate(${posX/2000}%,${posY/1000}%)`
    });
    h1.css({
        transform: `translate(${posX/2000}%,${0}%)`
    });
    nav.css({
        transform: `translate(${posX/2000}%,${0}%)`
    });
  });

$('.navbar__item1').on("click", function fadeou (e){
    let nav = $('nav');
    let jp = $('.jupiter');
    h = $('h1'); 
    let bg = $('.background');
    let fg = $('.foreground');
    let fgR = $('.fgR');
    let ea = $('.navbar__earth');
    let eatxt= $('.navbar__item1')
    setTimeout(() => nav.fadeOut(0), 2000);
    setTimeout(() => h.fadeOut(100), 1800);
    setTimeout(() => h.fadeIn(100), 2000);
    setTimeout(() => jp.fadeOut(100), 3000);
    setTimeout(() => h.html('Предсказания'), 2000);
    bg.css({
        transform: 'rotate(-15deg)',
    });
    fg.css({
        transform: 'rotate(-15deg)',
    });
    jp.css({
        transform: 'rotate(180deg) scale(2)',
        left: '150vw'
    });
    setTimeout(() => ea.css({filter: 'grayscale(80%)',}), 300);

});