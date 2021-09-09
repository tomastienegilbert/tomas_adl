$(window).scroll(function() {
    $('.bg-transparent, .nav-bg-scrolled').toggleClass("bg-transparent nav-bg-scrolled", $(this).scrollTop() > 200);
})