$(function() {

impress().init();
$('.hidden').css('opacity',0);
window.addEventListener('impress:stepenter', function() {
  $('.hidden.active').animate({'opacity': 1});
  $('.clock').slideUp(0).delay(0).fadeIn(1);
  $('.fall-from-top').slideDown(1000).delay(0).fadeIn(0);
});
window.addEventListener('impress:stepleave', function() {
  $('.hidden.past').animate({'opacity': 0});
});

});
