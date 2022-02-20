$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elementTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elementTop - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
    
    $('beginscrollin').addClass('scrollin');
 
  });
});
