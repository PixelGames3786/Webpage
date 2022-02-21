$(function() {

  $('.fadein').each(function(){
      var winheight = $(window).height();
      var posi = (this).offset().top;
      var scroll = $(window).scrollTop();
      if (scroll + winheight > posi){
        $(this).addClass('scrollin');
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
        //$(this).removeClass('scrollin');
      }
    });
  // フェードイン処理
  //$(window).scroll(function (){
    
  // });

}); 
