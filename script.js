$('.btn-class').on('click', function () {
    if ($(this).find('i').hasClass("far fa-heart")) {
        $(this).find('i').addClass("fas fa-heart");
    }
    else {
        $(this).find('i').addClass("far fa-heart").removeClass("fas fa-heart");
    }
});

$('.nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});
$(".add").hide();
$(".add1").hide();
$(".add2").hide();
$(".add3").hide();
$(".add4").hide();
$(".ler").on('click', function () {
    event.preventDefault();
    $(".add").show(700);
});

// Books

$(".ler1").on('click', function () {
    event.preventDefault();
    $(".add1").show(700);
});
$(".ler2").on('click', function () {
    event.preventDefault();
    $(".add2").show(700);
});
$(".ler3").on('click', function () {
    event.preventDefault();
    $(".add3").show(700);
});
$(".ler4").on('click', function () {
    event.preventDefault();
    $(".add4").show(700);
});

// Movies
$('.owl-carousel').owlCarousel({
    items: 4
    , loop: true
    , dots: false
    , nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        410:{
            items:2,
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

// Mobile adaptation

let nav = $("#nav");

$("#navToggle").on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
});

$(".nav__link").on("click", function(event) {
    event.preventDefault();
    $("#nav").removeClass("show")
});
