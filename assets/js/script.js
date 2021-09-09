//Función para cambiar fondo de Navbar al Scrollear
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});