function onl(){
    window.scrollBy(-100,-100);
}
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
    let sp = $('.sp');
    let jp = $('.jupiter');
    h = $('h1'); 
    let bg = $('.background');
    let fg = $('.foreground');
    let fgR = $('.fgR');
    let ea = $('.navbar__earth');
    let eatxt= $('.navbar__item1');
    let colors = $('.colors');
    let predicts = ['Тебя ждёт весёлый день/Работать нужно не 24 часа в сутки, а головой/То, что ты хочешь зажечь в других, должно гореть в тебе самом/ Если делать хуйню не понимая, что ты делаешь хуйню - это хуйня, а если делаешь хуйню с полным осознанием и неебенной уверенностью - это перфоманс/На моей луне я всегда один/-Как ты так далеко плаваешь?<br>-Я не берегу сил на обратный путь/ Утрата всяких надежд была свободой!/Если жизнь дарит тебе лимон, проси соли и текилу./Ты сама определяешь, где ты ошиблась, а где так и хотела/2% таланта 98% уверенности/Сегодня усилия — завтра результат/Твоё счастья начнётся только к вечеру/Ты сделаешь 80% своих планов/Сегодня ты получишь хорошую новость/Жизнь прекрасна, а Лёня уебан/Сегодня отличный день для интегралов/Good day to die/Солнце светит тем, кто ебашит/Этот день нужно просто пережить. Для этого нужно жить/Если конец ужасен, значит, это ещё не конец/Ты переживала любой момент, который с тобой случался, переживёшь и этот/Рано или поздно всё будет хорошо. Сегодня - рано./Тебе стоит больше запланировать на сегодня, потому что все планы сбудутся/Делай не так, как правильно, делай так, как прикольно/Каждая новая сложность на твоём пути - просто один шаг вперёд/Рождённый ползать никак не может ходить/То, что не получится у тебя сегодня, обязательно получится завтра/Чтобы быть лучше других, нужно делать больше других'];
    let splitS = String(predicts);
    let PredictS =splitS.split('/');
    let rand = Math.floor(Math.random() * PredictS.length);
    let randE = PredictS[rand];
    let images = ['1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39'];
    let imagesS = String(images).split(" ");
    let rand2 = Math.floor(Math.random() * imagesS.length);
    let randI = imagesS[rand2];
    let forA = "assets/images/" +randI + ".jpg";
    $('.im').attr('src', forA );
    $('p').html(randE);
    setTimeout(sp.css({
        opacity: '96%'
    }),6000);
    setTimeout($('h2').css({
        opacity: '80%'
    }), 3000);
    setTimeout(() =>$(".predicts").css({
        marginLeft: '0%',
        opacity: '100%'
    }), 2000);
    setTimeout(() =>$(".DayPhoto").css({
        marginRight: '0%',
        opacity: '100%'
    }), 2000);
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
    colors.css({
        transform: 'rotate(-15deg)',
    });
    jp.css({
        transform: 'rotate(180deg) scale(2)',
        left: '150vw'
    });
    setTimeout(() => ea.css({filter: 'grayscale(80%)',}), 300);

});
