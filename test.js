/*
$(document).ready(function() {
    $('#block-efb1dda1a2fa68cb2bd7').addClass('bounce');
});
*/

$(window).scroll(function () {
  var bookIcon = '#block-efb1dda1a2fa68cb2bd7';
  var pencilIcon = '#block-e6bf357e466457afaef7';
  var handIcon = '#block-83d83ebf35bf627b1d6b';
  var icons = $([bookIcon, pencilIcon, handIcon].join(', '));
  icons.each(function () {
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

