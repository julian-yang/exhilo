/*
$(document).ready(function() {
    $('#block-efb1dda1a2fa68cb2bd7').addClass('bounce');
});
*/

$(window).scroll(function () {
  $('#block-efb1dda1a2fa68cb2bd7').each(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    var animation = 'bounce';

    var imagePos = $(this).offset().top;

    if(imagePos <= bottomOfWindow-100 && imagePos >= topOfWindow-250){
      $(this).addClass(animation);
    } else {
      $(this).removeClass(animation);
    }
  });
});
